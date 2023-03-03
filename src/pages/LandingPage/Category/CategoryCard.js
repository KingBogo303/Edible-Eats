import React from "react";
import styles from "./CategoryCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gg from "../../../assets/images/hero-mobile2.jpg";

const CategoryCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={item.strCategoryThumb}
          className={styles.cardImg}
        />
        <Card.Body className="p-4">
          <Card.Title className="fs-2">{item.strCategory}</Card.Title>
          <Button variant="primary" className="fs-3">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryCard;
