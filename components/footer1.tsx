const Footer2 = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Karmana Group
              </h6>
              <p>
                The best place to find yuor dream house or sell for the best
                price
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Property</h6>
              <p>
                <a href="#!" className="text-reset">
                  Apartment
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Villa
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Land
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Buy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Sell
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Rent
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Consulte
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Kerman, Amirkabir Blvd
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@karmanagroup.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 034-32112814
              </p>
              <p>
                <i className="fas fa-print me-3"></i> 09131410300
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#karmana">
          Karmanagroup.com
        </a>
      </div>
    </footer>
  );
};

export default Footer2;
