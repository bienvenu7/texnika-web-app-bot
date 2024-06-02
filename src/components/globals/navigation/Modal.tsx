import {
  AddToCart,
  DecrimentCart,
  IncrimentCart,
} from "@/redux/reducers/product";
import {
  selectAllProducts,
  selectCart,
} from "@/redux/selectors/productSelector";
import { AppDispatch } from "@/redux/store";
import { ICart, IProduct } from "@/types/app";
import React, { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus } from "react-icons/fi";
import { checkout } from "@/utils/apis/checkout";
import { useRouter } from "next/router";
import { SetOpenModal } from "@/redux/reducers/categoryReducers";
import Popup from "../Popup";

type Props = {
  type: string;
  query: string;
};

const Modal = ({ type, query }: Props) => {
  const products = useSelector(selectAllProducts);
  const cart = useSelector(selectCart);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const addToCart = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const prod = products.find((el) => el.id === query) as IProduct;
    let cartProduct: ICart = {
      categoryId: prod?.categoryId,
      id: prod?.id,
      items: 1,
      name: prod?.name,
      price: prod?.price,
    };
    dispatch(AddToCart(cartProduct));
  };

  const increase = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const item = cart.filter((el) => el.id === query);
    dispatch(IncrimentCart(item[0]));
  };

  const decrease = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const item = cart.filter((el) => el.id === query);
    dispatch(DecrimentCart(item[0]));
  };

  const GetType = (): ReactNode => {
    switch (type) {
      case "reviews":
        return <button>Add Review</button>;
        break;
      case "product":
        const index = cart.findIndex((el) => el.id === query);
        if (index > -1) {
          return (
            <div className="btns">
              <button onClick={decrease}>
                <FiMinus />
              </button>
              <span>{cart[index].items}</span>
              <button onClick={increase}>
                <FiPlus />
              </button>
            </div>
          );
        } else {
          return <button onClick={addToCart}>Add to Card</button>;
        }
        break;
      case "cart":
        return (
          <button onClick={() => dispatch(SetOpenModal(true))}>
            Go Billing
            <Popup />
          </button>
        );
        break;
      default:
        return <></>;
        break;
    }
  };

  return (
    <div className="modal__container">
      <div className="modal__box">{GetType()}</div>
    </div>
  );
};

export default Modal;
