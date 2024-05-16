import React from 'react';

const Cart = ({ cartItems, total }) => {
  return (
    <div className="cart">
      <h2>MY CART</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.coin} x {item.qty} = {item.price * item.qty}
          </li>
        ))}
      </ul>
      <p>TOTAL: {total}</p>
    </div>
  );
};

export default Cart;
