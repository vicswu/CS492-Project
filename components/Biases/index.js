import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InfoIcon from "@mui/icons-material/Info";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { data } from "../../lib/biasesData";
import CustomBarChart from "./CustomBarChart";
import Image from "next/image";

export default function Biases({}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [model, setModel] = useState("mainModel");

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const open = Boolean(anchorEl);

  return (
    <section id="biases" className={styles.biases}>
      <h1 className={styles["biases-title"]}>Biases</h1>
      <div className={styles["biases-content"]}>
        <div className={styles["biases-radio-group"]}>
          <div className={styles["biases-radio-group-title"]}>
            Models{" "}
            <div className={styles["biases-popover"]}>
              <InfoIcon
                fontSize="small"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              />
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 2 }}>
                  <b>Main Model</b>: Model trained using all data fields from
                  the census dataset
                </Typography>
                <Typography sx={{ p: 2 }}>
                  <b>No Protected Fields Model</b>: Model trained using all data
                  fields, excluding protected data fields (eg: sex, race, etc.),
                  from the census dataset
                </Typography>
                <Typography sx={{ p: 2 }}>
                  <b>Protected Fields Only Model</b>: Model trained using only
                  protected data fields (eg: sex, race, etc.) from the census
                  dataset
                </Typography>
              </Popover>
            </div>
          </div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={model}
              onChange={handleModelChange}
            >
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="mainModel"
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
                label="Main Model"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="noProtectedFieldsModel"
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
                label="No Protected Fields Model"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="protectedFieldsOnlyModel"
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
                label="Protected Fields Only Model"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles["biases-results"]}>
          <div className={styles["biases-result"]}>
            <div className={styles["biases-result-title"]}>Average Income:</div>
            <CountUp
              className={styles["biases-result-value"]}
              end={data[model]["income"]}
              duration={2.5}
              useEasing={true}
              prefix="US$"
            />
          </div>
          <div className={styles["biases-result"]}>
            <div className={styles["biases-result-title"]}>
              Predicted Average Income:
            </div>
            <CountUp
              className={styles["biases-result-value"]}
              end={data[model]["predictedIncome"]}
              duration={2.5}
              useEasing={true}
              prefix="US$"
            />
          </div>
          <div className={styles["biases-result"]}>
            <div className={styles["biases-result-title"]}>
              Average Absolute Error:
            </div>
            <CountUp
              className={styles["biases-result-value"]}
              end={data[model]["absoluteError"]}
              duration={2.5}
              useEasing={true}
              prefix="US$"
            />
          </div>
          <div className={styles["biases-result"]}>
            <div className={styles["biases-result-title"]}>
              Average Relative Error:
            </div>
            <CountUp
              className={styles["biases-result-value"]}
              end={data[model]["relativeError"]}
              duration={2.5}
              useEasing={true}
              prefix="US$"
            />
          </div>
        </div>
        <div className={styles["biases-observations"]}>
          <div className={styles["biases-observations-title"]}>
            Observations
          </div>
          {data[model]["observations"].map((observationData) => {
            return (
              <div className={styles["biases-observations-chart"]}>
                <CustomBarChart
                  data={observationData}
                  keys={["predicted averave income"]}
                />
                {/* <div className={styles["biases-observations-explanation"]}>
                  Short Paragraph
                </div> */}
              </div>
            );
          })}
        </div>
        {/* <div className={styles["biases-shap"]}>
          <div className={styles["biases-shap-title"]}>SHAP Plot</div>
          <div className={styles["biases-shap-image"]}>
            <Image
              src={"/mainModel.png"}
              alt="AI Image"
              fill
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
