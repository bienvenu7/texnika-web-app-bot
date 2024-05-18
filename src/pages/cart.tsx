import CartCard from "@/components/main/cartCard";
import SvgSelector from "@/components/main/SvgSelector";
import { selectCart } from "@/redux/selectors/productSelector";
import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";

type Props = {};

const cart = (props: Props) => {
  const cart = useSelector(selectCart);

  return (
    <div className="cart__container">
      <div className="cart__box">
        {cart.map((el) => (
          <>
            <CartCard cart={el} key={el.id} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default cart;
