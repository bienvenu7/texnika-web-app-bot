import { IProduct } from "@/types/app";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SvgSelector from "../main/SvgSelector";
import CardProduct from "./CardProduct";

type Props = {
  title: string;
  btnTitle: string;
  isLoved: boolean;
  products: IProduct[];
};

// export interface IProduct {
//   id: number;
//   url: string;
//   name: string;
//   price: number;
// }

// const myCard: IProduct = {
//   id: 1,
//   url: "/assets/pictures/header.png",
//   name: "Mark Jacobs Trends",
//   price: 990,
// };

const Products = ({ btnTitle, title, isLoved, products }: Props) => {
  const router = useRouter();

  return (
    <div className="products__container">
      <div className="products__box">
        <div className="products__header">
          <h2>{title}</h2>
          <button
            onClick={() =>
              router.push("/products/all", undefined, { shallow: true })
            }
          >
            {btnTitle}
          </button>
        </div>
        <div className={isLoved ? "products__cards loved" : "products__cards"}>
          {products.map((item) => (
            <CardProduct key={item.id} myCard={item} isLoved={isLoved} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
