import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import CategoryCard from "./CategoryCard";

import { getAllCategory } from "../../../http-requests/http-requests";
const Category = () => {
  const [categories, setCategories] = useState(null);
  const getCategory = async () => {
    const data = await getAllCategory();
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Container id="categories" className="categories mb-5">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        Categories {categories && `(${categories.length})`}{" "}
      </h3>
      <div className="auto-grid">
        {!categories ? (
          <p>searching</p>
        ) : (
          categories.map((Category) => (
            <CategoryCard key={Category.idCategory} item={Category} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Category;
