import React from "react";

export default function Link(props) {
  return (
    <a className={props.className} style={props.style}>
      {props.label}
      {props.children}
    </a>
  );
}
