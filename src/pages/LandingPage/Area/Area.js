import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "./Area.module.css";

import Button from "react-bootstrap/Button";

import { getAllArea } from "../../../http-requests/http-requests";

import Loader from "../../../components/Loader";

const Area = () => {
  const [area, setAreas] = useState(null);
  const getArea = async () => {
    const data = await getAllArea();
    setAreas(data);
  };

  useEffect(() => {
    getArea();
  }, []);

  return (
    <Container id="areas" className="categories mb-5">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        Meals Based on Areas {area && `(${area.length})`}{" "}
      </h3>
      <h3></h3>
      <div className={styles.btnContainer}>
        {!area ? (
          <Loader />
        ) : (
          area.map((area) => (
            <Button key={area.strArea} variant="danger" className="fs-3 ">
              {area.strArea}
            </Button>
          ))
        )}
      </div>
    </Container>
  );
};

export default Area;
