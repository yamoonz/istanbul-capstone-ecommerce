// import React, { Component, useState } from "react";
// import { MOCK_DATABASE } from "../../common/MockDatabase";

// function CartDetails({ cart, setCart }) {
//   const getTotalSum = () => {
//     return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
//   };
//   const [itemsinMockDatabase, setSearchQueryContainer] = useState("");
//   const previewItemsContainer = MOCK_DATABASE.filter((product) =>
//     product.tags.includes(itemsinMockDatabase)
//   )

//   const [state, dispatch] = useReducer(CartReducer, initialState)

//   const increase = payload => {
//       dispatch({type: 'INCREASE', payload})
//   }

//   const decrease = payload => {
//       dispatch({type: 'DECREASE', payload})
//   }
//   const [count, setCount] = useState(0);
//   const contextValues = {
//     increase,
//     decrease,
//     ...state
// }

//     return (
//       <>
//         <div>
//           <div>
//             <button onClick={handleDecrement}>-</button>
//             <h5>Count is {count}</h5>
//             <button onClick={handleIncrement}>+</button>
//           </div>
//           <button onClick={() => setCount(0)}>Reset</button>
//         </div>

//         <h1>Cart</h1>
//         {/* {cart.length > 0 && (
//         <button onClick={clearCart}>Clear Cart</button>
//       )} */}
//         <div className="products">
//           {cart.map((product, idx) => (
//             <div className="product" key={idx}>
//               <h3>{product.name}</h3>
//               <h4>${product.cost}</h4>
//               <input />
//               <img src={product.image} alt={product.name} />
//               <button onClick={() => removeFromCart(product)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };

// export default CartDetails;
