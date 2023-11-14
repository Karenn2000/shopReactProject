import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { balance } from "../redux/action/reducer/hendleCart.js";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            COLLECTION
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li style={{ listStyle: "none" }}>
                <span
                  className="balance-display"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 20px",
                    //backgroundColor: "#3498db", // Example background color
                    color: "black",//"#fff", // Example text color
                    borderRadius: "5px", // Example border-radius
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Example box shadow
                  }}
                >
                  ${balance.toFixed(2)}
                </span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in"></i> Cart({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
