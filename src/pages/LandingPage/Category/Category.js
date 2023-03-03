import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CategoryCard from "./CategoryCard";

import { getAllCategory } from "../../../http-requests/http-requests";
const Category = () => {
  return (
    <Container id="categories" className="categories mb-5">
      <h3 className="fs-1 c-main mb-3">Categories</h3>
      <div className="auto-grid">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </Container>
  );
};

export default Category;
