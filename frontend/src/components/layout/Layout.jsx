import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "./Layout.scss"; // Import the stylesheet

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
