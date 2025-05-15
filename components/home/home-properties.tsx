import { PropertyCard } from "@/components/properties/property-card";
import Link from "next/link";
import { PropertiesResponse } from "@/interfaces";
import { getProperties } from "@/services/get-properties";

export const HomeProperties = async () => {
  const properties: PropertiesResponse[] = await getProperties();

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          href="/properties"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
