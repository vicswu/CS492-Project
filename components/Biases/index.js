import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components

export default function Biases({}) {
  return (
    <section id="biases" className={styles.biases}>
      <h1 className={styles["biases-title"]}>Biases</h1>
      <div className={styles["biases-content"]}>
        <div className={styles["biases-left"]}>
        </div>
        <div className={styles["biases-right"]}>
        </div>
      </div>
    </section>
  );
}
