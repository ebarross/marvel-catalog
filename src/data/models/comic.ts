type Author = {
  name: string;
  role: string;
};

export type Comic = {
  id: number;
  title: string;
  image: string;
  authors: Author[];
};
