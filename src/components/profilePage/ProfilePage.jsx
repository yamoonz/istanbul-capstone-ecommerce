import React from "react";
import { MOCK_DATABASE } from "../common/MockDatabase";
import ProductCard from "../layout/productCard/ProductCard";
import "./style.scss";
function ProfilePage() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="navbarpp">
        <span className="useOrderList">
        <a  href="#" onClick={handleClick}>
        Favorite
        </a>
        <a href="#" onClick={handleClick}>
        Ordered
        </a>
        </span  
        >
        <div className="userProfileItems">
          {MOCK_DATABASE.slice(0, 2).map((info, index) => (
            <ProductCard info={info} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
