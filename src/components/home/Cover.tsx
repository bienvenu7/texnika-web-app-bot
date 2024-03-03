import React from "react";

type Props = {};

const Cover = (props: Props) => {
  return (
    <div className="cover__container">
      <div className="cover__box">
        <h1>50% Off</h1>
        <p>On minimun 5 quantity bougth today</p>
        <button>Get Now</button>
      </div>
    </div>
  );
};

export default Cover;
