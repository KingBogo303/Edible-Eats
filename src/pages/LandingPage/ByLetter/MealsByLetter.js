import React from "react";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { alphabets } from "../../../components/Alphabets";

const MealsByLetter = () => {
  return (
    <Container>
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        Search Meals By Letter
      </h3>
      <Breadcrumb>
        {alphabets.map((letter) => (
          <Breadcrumb.Item
            key={letter}
            href="#"
            className="fs-3 px-2 text-danger"
          >
            {letter}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Container>
  );
};

export default MealsByLetter;
