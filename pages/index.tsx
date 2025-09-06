import React from "react";
import { BACKGROUND_IMAGE, BUTTON_TEXT, API_BASE_URL } from "@/constants/index";
import Button from "@/components/common/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
  const response = await axios.get(`${API_BASE_URL}/api/properties`);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="lg:px-10 px-2 overflow-x-none">
      <section
        className="w-full hero h-[400px] bg-cover bg-center rounded-2xl mt-10 flex justify-center items-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className=" lg:w-2/5 w-3/4 text-white  text-center">
          <h1 className="text-6xl font-semibold mb-6 leading-tight">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className=" flex gap-2 mt-10">
        <div className=" flex-3/5 flex justify-start gap-2">
          <Button
            label={BUTTON_TEXT.all}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.topVilla}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.freeReschedule}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.bookNowPayLater}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.selfCheckin}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.instantBook}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
        </div>
        <div className="flex-2/5 flex justify-end gap-2">
          <Button
            label={BUTTON_TEXT.filter}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
          <Button
            label={BUTTON_TEXT.sortByHighestPrice}
            variant="secondary"
            onClick={() => console.log("All clicked!")}
          />
        </div>
      </section>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {properties.map((property) => (
          <Card
            key={String(property.id)}
            id={String(property.id)}
            title={property.name}
            price_perNight={property.price}
            city={property.address.city}
            image={property.image ?? ""}
            bedrooms={Number(property.offers?.bed)}
            bathrooms={Number(property.offers?.shower)}
            number_of_guests={String(property.offers?.occupants)}
            rating={property.rating}
            features={property.category}
          />
        ))}
      </div>
    </main>
  );
}
