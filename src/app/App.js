import Header from "app/pages/header";
import Footer from "app/pages/footer";
import React, { useState, useEffect } from "react";
import Routes from "./routes";

export default function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
