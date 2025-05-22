export function GET(request: Request) {
  const continent = request.headers.get("x-vercel-ip-continent");
  const ip_country = request.headers.get("x-vercel-ip-country");
  const region = request.headers.get("x-vercel-ip-country-region");
  const city = request.headers.get("x-vercel-ip-city");
  const postalCode = request.headers.get("x-vercel-ip-postal-code");
  const timezone = request.headers.get("x-vercel-ip-timezone");

  return new Response(
    JSON.stringify({
      Continent: continent,
      Country: ip_country,
      Region: region,
      City: city,
      PostalCode: postalCode,
      Timezone: timezone,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
