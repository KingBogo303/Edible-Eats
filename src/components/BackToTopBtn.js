import React, { useEffect, useState } from "react";

import { FiArrowUp } from "react-icons/fi";

import styles from "./BackToTopBtn.module.css";

import { Link } from "react-router-dom";

const BackToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {backToTop && (
        <button onClick={scrollUp} className={styles.toTopBtn}>
          <FiArrowUp className={styles.Arr} />
        </button>
      )}
    </React.Fragment>
  );
};

export default BackToTopBtn;
