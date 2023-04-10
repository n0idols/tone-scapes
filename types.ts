export interface Category {
  id: string;
  name: string;
  image: string;
  Products: Product[];
}
export interface Product {
  id: string;
  name: string;
  shortname: string;
  price: number;
  desc: string;
  features: string;
  image?: string;
  mobileimg?: string;
  gallery?: string[];
  includes?: any;
  category?: {
    id: string;
  };
  categoryId?: string;
}

export interface BoxItem {
  name: string;
  qty: number;
}

export type Params = {
  params: {
    id: string;
  };
};
