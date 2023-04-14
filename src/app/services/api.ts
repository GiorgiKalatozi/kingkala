export async function getQuotes() {
  const res = await fetch("https://api.quotable.io/random?maxLength=46", {
    next: { revalidate: 1 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
