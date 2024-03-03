import React from "react";
import SvgSelector from "./SvgSelector";

type Props = {};

const Stars = (props: Props) => {
  return (
    <div className="stars__container">
      {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
        <button key={item}>
          <SvgSelector id="star" />
        </button>
      ))}
      <div className="stars">
        {Array.from({ length: 4 }, (_, index) => index + 1).map((item) => (
          <button key={item}>
            <SvgSelector id="star" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stars;
