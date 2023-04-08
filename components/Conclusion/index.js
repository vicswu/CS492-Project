// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import { conclusionText } from "../../lib/textContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

export default function Conclusion({}) {
  return (
    <section id="conclusion" className={styles.conclusion}>
      <h1 className={styles["conclusion-title"]}>Conclusion</h1>
      <div className={styles["conclusion-content"]}>
        <div className={styles["conclusion-left"]}>
          {conclusionText.map((text) => (
            <p className={styles["conclusion-text"]}>{text}</p>
          ))}
        </div>
        <div className={styles["conclusion-right"]}>
          <div className={styles["conclusion-github-container"]}>
            <div className={styles["conclusion-github-title"]}>
              AI Model Repository
            </div>
            <Link
              underline="none"
              color="inherit"
              href="https://github.com/jhargun/AI-Bias-Experiment"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon
                sx={{
                  "&:hover": {
                    color: "#333",
                    transition: "color 0.2s ease-in",
                  },
                }}
                fontSize="large"
              />
            </Link>
          </div>
          <div className={styles["conclusion-github-container"]}>
            <div className={styles["conclusion-github-title"]}>
              Website Repository
            </div>
            <Link
              underline="none"
              color="inherit"
              href="https://github.com/vicswu/CS492-Project"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon
                sx={{
                  "&:hover": {
                    color: "#333",
                    transition: "color 0.2s ease-in",
                  },
                }}
                fontSize="large"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
