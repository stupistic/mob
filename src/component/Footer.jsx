import React from "react";
import "./Footer.css";
import img from "./footer.svg";

const Footer = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <img className="image" src={img} alt="none" />

        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          adipisci reprehenderit distinctio! Tempora natus perferendis vitae,
          delectus atque nesciunt ut distinctio doloribus. Porro illum
          asperiores odit ut beatae sapiente qui.
        </p>
      </div>
      <div className="center">
        <h3 style={{ textAlign: "center" }}>Company</h3>
        <ul className="list">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>

          <li>Manufacturers</li>
          <li>Customers</li>
          <li>{`Blog & News`}</li>
        </ul>
      </div>
      <div className="right">
        <h3>Stay in Touch</h3>
        <div>+91 9833064499</div>
      </div>
    </div>
  );
};

export default Footer;
