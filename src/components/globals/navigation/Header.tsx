import SvgSelector from "@/components/main/SvgSelector";
import { selectCart } from "@/redux/selectors/productSelector";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Header = (props: Props) => {
  const cart = useSelector(selectCart);

  const router = useRouter();
  return (
    <div className="header__container">
      <div className="header__box">
        <button className="header__menu">
          <SvgSelector id="menu" />
        </button>
        <span>EMFCC</span>
        <button onClick={() => router.push("/cart")} className="header__bag">
          <SvgSelector id="bag" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </button>
      </div>
    </div>
  );
};

export default Header;
