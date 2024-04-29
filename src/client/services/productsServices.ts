import apiClient from "../helpers/apiClient";

export type ProductItem = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
};

export type Products = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ProductItem[];
};

export const getProducts = (query: string) =>
  apiClient<Products>({ url: "/items", params: { q: query, limit: 4 } });
