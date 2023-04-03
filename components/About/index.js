import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import Image from "next/image";
import { aboutText } from "../../lib/textContent";

export default function About({}) {

  return (
    <section id="about" className={styles.about}>
      <h1 className={styles["about-title"]}>About</h1>
      <div className={styles["about-content"]}>
        <div className={styles["about-left"]}>
          {aboutText.map((text) => (
            <p className={styles["about-text"]}>{text}</p>
          ))}
        </div>
        <div className={styles["about-right"]}>
          <Image
            className={styles["about-image"]}
            src={"/ai.jpg"}
            alt="AI Image"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
