import React from "react";
import "./style.scss";
function ProfilePage() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="navbarpp">
      <a href="#" onClick={handleClick}>
        Ordered
      </a>
      <a href="#" onClick={handleClick}>
        Favorite
      </a>
      <a href="#" onClick={handleClick}>
        Lists
      </a>
    </div>
  );
}

export default ProfilePage;
