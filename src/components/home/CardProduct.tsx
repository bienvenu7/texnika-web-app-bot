import { selectPictures } from "@/redux/selectors/productSelector";
import { IPicture, IProduct } from "@/types/app";
import { getPictures } from "@/utils/apis/picture";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SvgSelector from "../main/SvgSelector";

type Props = {
  myCard: IProduct;
  isLoved: boolean;
};

const CardProduct = ({ myCard, isLoved }: Props) => {
  const router = useRouter();

  const images = useSelector(selectPictures).filter(
    (el) => el.referId === myCard.id
  );

  return (
    <div
      onClick={() =>
        router.push(`/product/${myCard.id}`, undefined, { shallow: true })
      }
      className={isLoved ? "products__card loved" : "products__card"}
    >
      <div className="products__card--top">
        <Image src={images[0]?.url} alt="" fill />
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
            <button key={item}>
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
