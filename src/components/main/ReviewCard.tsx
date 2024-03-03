import Image from "next/image";
import React from "react";
import Stars from "./Stars";
import SvgSelector from "./SvgSelector";

type Props = {};

const ReviewCard = (props: Props) => {
  return (
    <div className="review__container">
      <div className="review__infos">
        <div className="review__left">
          <div className="avatar">
            <Image src="/assets/pictures/face.png" fill alt="" />
          </div>
          <div className="name">
            <span>Username</span>
            <div className="date">
              <SvgSelector id="clock" />
              <p>13 Sep, 2020</p>
            </div>
          </div>
        </div>
        <div className="review__raiting">
          <span>
            <strong>4.8</strong> rating
          </span>
          <Stars />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        malesuada eget vitae amet... <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        malesuada eget vitae amet...
      </p>
    </div>
  );
};

export default ReviewCard;
