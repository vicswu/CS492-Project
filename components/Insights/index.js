import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";

export default function Insights({}) {
  return (
    <section id="insights" className={styles.insights}>
      <h1 className={styles["insights-title"]}>Insights</h1>
      <div className={styles["insights-content"]}>
        <div className={styles["insights-left"]}>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Sex</h3>
            <div className={styles["insights-chart"]}>
              <CustomPieChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Education</h3>
            <div className={styles["insights-chart"]}>
              <CustomPieChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Employment Status</h3>
            <div className={styles["insights-chart"]}>
              <CustomPieChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
        </div>
        <div className={styles["insights-right"]}>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Race</h3>
            <div className={styles["insights-chart"]}>
              <CustomBarChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Worker Class</h3>
            <div className={styles["insights-chart"]}>
              <CustomBarChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
          <div className={styles["insights-chart-container"]}>
            <h3 className={styles["insights-chart-title"]}>Marital Status</h3>
            <div className={styles["insights-chart"]}>
              <CustomBarChart />
            </div>
            <div className={styles["insights-chart-description"]}>
              Short Description
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
