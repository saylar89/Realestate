import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="./">
          <Image
            alt=""
            src="/home.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link href="#buy">
            <a className="navlink">Buy</a>
          </Link>
          <Link href="#sell">
            <a className="navlink">Sell</a>
          </Link>
          <Link href="#rent">
            <a className="navlink">Rent</a>
          </Link>
        </Nav>
        <Nav>
          <Link href="../signup">
            <a className="navlink"> Log in</a>
          </Link>
          <Link href="../signup">
            <a className="navlink">Sign up</a>
          </Link>
        </Nav>
      </Navbar>
      <div className="middle">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
