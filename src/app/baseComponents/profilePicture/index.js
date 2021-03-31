import React, { Suspense } from "react";
import Image from "app/baseComponents/image";
import { getInitials } from "app/pages/home/utils";
import "./styles.css";

export default function ProfilePicture(props) {
  if (props.src === null) {
    return (
      <div
        className={props.className}
        style={{
          backgroundColor: `${
            "#" + Math.floor(Math.random() * 16777215).toString(16)
          }`,
        }}
      >
        <h2 className="profile-picture-heading">{getInitials(props.name)}</h2>
      </div>
    );
  } else {
    return <Image src={props.src} className={props.className} />;
  }
}
