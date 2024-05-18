import { selectCart } from "@/redux/selectors/productSelector";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Success = (props: Props) => {
  const cart = useSelector(selectCart);
  console.log(cart);
  return <div>success</div>;
};

export default Success;
