export default async function getSingleProduct(id: string) {
  const res = await fetch(`https://tone-scapes.vercel.app/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
