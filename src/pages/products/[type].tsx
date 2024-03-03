import CardProduct from "@/components/home/CardProduct";
import { IProduct } from "@/components/home/Products";
import SvgSelector from "@/components/main/SvgSelector";
import React from "react";

type Props = {};

const myCard: IProduct = {
  id: 1,
  url: "/assets/pictures/header.png",
  name: "Mark Jacobs Trends",
  price: 990,
};

const ProductPage = (props: Props) => {
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
        <div className="productsPage__products">
          {Array.from({ length: 8 }, (_, index) => index + 1).map((item) => (
            <CardProduct key={myCard.id} myCard={myCard} isLoved={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
