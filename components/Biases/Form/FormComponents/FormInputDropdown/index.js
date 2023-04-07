import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { useFormContext, Controller } from "react-hook-form";

const options = {
  insurance: [
    {
      label: "Employer-Provided Health Insurance",
      value: "hasEmployerHealthInsurance",
    },
    {
      label: "Purchased Private Health Insurance",
      value: "hasPurchasedPrivHealthInsurance",
    },
    {
      label: "Military Health Insurance (including TRICARE)",
      value: "hasMilitaryHealthInsurance",
    },
    {
      label: "Medicare",
      value: "hasMedicare",
    },
    {
      label: "Medicaid",
      value: "hasMedicaid",
    },
    {
      label: "Veterans Administration Provided Health Insurance",
      value: "hasVeteransHealthInsurance",
    },
    {
      label: "Indian Health Services Health Insurance",
      value: "hasIndianHealthInsurance",
    },
  ],
  education: [
    {
      label: "No Schooling",
      value: "noSchooling",
    },
    {
      label: "Up to Grade 4",
      value: "maxGrade4",
    },
    {
      label: "Up to Grade 8",
      value: "maxGrade8",
    },
    {
      label: "High School (No Diploma)",
      value: "maxSomeHS",
    },
    {
      label: "High School Diploma",
      value: "highSchoolDiploma",
    },
    {
      label: "College (No Diploma)",
      value: "someCollege",
    },
    {
      label: "Associate's Degree",
      value: "associatesDegree",
    },
    {
      label: "Bachelor's Degree",
      value: "bachelorsDegree",
    },
    {
      label: "Master's Degree",
      value: "mastersDegree",
    },
    {
      label: "Bachelor's + Professional Degree",
      value: "bachelorsPlusProfessionalDegree",
    },
    {
      label: "Doctoral Degree",
      value: "doctoralDegree",
    },
  ],
};

export default function FormInputDropdown({ name, control, label }) {
  const generateSingleOptions = () => {
    return options[name].map((option) => {
      return (
        <MenuItem
          sx={{ color: "#7871aa" }}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} label={label}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}
