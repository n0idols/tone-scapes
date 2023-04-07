export default async function getAllProducts() {
  const res = await fetch(`https://tone-scapes.vercel.app/api/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
