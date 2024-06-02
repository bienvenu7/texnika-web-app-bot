import { selectUserId } from "@/redux/selectors/productSelector";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Cover = (props: Props) => {
  const userId = useSelector(selectUserId);
  return (
    <div className="cover__container">
      <div className="cover__box">
        <h1>50% Off {userId}</h1>
        <p>On minimun 5 quantity bougth today</p>
        <button>Get Now</button>
      </div>
    </div>
  );
};

export default Cover;
