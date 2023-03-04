import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import BackToTopBtn from "../components/BackToTopBtn";

import { filterByArea } from "../http-requests/http-requests";

const AreaPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const data = await filterByArea(name);
    setData(data);
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="py-3">
      {!data ? (
        <Loader />
      ) : (
        <div className="auto-grid">
          {data.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      )}
      <BackToTopBtn />
    </Container>
  );
};

export default AreaPage;
