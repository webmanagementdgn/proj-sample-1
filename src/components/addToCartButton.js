import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const AddToCartButton = ({ id, name }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const inside = cartItems.find((item) => item.id === id);
  return (
    <>
      {inside ? (
        <div className="cart-btn cart-btn-incart">
          <Link to="/cart">به سبد اضافه شد</Link>
        </div>
      ) : (
        <div
          onClick={() => {
            dispatch(addItem(id));
          }}
          className="cart-btn"
        >
          {name}
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
