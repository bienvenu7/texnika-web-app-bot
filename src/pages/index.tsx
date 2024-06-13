import Categories from "@/components/home/Categories";
import Cover from "@/components/home/Cover";
import Products from "@/components/home/Products";
import { SetPictures } from "@/redux/reducers/categoryReducers";
import { SetAllProducts, SetLike } from "@/redux/reducers/product";
import { AppDispatch } from "@/redux/store";
import { ICategory, ILike, IPicture, IProduct } from "@/types/app";
import { getCategories } from "@/utils/apis/categories";
import { getPicturesAll } from "@/utils/apis/picture";
import { getLikes, getProducts } from "@/utils/apis/product";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  categories: ICategory[];
  products: IProduct[];
  images: IPicture[];
  likes: ILike[];
}

export default function Home({ categories, products, images, likes }: Props) {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(SetAllProducts(products));
    dispatch(SetPictures(images));
    dispatch(SetLike(likes));
  }, []);

  return (
    <main>
      <Cover />
      <Categories categories={categories} />
      {/* <Products
        title="New Arrivals"
        btnTitle="View All"
        isLoved={false}
        products={[]}
      />
      <Products
        title="Liked By you"
        btnTitle="View More"
        isLoved={true}
        products={[]}
      /> */}
      <Products
        title="Sales"
        btnTitle="View All"
        isLoved={false}
        products={products}
      />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await getCategories();
  const products = await getProducts();
  const images = await getPicturesAll();
  const likes = await getLikes();

  return {
    props: {
      categories,
      products,
      images,
      likes,
    },
  };
};
