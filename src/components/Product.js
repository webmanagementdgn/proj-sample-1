import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./addToCartButton";

const Product = ({ id, title, price, img }) => {
  const Pprice = price
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".0");
  return (
    <>
      <div className="product">
        <Link to={`/details/${id}`}>
          <img src={img} alt="" />
          <span className="product-info">
            <p className="product-title">{title}</p>
            <p className="price" dir="rtl">
              {Pprice} ت
            </p>
          </span>
        </Link>
        <AddToCartButton id={id} name="اضافه به سبد" />
      </div>
    </>
  );
};

export default Product;
