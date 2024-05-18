import CartCard from "../components/main/CartCard";
import { selectCart } from "@/redux/selectors/productSelector";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Cart = (props: Props) => {
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

export default Cart;
