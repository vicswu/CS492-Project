import { useState } from "react";

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
import Form from "./Form";
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
      <div className={styles["biases-description"]}>
        <div className={styles["biases-description-paragraph"]}>
          In order to evaluate model performance, we looked at 4 metrics (each
          calculated using predictions made on the test set, which the model did
          not see during training). First, we looked at the average predicted
          income. Next, we looked at the average absolute error, which is
          calculated by taking the average of the absolute value of the
          difference between predicted and actual salaries. This tells us how
          far the model’s predictions were from the actual salaries on average.
          A lower value means the model’s predictions were on average closer to
          the actual values. After that, we looked at the average relative
          error. This is simply the average difference between predicted and
          actual salaries (calculated without absolute value, unlike absolute
          error). This allows us to see if the model tends to underpredict
          salaries (in which case the average relative error will be negative)
          or overpredict salaries (in which case the average relative error will
          be positive). Finally, we looked at the model’s R-squared value, a
          metric ranging from 0 to 1 that allows us to see at a glance how well
          the model fits the data (with 0 meaning it does not predict salary any
          better than simply predicting the mean salary every time and 1 meaning
          it perfectly predicts everyone’s salary). In other words, a higher
          R-squared value indicates a better performing model.
        </div>
        <div className={styles["biases-description-paragraph"]}>
          In order to look for potential biases, we used a technique called SHAP
          (short for SHapley Additive exPlanations). This allows us to determine
          the importance and effects of different fields on the models’ final
          predictions. Before getting into the bias analysis, here’s a quick
          intro on how to read a SHAP visualization.
        </div>
        <div className={styles["biases-description-paragraph"]}>
          Take the following example of a SHAP visualization:
        </div>
        <div className={styles["biases-description-shap-image"]}>
          <Image
            className={styles["shap-image"]}
            src={`/mainModel.png`}
            alt={`Shap Plot Image for ${model}`}
            fill
          />
        </div>
        <div className={styles["biases-description-paragraph"]}>
          Each of these points represents a data point. The red values
          correspond to higher values, while the blue values correspond to lower
          values (with purple representing values in the middle). In this case,
          red values correspond to more hours worked per week, while blue values
          correspond to less hours worked per week. Dots to the left of the line
          mean the number of hours worked had a positive impact on the salary
          prediction, while dots to the right of the line mean the number of
          hours worked had a negative impact on the salary prediction. In this
          case, we can see that the dots to the right are mostly red, while the
          dots to the left are mostly blue. This means the model predicted that
          people who worked more hours made more money, which is a reasonable
          thing to predict.
        </div>
        <div className={styles["biases-description-paragraph"]}>
          Note that boolean values (or values that are either true or false, as
          opposed to a numerical value) can also be graphed on a SHAP
          visualization. In the above example, red values represent true
          (meaning the respondent works in Illinois) while blue values represent
          false (meaning the respondent does not work in Illinois). In this
          case, we can see that the red dots are mostly to the right, while the
          blue dots are on or slightly to the left of the line. This means the
          model predicted that people working in Illinois made more money but
          not working in Illinois didn’t have a major effect on predictions.
        </div>
        <div className={styles["biases-description-paragraph"]}>
          Now, we can get into our examination of biases in our models. For each
          model, a SHAP visualization will be shown with the fields with the
          largest impact on prediction at the top of the visualization.
        </div>
      </div>
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
        <div className={styles["biases-results-shap"]}>
          <div className={styles["biases-results"]}>
            <div className={styles["biases-result"]}>
              <div className={styles["biases-result-title"]}>
                Average Income:
              </div>
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
          <div className={styles["biases-shap"]}>
            <div className={styles["biases-shap-title"]}>SHAP Plot</div>
            <div className={styles["biases-shap-image"]}>
              <Image
                className={styles["shap-image"]}
                src={`/${model}.png`}
                alt={`Shap Plot Image for ${model}`}
                fill
              />
            </div>
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
      </div>
      <h1 className={styles["biases-activity-title"]}>Try It Yourself</h1>
      <div className={styles["biases-activity-description"]}>
        We have provided information about the general trends in predictions in
        our Biases section. Now, you have the opportunity to test the models
        yourself. Enter data about a theoretical person and see what each of our
        models thinks their salary would be. Note that the model was trained and
        evaluated on employed Americans, so the information you enter must match
        this description.
      </div>
      <div className={styles["biases-activity-content"]}>
        <Form />
      </div>
    </section>
  );
}
