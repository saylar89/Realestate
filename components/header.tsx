import Link from "next/link";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/">
          <a>
            <Image
              alt=""
              src="/home.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </a>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link href="/buy">
          <a className="navlink">Buy</a>
        </Link>
        <Link href="/sell">
          <a className="navlink">Sell</a>
        </Link>
        <Link href="/rent">
          <a className="navlink">Rent</a>
        </Link>
      </Nav>
      <Nav>
        <Link href="/signup">
          <a className="navlink"> Log in</a>
        </Link>
        <Link href="/signup">
          <a className="navlink">Sign up</a>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
