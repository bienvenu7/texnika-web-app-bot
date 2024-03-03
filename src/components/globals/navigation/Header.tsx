import SvgSelector from "@/components/main/SvgSelector";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header__container">
      <div className="header__box">
        <button className="header__menu">
          <SvgSelector id="menu" />
        </button>
        <span>EMFCC</span>
        <button className="header__bag">
          <SvgSelector id="bag" />
          <span>0</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
