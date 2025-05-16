import { PropertiesResponse } from "@/interfaces";
import {
  FaBath,
  FaBed,
  FaCheck,
  FaMapMarker,
  FaRulerCombined,
} from "react-icons/fa";
import { PropertySidebar, Rate } from "@/components/property";
import { Amenity } from "@/components/properties";

interface Props {
  property: PropertiesResponse;
}

export const PropertyInformation = ({ property }: Props) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
          <main>
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
              <div className="text-gray-500 mb-4">{property.type}</div>
              <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
              <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                <FaMapMarker className="text-lg text-orange-700 mr-2" />
                <p className="text-orange-700">
                  {property.location?.street} {property.location?.city},
                  {property.location?.state} {property.location?.zipcode}
                </p>
              </div>
              <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                Rates & Options
              </h3>
              <div className="flex flex-col md:flex-row justify-around">
                <Rate label="Nightly" rate={property?.rates?.nightly} />
                <Rate label="Weekly" rate={property?.rates?.weekly} />
                <Rate label="Monthly" rate={property?.rates?.monthly} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
              <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
                <Amenity
                  amenity={property.beds}
                  label="Beds"
                  icon={<FaBed className="inline mr-2" />}
                />
                <Amenity
                  amenity={property.baths}
                  label="Baths"
                  icon={<FaBath className="inline mr-2" />}
                />
                <Amenity
                  amenity={property.square_feet}
                  label="sqft"
                  icon={<FaRulerCombined className="inline mr-2" />}
                />
              </div>
              <p className="text-gray-500 mb-4">{property.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Amenities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
                {property.amenities?.map((amenity, index) => (
                  <li className="flex items-center mt-3" key={index}>
                    <FaCheck className="text-green-600 mr-2" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <div id="map"></div>
            </div>
          </main>
          <PropertySidebar />
        </div>
      </div>
    </section>
  );
};
