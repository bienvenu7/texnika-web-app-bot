import React from "react";
import CardCategory from "./CardCategory";

export interface ICategory {
  url: string;
  name: string;
}
const cardCategory: ICategory = {
  name: "Iron",
  url: "/assets/pictures/iron.jpg",
};

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="categories__container">
      <div className="categories__box">
        <h2>Categories</h2>
        <div className="categories__cards">
          {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
            <div key={number} className="categories__rows">
              <CardCategory category={cardCategory} />
              <CardCategory category={cardCategory} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
