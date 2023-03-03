import React from "react";
import styles from "./CategoryCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gg from "../../../assets/images/hero-mobile2.jpg";

const CategoryCard = () => {
  return (
    <div>
      <Card style={{ width: "26.5em" }}>
        <Card.Img variant="top" src={gg} className={styles.cardImg} />
        <Card.Body className="p-4">
          <Card.Title className="fs-2">Card Title</Card.Title>
          <Card.Text className="fs-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="fs-3">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryCard;
