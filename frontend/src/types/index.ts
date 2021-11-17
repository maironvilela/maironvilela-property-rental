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

export type PropertyImages = {
  id: number;
  imageUrl: string;
  isMainImage: boolean;
};

export type Specification = {
  name: string;
  description: string;
};

export type Property = {
  id: number;
  description: string;
  propertyType: string;
  salePrice: number;
  rentalPrice: number;
  isLocation: boolean;
  isSale: boolean;
  address: Address;
  propertyImages: PropertyImages[];
  isMainImage: string;
  specifications: Specification[];
  aboutTheProperty: string;
};
