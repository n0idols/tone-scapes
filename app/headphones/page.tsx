import fetchCategory from "@/components/data/fetchCategory";

const page = async () => {
  const category = await fetchCategory("1");
  return <div>{JSON.stringify(category, null, 2)}</div>;
};
export default page;
