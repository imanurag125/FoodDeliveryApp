import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "../component/FoodItem";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.cart);
  // console.log(cart[0]);
  return (
    <>
      <h1>Cart Items {cartItem.length} </h1>
      <h2>Hii</h2>
      <div className="flex space-x-6">
        {cartItem.map((ele) => (
          <FoodItem key={ele.id} {...ele} />
        ))}
      </div>
    </>
  );
};

export default Cart;
