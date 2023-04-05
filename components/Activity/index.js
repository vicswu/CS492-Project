import { useState, useEffect } from "react";

// Styles
import styles from "./index.module.css";

// Helper Functions

// Components
import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import CountUp from "react-countup";

export default function Activity({}) {
  const [race, setRace] = useState("");

  const handleChange = (event) => {
    setRace(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section id="activity" className={styles.activity}>
      <h1 className={styles["activity-title"]}>Activity</h1>
      {/* <div className={styles["activity-content"]}>
        <div className={styles["activity-left"]}>
          <div className={styles["biases-radio-group"]}>
            <div className={styles["biases-radio-group-title"]}>Sex</div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultChecked="isMale"
              >
                <FormControlLabel
                  sx={{
                    color: "#7871aa",
                  }}
                  value="isMale"
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
                  value="isFemale"
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
                <MenuItem value="isAmericanIndian">American Indian</MenuItem>
                <MenuItem value="isAsian">Asian</MenuItem>
                <MenuItem value="isBlack">Black</MenuItem>
                <MenuItem value="isPacificIslander">Pacific Islander</MenuItem>
                <MenuItem value="isWhite">White</MenuItem>
                <MenuItem value="isOtherRace">Other</MenuItem>
              </Select>
            </FormControl>
            <div className={styles["biases-radio-group-title"]}>Marital Status</div>
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
                  value="isMarried"
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
                  label="Married"
                />
                <FormControlLabel
                  sx={{
                    color: "#7871aa",
                  }}
                  value="wasMarried"
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
                  label="Divorced"
                />
                <FormControlLabel
                  sx={{
                    color: "#7871aa",
                  }}
                  value="neverMarried"
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
                  label="Single"
                />
              </RadioGroup>
            </FormControl>
            <TextField sx={{marginTop: "3rem"}} id="standard-basic" label="Age" variant="standard" type="number"/>
            <div className={styles["biases-radio-group-title"]}>Education</div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={race}
                label="Education"
                onChange={handleChange}
              >
                <MenuItem value="noSchooling">No Schooling</MenuItem>
                <MenuItem value="maxGrade4">Up to Grade 4</MenuItem>
                <MenuItem value="maxGrade8">Up to Grade 8</MenuItem>
                <MenuItem value="maxSomeHS">Highschool (No Diploma)</MenuItem>
                <MenuItem value="highSchoolDiploma">Highschool Diploma</MenuItem>
                <MenuItem value="someCollege">College (No Diploma)</MenuItem>
                <MenuItem value="associatesDegree">Associate's Degree</MenuItem>
                <MenuItem value="bachelorsDegree">Bachelor's Degree</MenuItem>
                <MenuItem value="bachelorsPlusProfessionalDegree">Bachelor's Degree + Professional Degree</MenuItem>
                <MenuItem value="mastersDegree">Master's Degree</MenuItem>
                <MenuItem value="doctoralDegree">Doctoral Degree</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={styles["activity-right"]}>
          <div className={styles["activity-result"]}>
            <div>Model 1 predicts your income to be: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
              suffix="USD$"
            />
          </div>
          <div className={styles["activity-result"]}>
            <div>Model 2 predicts your income to be: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
              suffix="USD$"
            />
          </div>
          <div className={styles["activity-result"]}>
            <div>Model 3 predicts your income to be: </div>
            <CountUp
              className={styles["activity-count"]}
              end={10000}
              duration={2.5}
              useEasing={true}
              suffix="USD$"
            />
          </div>
        </div>
      </div> */}
      <div className={styles["activity-content"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("Sex", { required: true })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select {...register("Race", { required: true })}>
            <option value="isAmericanIndian">isAmericanIndian</option>
            <option value="isAsian">isAsian</option>
            <option value="isBlack">isBlack</option>
            <option value="isPacificIslander">isPacificIslander</option>
            <option value="isWhite">isWhite</option>
            <option value="isOtherRace">isOtherRace</option>
          </select>
          <select {...register("Education")}>
            <option value="maxGrade4">maxGrade4</option>
            <option value=" maxGrade8"> maxGrade8</option>
            <option value=" maxSomeHS"> maxSomeHS</option>
            <option value=" highSchoolDiploma"> highSchoolDiploma</option>
            <option value=" someCollege"> someCollege</option>
            <option value="        associatesDegree"> associatesDegree</option>
            <option value=" bachelorsDegree"> bachelorsDegree</option>
            <option value=" mastersDegree"> mastersDegree</option>
            <option value="        bachelorsPlusProfessionalDegree">
              {" "}
              bachelorsPlusProfessionalDegree
            </option>
            <option value=" doctoralDegree"> doctoralDegree</option>
            <option value=" has2ndDegree"> has2ndDegree</option>
          </select>
          <input
            type="number"
            placeholder="Age"
            {...register("Age", { required: true, max: 100, min: 1 })}
          />
          <select {...register("Marital Status", { required: true })}>
            <option value="isMarried">isMarried</option>
            <option value=" wasMarried"> wasMarried</option>
            <option value=" neverMarried"> neverMarried</option>
          </select>
          <select {...register("English Skills", { required: true })}>
            <option value="speaksEnglish">speaksEnglish</option>
            <option value="speaksOnlyEnglish">speaksOnlyEnglish</option>
            <option value=" speaksEnglishWell"> speaksEnglishWell</option>
          </select>
          <select {...register("Job Type", { required: true })}>
            <option value="isSelfEmployed">isSelfEmployed</option>
            <option value="isPrivateSector">isPrivateSector</option>
            <option value=" isPublicSector"> isPublicSector</option>
            <option value=" isUnpaidFamilyWorker"> isUnpaidFamilyWorker</option>
          </select>
          <select {...register("Insurance", { required: true })}>
            <option value="hasPrivateHealthInsurance">
              hasPrivateHealthInsurance
            </option>
            <option value="hasEmployerHealthInsurance">
              hasEmployerHealthInsurance
            </option>
            <option value=" hasPurchasedPrivHealthInsurance">
              {" "}
              hasPurchasedPrivHealthInsurance
            </option>
            <option value="hasMilitaryHealthInsurance">
              hasMilitaryHealthInsurance
            </option>
            <option value=" hasPublicHealthInsurance">
              {" "}
              hasPublicHealthInsurance
            </option>
            <option value="hasMedicare">hasMedicare</option>
            <option value="hasMedicaid">hasMedicaid</option>
            <option value=" hasVeteransHealthInsurance">
              {" "}
              hasVeteransHealthInsurance
            </option>
            <option value="hasIndianHealthInsurance">
              hasIndianHealthInsurance
            </option>
            <option value=" hasHealthInsurance"> hasHealthInsurance</option>
          </select>
          <select {...register("Commute", { required: true })}>
            <option value="commutePrivateVehicle">commutePrivateVehicle</option>
            <option value="commutePublicTransportation">
              commutePublicTransportation
            </option>
            <option value=" commuteBikeOrWalk"> commuteBikeOrWalk</option>
            <option value="workFromHome">workFromHome</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    </section>
  );
}
