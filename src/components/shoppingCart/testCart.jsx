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
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };



  return (
    <>
      <h1>Cart</h1>
      {Cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        if (this.props.Cart) {
          Cart = this.Cart.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>${product.cost}</h4>
              <input
                value={product.quantity}
                onChange={(e) =>
                  setQuantity(
                    product,
                    parseInt(e.target.value)
                  )
                }
              />

            </div>
          )

          )

        })
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
//export default Cart;
