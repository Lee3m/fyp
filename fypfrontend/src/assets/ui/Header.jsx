import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home" className="ms-0">
          Navbar
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#pricing">Supervisors</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
