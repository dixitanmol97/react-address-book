import React from "react";
import "./styles.css";

export default function index(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.handleChange}
      value={props.value}
      style={props.style}
    ></input>
  );
}
