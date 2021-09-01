import Link from "next/link";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSession, signOut } from "next-auth/client";
// import { useEffect } from "react";
// import { useState } from "react";

const Header = () => {
  const [session, loading] = useSession();

  // const[isSession,setIsSession] = useState<boolean>()

  // useEffect(()=>{
  //   getSession().then((session)=>{
  //     if (session) {
  //       setIsSession(true)
  //     } else {
  //       setIsSession(false)
  //     }
  //   })
  // },[])

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header>
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
        <Nav className="mr-auto">
          <Link href="/">
            <a className="navbar-brand logo">Karmana Estate</a>
          </Link>
        </Nav>
        <Nav>
          {!session && !loading && (
            <Link href="/logIn">
              <a className="navlink">Log in</a>
            </Link>
          )}

          {!session && !loading && (
            <Link href="/signup">
              <a className="navlink">Sign up</a>
            </Link>
          )}

          {session && (
            <Link href="/personalProfile">
              <a className="navlink">Profile</a>
            </Link>
          )}

          {session && (
            <Link href="/">
              <a className="navlink" onClick={logoutHandler}>
                Log out
              </a>
            </Link>
          )}
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
