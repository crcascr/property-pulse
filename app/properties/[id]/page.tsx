"use client";

import { PropertyHeader, PropertyInformation } from "@/components/property";
import { PropertiesResponse } from "@/interfaces";
import { getProperty } from "@/services";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function PropertyPage() {
  const id = useParams().id;

  const [property, setProperty] = useState<PropertiesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await getProperty({ id });
        setProperty(response);
      } catch (err) {
        setError("Error al cargar la propiedad.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (!property) {
      fetchProperty();
    }
  }, [id, property]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property not found
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeader image={property.images?.[0]} />
          <section>
            <div className="container m-auto p-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="inline mr-2" />
                Back to Properties
              </Link>
            </div>
          </section>
          <PropertyInformation property={property} />
        </>
      )}
    </>
  );
}
