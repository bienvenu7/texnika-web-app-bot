import ReviewCard from "@/components/main/ReviewCard";
import Stars from "@/components/main/Stars";
import SvgSelector from "@/components/main/SvgSelector";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  const router = useRouter();
  return (
    <div className="reviews__container">
      <div className="reviews__box">
        <div className="reviews__top">
          <button onClick={() => router.back()}>
            <SvgSelector id="arrow-left" />
          </button>
          <div className="reviews__top--right">
            <h1>245 Reviews</h1>
            <div className="infos">
              <span>4.8</span>
              <Stars />
            </div>
          </div>
        </div>
        <hr />
        <div className="reviews__content">
          {Array.from({ length: 8 }, (_, index) => index + 1).map(
            (_, index) => (
              <ReviewCard key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
