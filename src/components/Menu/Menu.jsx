import React from "react";
import { Link } from "react-router";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/updates">Updates</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Menu;
