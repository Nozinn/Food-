export interface Dish {
  id: string;
  title: string;
  description?: string;
  price: number;
  weight?: string;
  image: string;
  category: string;
  gallery?: string[];
  options?: {
    id: string;
    title: string;
    price: number;
  }[];
}
