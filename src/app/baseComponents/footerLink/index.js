import React from "react";

export default function FooterLink(props) {
  return (
    <a className={props.className} href={props.target}>
      {props.children}
    </a>
  );
}
