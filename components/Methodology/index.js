import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import { methodologyText } from "../../lib/textContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

export default function Methodology({}) {
  return (
    <section id="methodology" className={styles.methodology}>
      <h1 className={styles["methodology-title"]}>Methodology</h1>
      <div className={styles["methodology-content"]}>
        <div className={styles["methodology-left"]}>
          {methodologyText.map((text) => (
            <p className={styles["methodology-text"]}>{text}</p>
          ))}
        </div>
        <div className={styles["methodology-right"]}>
          <div className={styles["methodology-github-container"]}>
            <div className={styles["methodology-github-title"]}>
              AI Model Repository
            </div>
            <Link
              underline="none"
              color="inherit"
              href="https://github.com/jhargun/AI-Bias-Experiment"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon sx={{ "&:hover": { color: "#333", transition: "color 0.2s ease-in" } }} fontSize="large" />
            </Link>
          </div>
          <div className={styles["methodology-github-container"]}>
            <div className={styles["methodology-github-title"]}>
              Website Repository
            </div>
            <Link
              underline="none"
              color="inherit"
              href="https://github.com/vicswu/CS492-Project"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon sx={{ "&:hover": { color: "#333", transition: "color 0.2s ease-in" } }} fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
