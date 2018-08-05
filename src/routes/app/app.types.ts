export type Props = {
  getProduct?: () => void;
  products?: Products[];
};

export type Products = {
  name: string;
  price: string;
  id: number;
  cargo: string;
  image: string;
};
