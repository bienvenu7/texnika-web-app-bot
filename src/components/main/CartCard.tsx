import { selectPictures } from "@/redux/selectors/productSelector";
import { ICart } from "@/types/app";
import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import SvgSelector from "./SvgSelector";

type Props = {
  cart: ICart;
};

const CartCard = ({ cart }: Props) => {
  const images = useSelector(selectPictures).filter(
    (el) => el.referId === cart.id
  );

  console.log(images);
  return (
    <div key={cart.id} className="cart__card">
      <div className="cart__card--left">
        <Image src={images[0].url} alt={cart.name} fill />
      </div>
      <div className="cart__card--right">
        <p>{cart.name}</p>
        <span>{cart.price * cart.items} USD</span>
        <div className="cart__card--right__options">
          <div className="left">
            <button>
              <FiTrash2 />
            </button>
            <button className="heart">
              <SvgSelector id="heart" />
            </button>
          </div>
          <div className="right">
            <button
            // onClick={decrease}
            >
              <FiMinus />
            </button>
            <span>{cart.items}</span>
            <button
            // onClick={increase}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
