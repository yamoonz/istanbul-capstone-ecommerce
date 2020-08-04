import React from "react";
import { MOCK_DATABASE } from "../../../common/MockDatabase";
import { Component } from "react";

var Increment = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return <div>
            <div id='counter'>{this.state.counter}</div>
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> -  </button>
        </div>
    }
});

React.render(<Increment />, document.getElementById('mount'))

export default function Cart({ cart, setCart }) {
    const getTotalSum = () => {
        return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find((item) => item.name === product.name).quantity = amount;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove));
    };

    return (
        <>
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
                            value={product.quantity}
                            onChange={(e) => setQuantity(product, parseInt(e.target.value))}
                        />
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => removeFromCart(product)}>Remove</button>
                    </div>
                ))}
            </div>

            <div>Total Cost: ${getTotalSum()}</div>
        </>
    );
}
//export default Cart;
//
