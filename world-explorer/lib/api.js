export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });

  return res.json();
}

export async function getCountry(code) {
  const res = await fetch(
    https://restcountries.com/v3.1/alpha/${code},
    {
      cache: "no-store",
    }
  );

  return res.json();
}