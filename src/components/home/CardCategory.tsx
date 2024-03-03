import Image from "next/image";
import React from "react";
import { ICategory } from "./Categories";

type Props = {
  category: ICategory;
};

const CardCategory = ({ category }: Props) => {
  return (
    <div className="categories__card">
      <div className="categories__picture">
        <Image src={category.url} fill alt="" />
      </div>
      <span>{category.name}</span>
    </div>
  );
};

export default CardCategory;
