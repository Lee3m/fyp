import React from "react";
import NavigationBar from "../ui/NavigationBar";

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>;
    </>
  );
}

export default Layout;
