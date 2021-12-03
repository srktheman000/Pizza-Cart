import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartSyle = {
    background: "orange",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  return (
    <>
      <nav className="container mx-auto flex item-centre justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="logo" />
        </Link>
        <ul className="flex item-centre ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="ml-6" to="/products">
              Products
            </Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartSyle}>
                <span>10</span>
                <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
