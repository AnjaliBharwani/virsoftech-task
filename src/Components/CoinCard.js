import React, { useState } from 'react';
import '../coinCard.css';

const CoinCard = ({ coin, qty, price, onAddToCart }) => {
  const [currentQty, setCurrentQty] = useState(qty);

  const handleQtyChange = (e) => {
    setCurrentQty(e.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(coin, parseFloat(currentQty), price);
  };

  return (
    <div className="coin-card">
      <h2>{coin}</h2>
      <input
        type="number"
        value={currentQty}
        onChange={handleQtyChange}
        min="0"
        step="0.01"
      />
      <p>Price: {price}</p>
      <button onClick={handleAddToCart}>ADD</button>
    </div>
  );
};

export default CoinCard;