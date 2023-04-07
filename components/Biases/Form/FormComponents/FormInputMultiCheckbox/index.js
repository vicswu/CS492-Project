import { useEffect, useState } from "react";

import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";

import { Controller } from "react-hook-form";

const options = [
  {
    label: "American Indian",
    value: "isAmericanIndian",
  },
  {
    label: "Asian",
    value: "isAsian",
  },
  {
    label: "Black",
    value: "isBlack",
  },
  {
    label: "Pacific Islander",
    value: "isPacificIslander",
  },
  {
    label: "White",
    value: "isWhite",
  },
  {
    label: "Other Race",
    value: "isOtherRace",
  },
];

export default function FormInputMultiCheckbox({
  name,
  control,
  setValue,
  label,
}) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>
      <div>
        {options.map((option) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({}) => {
                    return (
                      <Checkbox
                        sx={{
                          color: "#7871aa",
                          "&.Mui-checked": {
                            color: "#7871aa",
                          },
                        }}
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </div>
    </FormControl>
  );
}
