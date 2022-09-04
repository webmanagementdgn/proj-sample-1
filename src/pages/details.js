import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/addToCartButton";

const Details = () => {
  const data = useSelector((state) => state.cart.data);
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  const { img, title, info, price } = product;
  const Pprice = price
    .toFixed(1)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".0");
  return (
    <div className="container detail" dir="rtl">
      <h1 className="detail-title">{title}</h1>
      <img className="detail-img" src={img} alt="" />
      <h3>اطلاعت گوشی</h3>
      <p className="detail-info">{info}</p>
      <h4 className="price detail-price">{Pprice} تومان</h4>

      <div className="detail-cart-btn">
        <Link to="/cart">
          <AddToCartButton id={id} name="buy" />
        </Link>
      </div>
    </div>
  );
};

export default Details;
