type Product = {
  id: number;
  name: string;
  cargo: string;
  price: string;
  image: string;
};

export type AsyncStateTypes = {
  readonly products: Product[];
  readonly productsError: Object | null;
};
