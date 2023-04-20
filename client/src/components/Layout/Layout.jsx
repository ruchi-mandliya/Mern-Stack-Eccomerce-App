import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
