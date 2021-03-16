import React from "react";
import FooterLeft from "./footerLeft";
import FooterCenter from "./footerCenter";
import FooterRight from "./footerRight";

export default function Footer() {
  const style = {
    backgroundColor: "#2c292f",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    minHeight: "20vh",
    alignItems: "top",
    padding: "1%",
    fontSize: "1rem",
    marginTop: "5rem",
  };

  return (
    <div style={style}>
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  );
}
