"use client";

import { PropertiesResponse } from "@/interfaces";
import { getProperty } from "@/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  if (loading) return <p>Cargando propiedad...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{property?.name}</h1>
      <p>{property?.description}</p>
      {/* ...otros campos */}
    </div>
  );
}
