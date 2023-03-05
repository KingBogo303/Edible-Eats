import React from "react";
import styles from "./LandingPage.module.css";

import heroDesk from "../../assets/images/hero-desktop.jpg";
import heroMob from "../../assets/images/hero-mobile.jpg";
import Category from "./CategoryComp/Category";
import BackToTopBtn from "../../components/BackToTopBtn";
import Area from "./AreaComp/Area";
import MealsByLetter from "./ByLetter/MealsByLetter";

const LandingPage = () => {
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
      <MealsByLetter />
      <Area />
      <Category />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default LandingPage;
