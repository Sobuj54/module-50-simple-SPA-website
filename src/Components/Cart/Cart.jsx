import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, clearCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // one method
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    //    another method
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 3) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>order summary.</h3>
      <p>Selected items : {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping : ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h6>Grand Total : ${grandTotal.toFixed(2)}</h6>

      <button onClick={clearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
