import React from "react";
import { MOCK_DATABASE } from "../common/MockDatabase";
import ProductCard from "../layout/productCard/ProductCard";
import "./UserFavoriteList.scss";

const UserFavoriteList = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="downSection">
        <div className="useOrderList">
          <div onClick={handleClick} className="anchorFavorite">
            Favorite
          </div>
        </div>
        <div className="userProfileItems">
          {MOCK_DATABASE.slice(0, 2).map((info, index) => (
            <ProductCard info={info} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserFavoriteList;
