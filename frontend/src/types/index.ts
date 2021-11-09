type Address = {
  id: number;
  zipCode: string;
  streetAddress: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
};

type PropertyImages = {
  id: number;
  imageUrl: string;
  isMainImage: boolean;
};

export type Property = {
  id: number;
  description: string;
  propertyType: string;
  price: number;
  isLocation: boolean;
  isSale: boolean;
  address: Address;
  propertyImages: PropertyImages[];
  isMainImage: string;
};
