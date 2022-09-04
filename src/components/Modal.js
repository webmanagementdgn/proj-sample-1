import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>حذف همه ی محصولات در سبد شما</h4>
        <div className="btn-container" dir="rtl">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type="button"
            className="btn confirm-btn"
          >
            بله
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="button"
            className="btn clear-btn"
          >
            خیر
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
