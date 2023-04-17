import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
             <h3>order summary.</h3>
                 <p>elements in cart : {cart.length}</p>
        </div>
    );
};

export default Cart;