import CardProduct from "@/components/home/CardProduct";
import Products, { IProduct } from "@/components/home/Products";
import ReviewCard from "@/components/main/ReviewCard";
import SvgSelector from "@/components/main/SvgSelector";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const myCard: IProduct = {
  id: 1,
  url: "/assets/pictures/header.png",
  name: "Mark Jacobs Trends",
  price: 990,
};

const Description = (props: Props) => {
  const router = useRouter();

  return (
    <div className="description__container">
      <div className="description__box">
        <div className="description__pictures">
          <div className="description__pic">
            <Image src={myCard.url} alt={myCard.name} fill />
          </div>
        </div>
        <div className="description__content">
          <h2>{myCard.name}</h2>
          <div className="price">
            <span>${myCard.price}</span>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => index + 1).map(
                (item) => (
                  <button key={item}>
                    <SvgSelector id="star" />
                  </button>
                )
              )}
            </div>
          </div>
          <div className="description__details">
            <h3>Description</h3>
            <div className="details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto unde cupiditate accusamus sit iure explicabo? Ducimus
              tempore, repellendus ut suscipit incidunt ipsa molestias unde
              vitae sunt cupiditate! Sint, autem enim. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Architecto unde cupiditate
              accusamus sit iure explicabo? Ducimus tempore, repellendus ut
              suscipit incidunt ipsa molestias unde vitae sunt cupiditate! Sint,
              autem enim. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto unde cupiditate accusamus sit iure explicabo? Ducimus
              tempore, repellendus ut suscipit incidunt ipsa molestias unde
              vitae sunt cupiditate! Sint, autem enim.
            </div>
          </div>
          <div className="description__reviews">
            <div className="top">
              <h3>Reviews</h3>{" "}
              <button onClick={() => router.push("/reviews/1233")}>
                View All
              </button>
            </div>
            <ReviewCard />
          </div>
          <div className="description__similar">
            <div className="top">
              <h3>Similars</h3>{" "}
              <button onClick={() => router.push("/")}>View All</button>
            </div>
            <div className="cards">
              {Array.from({ length: 8 }, (_, index) => index + 1).map(
                (item) => (
                  <CardProduct key={myCard.id} myCard={myCard} isLoved={true} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
