import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import SvgSelector from "../main/SvgSelector";
import { IProduct } from "./Products";

type Props = {
  myCard: IProduct;
  isLoved: boolean;
};

const CardProduct = ({ myCard, isLoved }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/1`, undefined, { shallow: true })}
      className={isLoved ? "products__card loved" : "products__card"}
    >
      <div className="products__card--top">
        <Image src={myCard.url} alt="" fill />
        <button>
          <SvgSelector id="heart" />
        </button>
        <button>
          <SvgSelector id="heart" />
        </button>
      </div>
      <div className="products__card--content">
        <h3>{myCard.name}</h3>
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <button>
              <SvgSelector id="star" />
            </button>
          ))}
        </div>
        <div className="price">RUB {myCard.price}</div>
      </div>
    </div>
  );
};

export default CardProduct;
