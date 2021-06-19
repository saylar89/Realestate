import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styles from "./card.module.css";

const Cards = () => {
  return (
    <CardGroup>
      <Card>
        <i className={`bi bi-house ${styles.cardIcon}`}></i>
        <Card.Body>
          <Card.Title>Research Suburbs</Card.Title>
          <Card.Text>
            Find your place with our local lifestyle,demographics and market
            info.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <i className={`bi bi-currency-dollar ${styles.cardIcon}`}></i>
        <Card.Body>
          <Card.Title>We do home loans</Card.Title>
          <Card.Text>
            We&apos;ll help you find the right home loan at a great rate.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <i className={`bi bi-speedometer ${styles.cardIcon}`}></i>
        <Card.Body>
          <Card.Title>Track your property</Card.Title>
          <Card.Text>
            Track the estimated value of your home and stay in touch with your
            local market.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Cards;
