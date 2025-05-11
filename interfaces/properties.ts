export interface PropertyLocation {
  street: string;
  city: string;
  state: string;
  zip?: string;
}

export interface PropertyRates {
  nightly?: number;
  weekly?: number;
  monthly?: number;
}

export interface SellerInfo {
  name: string;
  phone: string;
  email: string;
}

export interface PropertyCardProps {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: PropertyRates;
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
  created_at?: string;
  updated_at?: string;
}
