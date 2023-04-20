import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My title</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
