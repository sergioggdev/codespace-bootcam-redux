type Product = {
  id: number;
  name: string;
  cargo: string;
  price: string;
  image: string;
};

type AddAction = { type: 'ADD_PRODUCT'; payload: Product };
export type AddActionGenerator = (payload: Product) => AddAction;

type DeleteAction = { type: 'DELETE_PRODUCT'; payload: { id: number } };
export type DeleteActionGenerator = (payload: { id: number }) => DeleteAction;

export type rootAction = AddAction | DeleteAction;
