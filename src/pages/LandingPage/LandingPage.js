import React from "react";
import styles from "./LandingPage.module.css";

import heroDesk from "../../assets/images/hero-desktop.jpg";
import heroMob from "../../assets/images/hero-mobile.jpg";
import Category from "./Category/Category";

const LandingPage = () => {
  // getAllCategory();
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
    </React.Fragment>
  );
};

export default LandingPage;