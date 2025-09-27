interface Author {
  name: string;
};

export type Article = {
  id: number;
  authors: Author[];
  published_at: string;
  title: string;
    url: string;    
};
