import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          height={144}
          width={144}
          src="/home1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/public/home2.jpg"
          height={144}
          width={144}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/public/home3.jpg"
          height={144}
          width={144}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
