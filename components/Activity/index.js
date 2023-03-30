import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import Divider from "@mui/material/Divider";
import CountUp from "react-countup";

export default function Activity({}) {
  const [race, setRace] = useState("");

  const handleChange = (event) => {
    setRace(event.target.value);
  };

  return (
    <section id="activity" className={styles.activity}>
      <h1 className={styles["activity-title"]}>Activity</h1>
      <div className={styles["activity-content"]}>
        <div className={styles["activity-left"]}>
          <div className={styles["biases-radio-group"]}>
            <div className={styles["biases-radio-group-title"]}>Sex</div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultChecked="male"
              >
                <FormControlLabel
                  sx={{
                    color: "#7871aa",
                  }}
                  value="male"
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
                  label="Male"
                />
                <FormControlLabel
                  sx={{
                    color: "#7871aa",
                  }}
                  value="female"
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
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <div className={styles["biases-radio-group-title"]}>Race</div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={race}
                label="Race"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="married"
                  control={<Switch color="primary" />}
                  label="Married"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={styles["activity-right"]}>
          <div className={styles["activity-result"]}>
            <div>Model 1 has an accuracy of: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
            />
          </div>
          <div className={styles["activity-result"]}>
            <div>Model 2 has an accuracy of: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
            />
          </div>
          <div className={styles["activity-result"]}>
            <div>Model 3 has an accuracy of: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
