import React from "react";
//import { MOCK_DATABASE } from "./shoppingCart/MockDatabase";
import { Component } from "react";
import { useState } from "react";

function MyComponent(props) {
  const [count, setCount] = useState(props.count || 0);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={onClickHandler}>Increase count</button>
    </div>
  );
}
increment = (e) => this.setState({ count: this.state.count + 1 });

decrement = (e) => this.setState({ count: this.state.count - 1 });

<div>
  <h1>{this.state.count}</h1>
  <button onClick={this.increment}>+</button>
  <button onClick={this.decrement}>-</button>
</div>;

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
    </>
  );
}

//export default Cart;

import React from "react";

// class Counter extends React.Component {
//   state = { count: 0 };

//   increment = (e) => this.setState({ count: this.state.count + 1 });

//   decrement = (e) => this.setState({ count: this.state.count - 1 });
//   render = () => (
//     <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.increment}>+</button>
//       <button onClick={this.decrement}>-</button>
//     </div>
//   );
// }
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

  return (
    <>
      <h1>Cart</h1>
      {Cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        if (this.props.Cart){" "}
        {
          (Cart = this.Cart.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>${product.cost}</h4>
              <input
                value={product.quantity}
                onChange={(e) => setQuantity(product, parseInt(e.target.value))}
              />
            </div>
          )))
        }
        )
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
//export default Cart;
