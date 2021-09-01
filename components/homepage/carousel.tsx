import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import classes from "./carousel.module.css";

const Carousels = () => {
  return (
    <div className={classes.caption}>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            height={550}
            width={1200}
            src="/home1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your Dream House</h3>
            <p>With 5 bedroom and 4 bathroom</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home2.jpg"
            height={550}
            width={1200}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Middle of pure nature</h3>
            <p>With 3 bedroom and 3 bathroom</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home3.jpg"
            height={550}
            width={1200}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Beautiful night below thousands stars</h3>
            <p>With 6 bedroom and 4 bathroom</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
