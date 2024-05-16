import React, { useState } from 'react';
import CoinCard from './Components/CoinCard';
import Cart from './Components/Cart';

import './App.css';
import './index.css'


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (coin, qty, price) => {
    const newCartItem = { coin, qty, price };
    setCartItems([...cartItems, newCartItem]);
    setTotal(total + price * qty);
  };

  return (
    <div>
      <h1>COIN SHOP</h1>
      <div className='coin-cards'>
        <CoinCard coin="BTC" qty={0.01} price={25000} onAddToCart={handleAddToCart} />
        <CoinCard coin="DOGE" qty={100.00} price={0.75} onAddToCart={handleAddToCart} />
        <CoinCard coin="RIPPLE" qty={1.5} price={250} onAddToCart={handleAddToCart} />
      </div>
      <Cart cartItems={cartItems} total={total} />
    </div>
  );
};

export default App;