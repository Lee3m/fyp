import React from "react";
import NavigationBar from "../ui/NavigationBar";

function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main className="h-screen h-full">{children}</main>
    </>
  );
}

export default Layout;
