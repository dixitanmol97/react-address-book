import React from "react";
import "./styles.css";

export default function Text(props) {
  return (
    <p style={props.style} className={props.className}>
      {props.text}
    </p>
  );
}
