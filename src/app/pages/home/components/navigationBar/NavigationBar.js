import React from "react";
import Profile from "./profile/Profile";
import NavigationItems from "./navigationItems";
import "./styles.scss";
import { useSelector } from "react-redux";

export default function NavigationBar(props) {
  const collapsed = useSelector(state => state.navigationBar.collapsed);
  const style = {
    width: collapsed === true ? "0%" : "15%",
  };
  return (
    <div className="navigation-bar" style={style}>
      <Profile />
      <NavigationItems />
    </div>
  );
}
