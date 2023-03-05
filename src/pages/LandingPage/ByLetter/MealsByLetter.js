import React from "react";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { alphabets } from "../../../components/helper/Alphabets";

const MealsByLetter = () => {
  return (
    <Container id="letters">
      <h3 className={`stickyHead fs-1 c-main mb-3 sticky-top`}>
        Search Meals By Letter
      </h3>
      <Breadcrumb>
        {alphabets.map((letter) => (
          <Breadcrumb.Item
            key={letter}
            href={`/meals/${letter}`}
            className="fs-3 px-2"
          >
            {letter}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Container>
  );
};

export default MealsByLetter;
