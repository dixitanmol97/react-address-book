import React from "react";
import FooterLeft from "./components/footerLeft";
import FooterCenter from "./components/footerCenter";
import FooterRight from "./components/footerRight";
import "./styles.scss";
import { useSelector } from "react-redux";

export default function Footer(props) {
  const collapsed = useSelector(state => state.navigationBar.collapsed);
  const style = {
    marginLeft: collapsed === true ? "0%" : "15%",
  };
  return (
    <div className="footer" style={style}>
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  );
}
