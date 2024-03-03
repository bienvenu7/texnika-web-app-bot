import Categories from "@/components/home/Categories";
import Cover from "@/components/home/Cover";
import Products from "@/components/home/Products";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Cover />
      <Categories />
      <Products title="New Arrivals" btnTitle="View All" isLoved={false} />
      <Products title="Liked By you" btnTitle="View More" isLoved={true} />
      <Products title="Sales" btnTitle="View All" isLoved={false} />
    </main>
  );
}
