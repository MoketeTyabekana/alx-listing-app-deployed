export interface CardProps {
  
  title: string;
  price_perNight: number;
  city: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  number_of_guests: string; 
  rating: number;
  features?: string[];
}

export interface ButtonProps {
  
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"|"tertiary";
  className?: string;
  disabled?: boolean;
  icon?:string;
}



interface Address {
  state: string;
  city: string;
  country: string;
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}


export interface PropertyProps {
  id: string | number;
     name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;

}