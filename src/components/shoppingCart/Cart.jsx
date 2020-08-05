import React from "react";
import { MOCK_DATABASE } from "../common/MockDatabase";
import { Component } from "react";
import { useState } from 'react';


function Cart({ cart, setCart }) {
    const getTotalSum = () => {
        return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove));
    };
    const [count, setCount] = useState(0);

    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);

        return (
            <>
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <h5>Count is {count}</h5>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>



                <h1>Cart</h1>
                {/* {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )} */}
                <div className="products">
                    {cart.map((product, idx) => (
                        <div className="product" key={idx}>
                            <h3>{product.name}</h3>
                            <h4>${product.cost}</h4>
                            <input
                            />
                            <img src={product.image} alt={product.name} />
                            <button onClick={() => removeFromCart(product)}>Remove</button>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}
export default Cart;
