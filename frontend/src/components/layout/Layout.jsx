import React from "react";
import NavigationBar from "../ui/NavigationBar";
import "./Layout.scss"; // Import the stylesheet

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main className="main-content">{children}</main>
    </>
  );
}

export default Layout;
