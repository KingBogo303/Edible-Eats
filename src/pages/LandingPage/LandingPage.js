import React from "react";
import styles from "./LandingPage.module.css";

import heroDesk from "../../assets/images/hero-desktop.jpg";
import heroMob from "../../assets/images/hero-mobile.jpg";
import Category from "./Category/Category";
import { FiArrowUp } from "react-icons/fi";

const LandingPage = () => {
  const buttonClasses = `${styles.toTopBtn} ${
    window.scrollY >= 10 && styles.open
  }`;
  return (
    <React.Fragment>
      <div className="hero mb-5">
        <img
          src={heroDesk}
          className={`${styles.hero} ${styles.desktop}`}
          alt="food"
        />
        <img
          src={heroMob}
          className={`${styles.hero} ${styles.mobile}`}
          alt=" food"
        />
      </div>
      <Category />
      <a href="#root" className={buttonClasses}>
        <FiArrowUp className={styles.Arr} />
      </a>
    </React.Fragment>
  );
};

export default LandingPage;
