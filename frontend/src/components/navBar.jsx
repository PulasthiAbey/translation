import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Navigation = () => {
  return (
    <>
      <Navbar
        className="color-nav"
        variant="light"
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
            CRITR.
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: "white", fontWeight: "bold" }}>
              HOME
            </Nav.Link>
            <Nav.Link
              href="/selector"
              style={{ color: "white", fontWeight: "bold" }}
            >
              CONVERTER
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "white", fontWeight: "bold" }}
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
