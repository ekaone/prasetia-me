"use client";

import { useEffect, useState } from "react";

interface LocationData {
  Continent: string | null;
  Country: string | null;
  Region: string | null;
  City: string | null;
  PostalCode: string | null;
  Timezone: string | null;
}

export default function Header() {
  const [data, setData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("/api/header");
        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Location Information:</h1>
      <div className="grid gap-2">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <span className="font-semibold">{key}:</span>
              <span>{value || "Not available"}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
