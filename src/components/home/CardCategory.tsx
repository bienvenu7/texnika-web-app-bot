import { selectPictures } from "@/redux/selectors/productSelector";
import { ICategory, IPicture } from "@/types/app";
import { getPictures, getPicturesAll } from "@/utils/apis/picture";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
  category: ICategory;
};

const CardCategory = ({ category }: Props) => {
  const pictures = useSelector(selectPictures).filter(
    (el) => el.referId === category.id
  );

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${category.id}`)}
      className="categories__card"
    >
      <div className="categories__picture">
        <Image src={pictures[0]?.url} fill alt="" />
      </div>
      <span>{category.name}</span>
    </div>
  );
};

export default CardCategory;
