import React from 'react';
import './styles.css';

export default function Link(props) {
  return (
    <a className={props.className} style={props.style}>
      {props.label}
      {props.children}
    </a>
  );
}
