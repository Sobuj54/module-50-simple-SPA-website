import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const products = useLoaderData();
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>orders : {products.length}</h3>
      </div>
      <div className="cart-container">
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Order;
