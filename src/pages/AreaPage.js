import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

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
    <Container>
      {!data ? <Loader /> : <div>{JSON.stringify(data)}</div>}
    </Container>
  );
};

export default AreaPage;
