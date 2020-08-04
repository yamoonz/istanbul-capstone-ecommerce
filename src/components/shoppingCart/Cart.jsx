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