import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>MOVIES</h1>
        <h3>DATABASE</h3>
      </div>
      <div className="header-input">
        <input type="text" placeholder="Search Database" />
      </div>
    </header>
  );
}

export default Header;
