import React from "react";
import { removeItem, addAmount } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  const Pprice = price
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".0");
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{Pprice} تومان</h4>
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
          className="remove-btn"
        >
          حذف
        </button>
      </div>
      <div className="amount">
        <button
          onClick={() => {
            dispatch(addAmount({ id, amount: -1 }));
          }}
          className="amount-btn"
        >
          <AiOutlineCaretLeft />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            dispatch(addAmount({ id, amount: 1 }));
          }}
          className="amount-btn"
        >
          <AiOutlineCaretRight />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
