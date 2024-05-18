import CardProduct from "@/components/home/CardProduct";
import Products from "@/components/home/Products";
import ReviewCard from "@/components/main/ReviewCard";
import SvgSelector from "@/components/main/SvgSelector";
import { SetAllProducts } from "@/redux/reducers/product";
import { selectAllProducts } from "@/redux/selectors/productSelector";
import { IPicture, IProduct, IRaiting } from "@/types/app";
import { getPictures } from "@/utils/apis/picture";
import { getProducts, getProductsById, getRating } from "@/utils/apis/product";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  product: IProduct[];
  images: IPicture[];
  reviews: IRaiting[];
};

const Description = ({ product, images, reviews }: Props) => {
  const router = useRouter();
  const products = useSelector(selectAllProducts);
  const allReview = reviews.filter(
    (el) => el.productId === (router.query.id as string)
  );

  return (
    <div className="description__container">
      <div className="description__box">
        <div className="description__pictures">
          <div className="description__pic">
            <Image src={images[0]?.url} alt={product[0]?.name} fill />
          </div>
        </div>
        <div className="description__content">
          <h2>{product[0]?.name}</h2>
          <div className="price">
            <span>${product[0]?.price}</span>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => index + 1).map(
                (item) => (
                  <button key={item}>
                    <SvgSelector id="star" />
                  </button>
                )
              )}
            </div>
          </div>
          <div className="description__details">
            <h3>Description</h3>
            <div className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto unde cupiditate accusamus sit iure explicabo? Ducimus
              tempore, repellendus ut suscipit incidunt ipsa molestias unde
              vitae sunt cupiditate! Sint, autem enim. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Architecto unde cupiditate
              accusamus sit iure explicabo? Ducimus tempore, repellendus ut
              suscipit incidunt ipsa molestias unde vitae sunt cupiditate! Sint,
              autem enim. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto unde cupiditate accusamus sit iure explicabo? Ducimus
              tempore, repellendus ut suscipit incidunt ipsa molestias unde
              vitae sunt cupiditate! Sint, autem enim.
            </div>
          </div>
          {allReview.length > 0 && (
            <div className="description__reviews">
              <div className="top">
                <h3>Reviews</h3>{" "}
                <button onClick={() => router.push("/reviews/1233")}>
                  View All
                </button>
              </div>
              <ReviewCard />
            </div>
          )}
          <div className="description__similar">
            <div className="top">
              <h3>Similars</h3>{" "}
              <button onClick={() => router.push("/")}>View All</button>
            </div>
            <div className="cards">
              {products
                .filter((el) => el.categoryId === product[0]?.categoryId)
                .map((item) => (
                  <CardProduct key={item.id} myCard={item} isLoved={true} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id as string;
  const resProduct: IProduct[] = await getProducts();
  const product = resProduct.filter((el) => el.id === id);
  const images = await getPictures(id);
  const reviews = await getRating();

  return {
    props: {
      product,
      images,
      reviews,
    },
  };
};

export default Description;
