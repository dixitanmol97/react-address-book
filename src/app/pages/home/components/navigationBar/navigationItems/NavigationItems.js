import React from "react";
import Groups from "./groups";
import Link from "app/baseComponents/link";

function Import(props) {
  return <Link className={props.className} label="Import" />;
}

function Export(props) {
  return <Link className={props.className} label="Export" />;
}

export default function NavigationItems() {
  return (
    <div className="navigation-items">
      <Groups className="navigation-links" />
      <Import className="navigation-links" />
      <Export className="navigation-links" />
    </div>
  );
}
