import { ICategory } from "@/types/app";
import React from "react";
import CardCategory from "./CardCategory";

interface Props {
  categories: ICategory[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className="categories__container">
      <div className="categories__box">
        <h2>Categories</h2>
        <div className="categories__cards">
          {categories &&
            categories.map((el, index) => (
              <div key={el.id} className="categories__rows">
                <CardCategory category={el} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
