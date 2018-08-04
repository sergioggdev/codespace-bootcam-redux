export type Props = {
  data: {
    name: string;
    price: string;
    id: number;
    cargo: string;
    image: string;
  };
  addAction: ({ name, price, id, cargo, image }) => void;
};
