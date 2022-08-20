import React from "react";
import "./Navbar.css";
import image from "./head.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="nav-left">
          <img className="nav-img" src={image} alt="none" />
          Category
          <button style={{ border: "none", background: "none" }}>
            <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
          </button>
        </div>
        <div className="nav-right">
          <text>Home</text>
          <text>Manufacturers</text>
          <text>Customers</text>
          <text>About</text>
          <text>{"Blog & News"}</text>
          <text>FAQ</text>
          <button className="nav-btn">
            <PersonOutlinedIcon />
            Login/Register
          </button>
        </div>
      </div>
      <div className="lang">
        eng <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
      </div>
    </>
  );
};

export default Navbar;
