import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [login, SetLogin] = useState(false);
  const cartItems = useSelector((store) => store.cart.cart);
  console.log(cartItems);
  return (
    <nav className="fixed top-0 left-0 h-24 nav__bar  shadow-lg shadow-white w-full">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
      />
      <ul className="list">
        <Link to="/">
          <li className="list__item">Home</li>
        </Link>

        <Link to="/about">
          <li className="list__item">About</li>
        </Link>

        <Link to="contact">
          <li className="list__item">Contact</li>
        </Link>

        <Link to="/service">
          <li className="list__item">Service</li>
        </Link>

        <Link to="/about/profile">
          <li className="list__item">Profile</li>
        </Link>

        <Link to="/instamart">
          <li className="list__item">Instamart</li>{" "}
        </Link>

        <Link to="/cart">
          <li className="list__item">Cart {cartItems.length}</li>
        </Link>

        <button
          onClick={() => SetLogin((prevVal) => !prevVal)}
          className="btn log"
        >
          {login ? "LogOut" : "LogIn"}
        </button>
      </ul>
    </nav>
  );
};

export default Header;
