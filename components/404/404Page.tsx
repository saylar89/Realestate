import styles from "./404Page.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.errortemplate}>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className={styles.erroractions}>
              <Link href="/">
                <a className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home{" "}
                </a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-envelope"></span> Contact
                  Support{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
