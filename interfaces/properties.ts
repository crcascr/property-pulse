import { PropertyInterface } from "./models";

export interface PropertyLocation {
  street?: string;
  city: string;
  state: string;
  zip?: string;
}

export interface PropertyRates {
  nightly?: number | undefined;
  weekly?: number | undefined;
  monthly?: number | undefined;
}

export interface SellerInfo {
  name?: string;
  phone?: string;
  email: string;
}

export interface PropertiesResponse extends PropertyInterface {
  _id: string;
}

export interface AddPropertyInterface {
  type: string;
  name: string;
  description?: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities?: string[];
  rates: PropertyRates;
  seller_info: SellerInfo;
  images?: string[];
}
