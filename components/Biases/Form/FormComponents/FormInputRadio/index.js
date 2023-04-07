import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Controller } from "react-hook-form";

const options = {
  sex: [
    {
      label: "Female",
      value: "isFemale",
    },
    {
      label: "Male",
      value: null,
    },
  ],
  maritalStatus: [
    {
      label: "Married",
      value: "isMarried",
    },
    {
      label: "Was Married",
      value: "wasMarried",
    },
    {
      label: "Never Married",
      value: "neverMarried",
    },
  ],
  bornInUS: [
    {
      label: "Yes",
      value: "bornInUS",
    },
    {
      label: "No",
      value: null,
    },
  ],
  sameSexMarriage: [
    {
      label: "Yes",
      value: "sameSexMarriage",
    },
    {
      label: "No",
      value: null,
    },
  ],
  mixedRaceMarriage: [
    {
      label: "Yes",
      value: "mixedRaceMarriage",
    },
    {
      label: "No",
      value: null,
    },
  ],
  isInSchool: [
    {
      label: "Yes",
      value: "isInSchool",
    },
    {
      label: "No",
      value: null,
    },
  ],
  carpools: [
    {
      label: "Yes",
      value: "carpools",
    },
    {
      label: "No",
      value: null,
    },
  ],
  isGroupQuarters: [
    {
      label: "Yes",
      value: "isGroupQuarters",
    },
    {
      label: "No",
      value: null,
    },
  ],
  englishSkill: [
    {
      label: "Speaks English",
      value: "speaksEnglish",
    },
    {
      label: "Speaks Only English",
      value: "speaksOnlyEnglish",
    },
    {
      label: "Speaks English Well",
      value: "speaksEnglishWell",
    },
    {
      label: "Does not Speak English",
      value: null,
    },
  ],
  has2ndDegree: [
    {
      label: "Yes",
      value: "has2ndDegree",
    },
    {
      label: "No",
      value: null,
    },
  ],
  workType: [
    {
      label: "Self-Employed",
      value: "isSelfEmployed",
    },
    {
      label: "Private Sector",
      value: "isPrivateSector",
    },
    {
      label: "Public Sector",
      value: "isPublicSector",
    },
    {
      label: "Unpaid Family Worker",
      value: "isUnpaidFamilyWorker",
    },
    {
      label: "N/A",
      value: null,
    },
  ],
  commute: [
    {
      label: "Commute by Own Vehicle",
      value: "commutePrivateVehicle",
    },
    {
      label: "Commute by Public Transportation",
      value: "commutePublicTransportation",
    },
    {
      label: "Commute by Bike or Walk",
      value: "commuteBikeOrWalk",
    },
    {
      label: "Work from Home",
      value: "workFromHome",
    },
    {
      label: "N/A",
      value: null,
    },
  ],
  schoolType: [
    {
      label: "Public",
      value: "attendingPublicSchool",
    },
    {
      label: "Private",
      value: "attendingPrivateSchool",
    },
    {
      label: "Not in School",
      value: null,
    },
  ],
};

export default function FormInputRadio({ name, control, label }) {
  const generateRadioOptions = () => {
    return options[name].map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
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
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup row value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
