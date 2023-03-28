import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import Image from "next/image";
import { LoremIpsum } from "react-lorem-ipsum";

export default function About({}) {
  // Temp solution for Lorem Ipsum generator
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles["about-left"]}>
        <h1 className={styles["about-title"]}>About</h1>
        <div className={styles["about-content"]}>
          <LoremIpsum p={1} />
        </div>
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
    </section>
  );
}
