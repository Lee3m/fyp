import Header from "../assets/ui/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
