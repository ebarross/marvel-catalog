type Creator = {
  name: string;
  role: string;
};

export type Comic = {
  id: number;
  title: string;
  description: string;
  image: string;
  saleDate: string;
  creators: Creator[];
};
