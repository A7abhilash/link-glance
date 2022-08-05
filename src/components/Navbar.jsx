import React from "react";

function Navbar() {
  return (
    <nav className="bg-light shadow py-2 text-center">
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={require("../assets/icon.png")}
          alt="LOGO"
          className="img-fluid"
          style={{ width: 35, marginRight: 10 }}
        />
        <h3 className="">Link Glance</h3>
      </div>
    </nav>
  );
}

export default Navbar;
