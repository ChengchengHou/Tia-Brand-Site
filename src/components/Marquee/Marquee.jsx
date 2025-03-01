import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.css";

const MarqueeComponent = ({ items, direction = "right", speed = 50 }) => {
  return (
    <div className={styles.marqueeContainer}>
      <Marquee
        direction={direction}
        speed={speed}
        autoFill={true} // ✅ Automatically removes white gaps
        gradient={false}
        className={styles.marqueeContent}
        pauseOnHover={true}
      >
        {items.map((item, index) => (
          <span key={index} className={styles.marqueeItem}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
