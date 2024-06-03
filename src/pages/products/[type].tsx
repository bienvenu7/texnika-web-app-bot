import CardProduct from "@/components/home/CardProduct";
import SvgSelector from "@/components/main/SvgSelector";
import telegram from "@/hooks/telegram";
import { SetPictures } from "@/redux/reducers/categoryReducers";
import { AppDispatch } from "@/redux/store";
import { ICategory, IPicture, IProduct } from "@/types/app";
import { getCategories } from "@/utils/apis/categories";
import { getPicturesAll } from "@/utils/apis/picture";
import { getProducts } from "@/utils/apis/product";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

type Props = {
  products: IProduct[];
  images: IPicture[];
  categories: ICategory[];
};

const ProductPage = ({ products, images, categories }: Props) => {
  const router = useRouter();
  const type = router.query.type as string;

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(SetPictures(images));
  }, []);

  return (
    <div className="productsPage__container">
      <div className="productsPage__filtre">
        <button className="productsPage__menu">
          <SvgSelector id="menu" />
        </button>
        <div className="search">
          <SvgSelector id="search" />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="productsPage__bag">
          <SvgSelector id="bag" />
          <span>0</span>
        </button>
      </div>
      <div className="productsPage__box">
        <div className="productsPage__top">
          <h1>
            {type !== `all`
              ? categories.filter((el) => (el.id as string) === type)[0]?.name
              : `All products `}
          </h1>
          <span>
            {type !== "all"
              ? `${
                  products.filter((el) => el.categoryId === type).length
                } items`
              : `${products.length} items`}
          </span>
        </div>
        <div className="productsPage__products">
          {products
            ?.filter((el) =>
              type !== "all" ? el.categoryId === type : el.categoryId !== type
            )
            .map((item) => (
              <CardProduct key={item.id} myCard={item} isLoved={false} />
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();
  const images = await getPicturesAll();
  const categories = await getCategories();

  return {
    props: {
      products,
      images,
      categories,
    },
  };
};

export default ProductPage;
