import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";

import React from "react";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">
          <h3>صفحه ی اصلی</h3>
        </Link>
        <Link to="cart">
          <div className="nav-container">
            <AiTwotoneShopping style={{ fontSize: "40px" }} />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
