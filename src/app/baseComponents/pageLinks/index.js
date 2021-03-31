import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function PageLinks(props) {
  return (
    <div className={props.className}>
      <Link to="/address-book">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
