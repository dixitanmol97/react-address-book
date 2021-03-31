import React, { useState, useEffect } from "react";
import Main from "./components/main";
import "./styles.scss";
const NavigationBar = React.lazy(() => import("./components/navigationBar"));

export default function HomePage(props) {
  return (
    <div>
      <React.Suspense fallback={<div></div>}>
        <NavigationBar />
      </React.Suspense>
      <Main />
    </div>
  );
}
