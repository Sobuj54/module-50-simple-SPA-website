import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>
          Price : <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button>D</button>
    </div>
  );
};

export default ReviewItem;
