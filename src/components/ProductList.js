import React from "react";
import Product from "./Product";
import cartItems from "../cartItems";
const ProductList = () => {
  return (
    <>
      <span className="home-cart">
        <div className="row">
          {cartItems.map((item) => {
            const { img, title, price, id, incart } = item;
            return (
              <div>
                <Product
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  id={id}
                  incart={incart}
                />
              </div>
            );
          })}
        </div>
      </span>
    </>
  );
};

export default ProductList;
