import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SvgSelector from "../main/SvgSelector";
import CardProduct from "./CardProduct";

type Props = {
  title: string;
  btnTitle: string;
  isLoved: boolean;
};

export interface IProduct {
  id: number;
  url: string;
  name: string;
  price: number;
}

const myCard: IProduct = {
  id: 1,
  url: "/assets/pictures/header.png",
  name: "Mark Jacobs Trends",
  price: 990,
};

const Products = ({ btnTitle, title, isLoved }: Props) => {
  const router = useRouter();

  return (
    <div className="products__container">
      <div className="products__box">
        <div className="products__header">
          <h2>{title}</h2>
          <button onClick={() => router.push("/products/marteau")}>
            {btnTitle}
          </button>
        </div>
        <div className={isLoved ? "products__cards loved" : "products__cards"}>
          {Array.from({ length: 8 }, (_, index) => index + 1).map((item) => (
            <CardProduct key={myCard.id} myCard={myCard} isLoved={isLoved} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
