import { SetOpenModal } from "@/redux/reducers/categoryReducers";
import {
  selectCart,
  selectOpenModal,
  selectUserId,
} from "@/redux/selectors/productSelector";
import { AppDispatch } from "@/redux/store";
import { checkout } from "@/utils/apis/checkout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

Modal.setAppElement("#__next");

type Props = {};

const Popup = (props: Props) => {
  const cart = useSelector(selectCart);
  const openModal = useSelector(selectOpenModal);
  const userId = useSelector(selectUserId);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [address, setAddress] = useState<string>("");
  const [method, setMethod] = useState<string>("");

  const goBuy = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const res = await checkout({
      address,
      payementMethod: method,
      cart,
      userId,
    });
    console.log(res);
    dispatch(SetOpenModal(false));
    router.push(res.url);
  };
  return (
    <Modal
      isOpen={openModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "100%",
        },
        overlay: {
          backgroundColor: "rgba(21, 24, 33, .8)",
        },
      }}
    >
      <div className="popup__container">
        <div className="popup__box">
          <div className="popup__info">
            <div className="popup__input">
              <label htmlFor="address">{"Deliver's Address*"}</label>
              <input
                type={"text"}
                required
                placeholder="Your Deliver's Address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="popup__input">
              <label htmlFor="method">Payement Method*</label>
              <select
                onChange={(e) => setMethod(e.target.value)}
                name="methos"
                id="method"
              >
                <option value="card">Pay by card</option>
                <option value="cash to delivery">
                  Pay in cash to delivery
                </option>
              </select>
            </div>
          </div>
          <div className="popup__btns">
            <button onClick={goBuy}>Comfirm</button>
            <button onClick={() => dispatch(SetOpenModal(false))}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
