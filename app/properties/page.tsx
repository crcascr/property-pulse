import { PropertyCard } from "@/components/properties/property-card";
import { PropertiesResponse } from "@/interfaces";
import { getProperties } from "@/services/get-properties";

export default async function PropertiesPage() {
  const properties: PropertiesResponse[] = await getProperties();

  properties.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-extrabold ">No properties found</h1>
            <p className="my-4 text-xl">
              Try searching for a different location or type of property.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
