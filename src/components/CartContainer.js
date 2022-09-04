import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>سبد شما</h2>
          <h4 className="empty-cart">در حال حاظر خالی است</h4>
        </header>
      </section>
    );
  }
  const price = total
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".0");
  return (
    <section className="cart">
      <header>
        <h2>سبد شما</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            جمع <span dir="rtl">{price} تومان</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          حذف سبد
        </button>
        <button className="btn buy-btn">خرید</button>
      </footer>
    </section>
  );
};

export default CartContainer;
