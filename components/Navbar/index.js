import Image from "next/image";
import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions
import concatClassName from "../../lib/concatClassname";

export default function Navbar({}) {
  const [scrolled, setScrolled] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={concatClassName(
        styles.navbar,
        scrolled && styles["navbar-scrolled"]
      )}
    >
      <h2>CS 492: AI Model Biases Visualizer</h2>
      <div>
        <Image
          className={styles.menu}
          src={scrolled ? "/menu-scrolled.png" : "/menu.png"}
          alt="Menu Icon"
          width={30}
          height={30}
        />
        {/* TODO Slide-In Menu */}
      </div>
    </div>
  );
}
