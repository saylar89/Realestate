import styled from "styled-components";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`main-footer ${styles.footertop}`}>
      <div className={styles.footermiddle}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Link href="/contact">
                <a>
                  <h4>Contact Us</h4>
                </a>
              </Link>
              <ul className="list-unstyled">
                <li>Kerman, Amirkabir Blvd</li>
                <li>Email : info@KarmanaGroup.com</li>
                <li>Tel : 034-4040</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Property</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>Apartment</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Villa</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Land</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>Sell Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Buy Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Rent Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Consulting</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Social Media</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <a>
                      <i className={`bi bi-facebook ${styles.social}`}></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="bi bi-instagram "></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="bi bi-linkedin "></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <i className="bi bi-twitter "></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerbottom}>
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} KarmanaGroup - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
