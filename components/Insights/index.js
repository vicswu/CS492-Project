import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";
import CustomRadialBarChart from "./CustomRadialBarChart";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { data, keys } from "../../lib/insightsData";
import { Link } from "@mui/material";

export default function Insights({}) {
  const [dataFieldOption, setDataFieldOption] = useState("sex");
  const [salaryOption, setSalaryOption] = useState("under25k");

  const [barChartKeys, setBarChartKeys] = useState([]);
  const [datasetData, setDatasetData] = useState([]);
  const [salaryData, setSalaryData] = useState([]);
  const [radialData, setRadialData] = useState([]);

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
    setRadialData([...data[dataFieldOption]["salary"]["radial"]]);
  }, []);

  useEffect(() => {
    setBarChartKeys([...keys[dataFieldOption]]);
    setDatasetData([...data[dataFieldOption]["dataset"]]);
    setSalaryData([...data[dataFieldOption]["salary"][salaryOption]]);
    setRadialData([...data[dataFieldOption]["salary"]["radial"]]);
  }, [dataFieldOption]);

  useEffect(() => {
    setSalaryData([...data[dataFieldOption]["salary"][salaryOption]]);
  }, [salaryOption]);

  return (
    <section id="insights" className={styles.insights}>
      <h1 className={styles["insights-title"]}>Insights</h1>
      <div className={styles["insights-description"]}>
        <Link
          underline="none"
          color="inherit"
          href="https://usa.ipums.org/usa/index.shtml"
          target="_blank"
          rel="noopener"
        >
          IPSUM USA
        </Link>{" "}
        is an organization that collects U.S. census data and makes it freely
        available for others to use. In order to train our models, we exported
        IPUMS’s 2021 survey data, which contains data on approximately 3.25
        million Americans. Since we wanted to predict salaries, we dropped all
        data on those who are unemployed, which gave us a dataset containing
        information on approximately 1.45 million Americans.
        <ol className={styles["insights-description-list"]}>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s sex (and, if applicable, respondent’s spouse’s sex)
            <ul>
              <li>The census data contained binary sex (male/female)</li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s race (and, if applicable, respondent’s spouse’s race)
            <ul>
              <li>
                Race was split into 6 categories: American Indian or Alaska
                Native, Asian, black or African American, Pacific Islander,
                white, and other
              </li>
              <li>
                On top of these 6 categories, respondents were classified as
                either Hispanic or not Hispanic
              </li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s age
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s marital status{" "}
            <ul>
              <li>
                This is split into 3 categories: currently married, was
                previously married, or was never married
              </li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Whether respondent was born in the US
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s English proficiency
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s health care coverage{" "}
            <ul>
              <li>
                This included both whether they have healthcare and, if so,
                whether the healthcare is public (such as through
                Medicare/Medicaid) or private (such as through an employer)
              </li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Whether respondent is currently attending school{" "}
            <ul>
              <li>
                This includes whether respondent attends public/private school
              </li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s educational attainment
          </li>
          <li className={styles["insights-description-list-item"]}>
            If applicable, field of respondent’s degree
          </li>
          <li className={styles["insights-description-list-item"]}>
            Class of worker{" "}
            <ul>
              <li>
                Class means whether they are self employed, working for a
                private company, or working for the government. Recall that all
                respondents in our dataset are employed
              </li>
            </ul>
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s occupation
          </li>
          <li className={styles["insights-description-list-item"]}>
            The number of weeks worked in the last year
          </li>
          <li className={styles["insights-description-list-item"]}>
            The usual number of hours worked per week in the last year
          </li>
          <li className={styles["insights-description-list-item"]}>
            The state in which the respondent works
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s means of transportation to workplace
          </li>
          <li className={styles["insights-description-list-item"]}>
            Respondent’s wage and salary income{" "}
            <ul>
              <li>This was adjusted for inflation to 2010 dollars</li>
            </ul>
          </li>
        </ol>
        Below, we provide more detailed information about the distribution of
        our dataset.
      </div>
      <div className={styles["insights-content"]}>
        <div className={styles["insights-radio-group"]}>
          <div className={styles["insights-radio-group-title"]}>Data Field</div>
          <FormControl fullWidth>
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
              <MenuItem value="jobType">Job Type</MenuItem>
              <MenuItem value="maritalStatus">Marital Status</MenuItem>
              <MenuItem value="insurance">Insurance</MenuItem>
              <MenuItem value="bornInUS">US Citizenship</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles["insights-dataset-chart"]}>
          <div className={styles["insights-dataset-chart-title"]}>
            Dataset Distribution
          </div>
          <CustomBarChart data={datasetData} keys={barChartKeys} />
        </div>
        <div
          className={styles["insights-salary-chart"]}
          style={{ height: dataFieldOption !== "education" ? "400px" : "0px" }}
        >
          <div className={styles["insights-salary-chart-title"]}>
            Annual Salary Distribution
          </div>
          {dataFieldOption !== "education" && (
            <>
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
            </>
          )}
        </div>
        <div className={styles["insights-radial-chart"]}>
          <CustomRadialBarChart data={radialData} />
        </div>
      </div>
    </section>
  );
}
