import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CustomBarChart from "./CustomBarChart";

export default function Biases({}) {
  return (
    <section id="biases" className={styles.biases}>
      <h1 className={styles["biases-title"]}>Biases</h1>
      <div className={styles["biases-content"]}>
        <div className={styles["biases-radio-group"]}>
          <div className={styles["biases-radio-group-title"]}>Models</div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultChecked="model1"
            >
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="model1"
                control={
                  <Radio
                    sx={{
                      color: "#7871aa",
                      "&.Mui-checked": {
                        color: "#7871aa",
                      },
                    }}
                  />
                }
                label="Model 1"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="model2"
                control={
                  <Radio
                    sx={{
                      color: "#7871aa",
                      "&.Mui-checked": {
                        color: "#7871aa",
                      },
                    }}
                  />
                }
                label="Model 2"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="model3"
                control={
                  <Radio
                    sx={{
                      color: "#7871aa",
                      "&.Mui-checked": {
                        color: "#7871aa",
                      },
                    }}
                  />
                }
                label="Model 3"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles["biases-chart"]}>
          <CustomBarChart/>
        </div>
      </div>
    </section>
  );
}
