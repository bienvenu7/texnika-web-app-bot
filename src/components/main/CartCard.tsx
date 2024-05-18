import { DecrimentCart, IncrimentCart } from "@/redux/reducers/product";
import { selectPictures } from "@/redux/selectors/productSelector";
import { AppDispatch } from "@/redux/store";
import { ICart } from "@/types/app";
import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import SvgSelector from "./SvgSelector";

type Props = {
  cart: ICart;
};

const CartCard = ({ cart }: Props) => {
  const images = useSelector(selectPictures).filter(
    (el) => el.referId === cart.id
  );

  const dispatch: AppDispatch = useDispatch();

  const increase = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(IncrimentCart(cart));
  };

  const decrease = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(DecrimentCart(cart));
  };

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
            <button onClick={decrease}>
              <FiMinus />
            </button>
            <span>{cart.items}</span>
            <button onClick={increase}>
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
