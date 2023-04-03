import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { data, keys } from "../../lib/insightsData";

export default function Insights({}) {
  const [dataFieldOption, setDataFieldOption] = useState("sex");
  const [salaryOption, setSalaryOption] = useState("under25k");

  const [barChartKeys, setBarChartKeys] = useState(["male, female"]);
  const [datasetData, setDatasetData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);

  const handleDataFieldChange = (event) => {
    setDataFieldOption(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalaryOption(event.target.value);
  };

  useEffect(() => {
    setBarChartKeys([...keys[dataFieldOption]]);
    setDatasetData([...data[dataFieldOption]["dataset"]]);
    setSalaryData([...data[dataFieldOption]["salary"][salaryOption]]);
  }, []);

  useEffect(() => {
    setBarChartKeys([...keys[dataFieldOption]]);
    setDatasetData([...data[dataFieldOption]["dataset"]]);
  }, [datasetData]);

  useEffect(() => {
    setSalaryData([...data[dataFieldOption]["salary"][salaryOption]]);
  }, [salaryOption]);

  return (
    <section id="insights" className={styles.insights}>
      <h1 className={styles["insights-title"]}>Insights</h1>
      <div className={styles["insights-content"]}>
        <div className={styles["insights-radio-group"]}>
          <div className={styles["insights-radio-group-title"]}>Data Field</div>
          <FormControl fullWidth>
            <InputLabel id="insights-select-label">Age</InputLabel>
            <Select
              labelId="insights-select-label"
              id="insights-select"
              value={dataFieldOption}
              label="Data Field"
              onChange={handleDataFieldChange}
            >
              <MenuItem value="sex">Sex</MenuItem>
              <MenuItem value="race">Race</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="workerClass">Worker Class</MenuItem>
              <MenuItem value="maritalStatus">Marital Status</MenuItem>
              <MenuItem value="insurance">Insurance</MenuItem>
              <MenuItem value="englishSkills">English Skills</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles["insights-dataset-chart"]}>
          <div className={styles["insights-dataset-chart-title"]}>
            Dataset Distribution
          </div>
          <CustomBarChart data={datasetData} keys={barChartKeys}/>
        </div>
        <div className={styles["insights-salary-chart"]}>
          <div className={styles["insights-salary-chart-title"]}>
            Annual Salary Distribution
          </div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="salary-radio-buttons-group-label"
              name="salary-radio-buttons-group"
              value={salaryOption}
              onChange={handleSalaryChange}
            >
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="under25k"
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
                label="Under US$25,000"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="25To50k"
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
                label="US$25,000 to US$50,000"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="50To75k"
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
                label="US$50,000 to US$75,000"
              />
              <FormControlLabel
                sx={{
                  color: "#7871aa",
                }}
                value="over75k"
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
                label="Over US$75,000"
              />
            </RadioGroup>
          </FormControl>
          <CustomPieChart data={salaryData} />
        </div>
      </div>
      {/* <div className={styles["insights-content"]}>
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
            <h3 className={styles["insights-chart-title"]}>
              Employment Status
            </h3>
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
      </div> */}
    </section>
  );
}
