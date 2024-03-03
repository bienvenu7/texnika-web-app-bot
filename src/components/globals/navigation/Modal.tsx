import React, { ReactNode } from "react";

type Props = {
  type: string;
};

const Modal = ({ type }: Props) => {
  const GetType = (): ReactNode => {
    switch (type) {
      case "reviews":
        return <button>Add Review</button>;
        break;
      case "product":
        return <button>Add to Card</button>;
        break;
      case "cart":
        return <button>Go Billing</button>;
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
