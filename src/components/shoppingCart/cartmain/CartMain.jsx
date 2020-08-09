import React, {useState} from "react";
import { MOCK_DATABASE } from "../../common/MockDatabase";
import Products from "../../products/Products";
import "./style.scss";
const CartMain = () => {
  function handleClick(e) {
    e.preventDefault();
  }
const [itemsinMockDatabase, setitemsinMockDatabase] = useState("");
 const previewItemsContainer = MOCK_DATABASE.filter((product) =>
 product.tags.includes(itemsinMockDatabase));


 const [count, setCount] = useState(0);
 const handleIncrement = () => {
   setCount(prevCount => prevCount + 1);
 };
 const handleDecrement = () => {
   setCount(prevCount => prevCount - 1);
 };
  return (
    <>
      <div className= "handleClick">
       <button onClick={handleDecrement}>-</button>
       <h5> {count}</h5>
       <button onClick={handleIncrement}>+</button>
       </div>
   <div className="backToProducts">
    <button onClick={Products}>
  Back To Shopping
</button></div>
 <img src={MOCK_DATABASE} />;
      {/* <CartDetails /> */}
    </>
  );
  }
export default CartMain;
