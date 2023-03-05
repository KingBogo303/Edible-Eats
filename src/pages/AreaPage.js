import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import BackToTopBtn from "../components/BackToTopBtn";

import { filterByArea } from "../http-requests/http-requests";

const AreaPage = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const fetchData = async () => {
    const data = await filterByArea(name);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="py-3">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>{name} Meals</h3>

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

export default AreaPage;
