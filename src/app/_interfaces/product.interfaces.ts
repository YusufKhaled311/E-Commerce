export type ProductType = {
  id: string;
  title: string;
  imageCover: string;
  price: number;
  ratingsAverage: number;
  category: CategoryType;
  brand: BrandType; 
  description: string;
  priceAfterDiscount?: number;
}

export type BrandType = {
  image: string;
  name: string;
  slug: string;
  _id: string;
}

export type CategoryType = {
  image: string;
  name: string;
  slug: string;
  _id: string;
}
