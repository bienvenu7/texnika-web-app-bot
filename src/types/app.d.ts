export interface ICategory {
  id?: string;
  name: string;
  publicName: string;
}

export interface IPicture {
  id: string;
  url: string;
  createdAt: Date;
  referId: string;
}

export interface IProduct {
  id: string;
  name: string;
  publicName: string;
  price: number;
  categoryId: string;
  totalItem: number;
  createdAt?: Date;
}

export interface ICart {
  id: string;
  categoryId: string;
  name: string;
  items: number;
  price: number;
}

export interface IRaiting {
  id: string;
  starts: number;
  comment: string;
  productId: string | null;
}
//bhjgh
