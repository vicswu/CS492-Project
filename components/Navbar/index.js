import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions
import concatClassName from "../../lib/concatClassname";

// Components
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Slide from "@mui/material/Slide";

export default function Navbar({ menu, setMenu }) {
  const [scrolled, setScrolled] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        className={concatClassName(
          styles.navbar,
          scrolled && styles["navbar-scrolled"]
        )}
        style={{ opacity: menu ? 0.5 : 1 }}
      >
        <h2>CS 492: AI Model Biases Visualizer</h2>
        <div>
          <Image
            className={styles.menu}
            src={scrolled ? "/menu-scrolled.png" : "/menu.png"}
            alt="Menu Icon"
            width={30}
            height={30}
            onClick={() => {
              setMenu((menu) => !menu);
            }}
          />
        </div>
      </div>
      <Slide direction="left" in={menu} mountOnEnter unmountOnExit>
        <div
          className={concatClassName(
            styles["menu-container"],
            scrolled && styles["menu-container-scrolled"]
          )}
        >
          <h2 className={styles["menu-header"]}>Sections</h2>
          <div className={styles["menu-close-button"]}>
            <hr
              className={concatClassName(
                styles["menu-close-button-line"],
                scrolled && styles["menu-close-button-line-scrolled"]
              )}
            />
            <IconButton
              variant="contained"
              disableElevation
              onClick={() => {
                setMenu((menu) => !menu);
              }}
              sx={{
                border: scrolled ? "3px solid #e7ebc5" : "3px solid #7871aa",
              }}
            >
              <DoubleArrowIcon
                sx={{ color: scrolled ? "#e7ebc5" : "#7871aa" }}
              />
            </IconButton>
          </div>
          <div className={styles["menu-sections"]}>
            <ul>
              <a
                href="#about"
                className={concatClassName(
                  styles["menu-section"],
                  scrolled && styles["menu-section-scrolled"]
                )}
              >
                <div className={styles["menu-section-details"]}>
                  <div className={styles["menu-section-number"]}>1.0</div>
                  <div className={styles["menu-section-name"]}>About</div>
                </div>
              </a>
            </ul>
            <ul>
              <a
                href="#insights"
                className={concatClassName(
                  styles["menu-section"],
                  scrolled && styles["menu-section-scrolled"]
                )}
              >
                <div className={styles["menu-section-details"]}>
                  <div className={styles["menu-section-number"]}>2.0</div>
                  <div className={styles["menu-section-name"]}>Insights</div>
                </div>
              </a>
            </ul>
            <ul>
              <a
                href="#models"
                className={concatClassName(
                  styles["menu-section"],
                  scrolled && styles["menu-section-scrolled"]
                )}
              >
                <div className={styles["menu-section-details"]}>
                  <div className={styles["menu-section-number"]}>3.0</div>
                  <div className={styles["menu-section-name"]}>Models</div>
                </div>
              </a>
            </ul>
            <ul>
              <a
                href="#biases"
                className={concatClassName(
                  styles["menu-section"],
                  scrolled && styles["menu-section-scrolled"]
                )}
              >
                <div className={styles["menu-section-details"]}>
                  <div className={styles["menu-section-number"]}>4.0</div>
                  <div className={styles["menu-section-name"]}>Biases</div>
                </div>
              </a>
            </ul>
            <ul>
              <a
                href="#methodology"
                className={concatClassName(
                  styles["menu-section"],
                  scrolled && styles["menu-section-scrolled"]
                )}
              >
                <div className={styles["menu-section-details"]}>
                  <div className={styles["menu-section-number"]}>5.0</div>
                  <div className={styles["menu-section-name"]}>Conclusion</div>
                </div>
              </a>
            </ul>

          </div>
        </div>
      </Slide>
    </>
  );
}
