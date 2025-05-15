import { PropertyInterface } from "./models";

export interface PropertyLocation {
  street: string;
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
  name: string;
  phone: string;
  email: string;
}

export interface PropertiesResponse extends PropertyInterface {
  _id: string;
}
