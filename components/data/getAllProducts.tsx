export default async function getAllProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
