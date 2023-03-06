import React, { useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import BackToTopBtn from "../components/BackToTopBtn";
import { filterByCategory } from "../http-requests/http-requests";

const MealByCategoryPage = () => {
  const { category } = useParams();
  const [data, setData] = useState();
  const fetchData = useCallback(async () => {
    const data = await filterByCategory(category);
    setData(data);
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container className="py-3">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        {category} Meals
      </h3>

      {data === undefined ? (
        <Loader />
      ) : data === null ? (
        <h4>No Item Found</h4>
      ) : (
        <div className="auto-grid">
          {data.map((item) => (
            <ItemCard key={item.strMeal} item={item} />
          ))}
        </div>
      )}
      <BackToTopBtn />
    </Container>
  );
};

export default MealByCategoryPage;
