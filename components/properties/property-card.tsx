import { PropertyCardProps, PropertyRates } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaMapMarker } from "react-icons/fa";
import { FaBath, FaBed, FaMoneyBill, FaRulerCombined } from "react-icons/fa";

export const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
  const getPropertyRate = (rates: PropertyRates) => {
    if (rates.monthly) {
      return `${rates.monthly}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly}/night`;
    }
  };
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt={property.name}
        height={0}
        width={0}
        className="w-full h-auto rounded-t-xl"
        sizes="100vw"
      />

      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getPropertyRate(property.rates)}
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <Amenity
            amenity={property.beds}
            label="Baths"
            icon={<FaBath className="inline mr-2" />}
          />
          <Amenity
            amenity={property.baths}
            label="Beds"
            icon={<FaBed className="inline mr-2" />}
          />
          <Amenity
            amenity={property.square_feet}
            label="sqft"
            icon={<FaRulerCombined className="inline mr-2" />}
          />
        </div>
        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && <Rate label="Nightly" />}
          {property.rates.weekly && <Rate label="Weekly" />}
          {property.rates.monthly && <Rate label="Monthly" />}
        </div>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0 items-center">
            <FaMapMarker className="text-lg text-orange-700" />
            <span className="text-orange-700">
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

interface AmenityProps {
  amenity: number;
  label: string;
  icon: ReactNode;
}

const Amenity = ({ amenity, label, icon }: AmenityProps) => {
  return (
    <p className="flex items-center">
      {icon} {amenity}{" "}
      <span className="md:hidden lg:inline ml-0.5">{label}</span>
    </p>
  );
};

interface RateProps {
  label: string;
}

const Rate = ({ label }: RateProps) => {
  return (
    <p className="flex items-center">
      <FaMoneyBill className="inline mr-2" />
      {label}
    </p>
  );
};
