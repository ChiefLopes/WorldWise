import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
  const currentDate = new Date();

  // Get day, month, and year from javascript
  const day = currentDate.getUTCDate();
  const month = currentDate.getUTCMonth() + 1; 
  const year = currentDate.getUTCFullYear();

  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {year} WorldWise Inc. | {day}/{month}/{year}
      </p>
    </div>
  );
};

export default Footer;
