import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Logo(props) {
  return (
    <div className="logo">
      <Link to="/">{props.logo}</Link>
    </div>
  );
}
