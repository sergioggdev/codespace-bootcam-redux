type Product = {
  id: number;
  name: string;
  cargo: string;
  price: string;
  image: string;
  quantity: number;
};

export type RootStateTypes = {
  readonly cart: (Product)[];
};
