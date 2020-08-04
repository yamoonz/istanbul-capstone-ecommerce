
import React from "react";
//import { MOCK_DATABASE } from "./shoppingCart/MockDatabase";
import { Component } from "react";
class Counter extends React.Component {
    state = { count: 0 };

    increment = (e) => this.setState({ count: this.state.count + 1 });

    decrement = (e) => this.setState({ count: this.state.count - 1 });
    render = () => (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    );
}

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
import { MOCK_DATABASE } from "./components/shoppingCart/MockDatabase";
import React, { Component } from 'react';
import { useState } from "react";

const Cart = React.createContext;
const BacktoProductsPage = (products) => {
    let productsPage = [...products];
    const Increment = React.createClass({
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
    const removeFromCart = (productToRemove) => {
        MOCK_DATABASE.filter((product) =>
            product.tags.includes(productToRemove)
        );
    };
    const [productToAdd, setproductToAdd] = useState("");
    const product = MOCK_DATABASE.filter((product) =>
        product.tags.includes(productToAdd)
    )

    return (
        <>
            <div>
                <button onClick={() => BacktoProductsPage(products)}>
                    Back To Shopping
            </button>
                <button onClick={this.IncrementItem}>+</button>
                <button onClick={this.DecreaseItem}>-</button>
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''}

                <button onClick={() => removeFromCart(product)}>
                    Remove
            </button>
                <h3>{product.name}</h3>
                <h4>${product.cost}</h4>
                {/* <input
            value={product.quantity}
            onChange={(e) =>
                setQuantity(
                    product,
                    parseInt(e.target.value)
                ) */}

                {/* />  */}
            </div>
        </>
    )
};

export default Cart;

