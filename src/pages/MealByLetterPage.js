import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import BackToTopBtn from "../components/BackToTopBtn";
import { filterByLetter } from "../http-requests/http-requests";

const MealByLetter = () => {
  const { letter } = useParams();
  const [data, setData] = useState();
  const fetchData = async () => {
    const data = await filterByLetter(letter);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="py-3">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        Meals Starting with "{letter}"
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

export default MealByLetter;
