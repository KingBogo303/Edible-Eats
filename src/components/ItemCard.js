import styles from "./ItemCard.module.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = ({ item, onClick }) => {
  return (
    <div>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={item.strCategoryThumb || item.strMealThumb}
          className={styles.cardImg}
        />
        <Card.Body className="p-2 p-sm-4">
          <Card.Title className="fs-2">
            {item.strMeal || item.strCategory}
          </Card.Title>
          <Button
            variant="danger"
            onClick={onClick}
            className={`fs-4 ${styles.btn}`}
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
