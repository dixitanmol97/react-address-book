import React from "react";

export default function Image(props) {
  const photo = `${process.env.PUBLIC_URL}/profile-image/${props.src}`;
  return (
    <img
      src={photo}
      style={props.style}
      alt=""
      className={props.className}
    ></img>
  );
}
