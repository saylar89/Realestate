import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./footer";
import Link from "next/link";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./">
          <img
            alt=""
            src="/home.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#buy">Buy</Nav.Link>
          <Nav.Link href="#sell">Sell</Nav.Link>
          <Nav.Link href="#rent">Rent</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="../signup">Log in </Nav.Link>
          <Nav.Link href="../signup">Sign up</Nav.Link>
        </Nav>
      </Navbar>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
}
