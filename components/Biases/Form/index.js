import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

import styles from "./index.module.css";

import FormInputNumber from "./FormComponents/FormInputNumber";
import FormInputDropdown from "./FormComponents/FormInputDropdown";
import FormInputMultiCheckbox from "./FormComponents/FormInputMultiCheckbox";
import FormInputRadio from "./FormComponents/FormInputRadio";
import FormInputAutoComplete from "./FormComponents/FormInputAutoComplete";

export default function Form({}) {
  const methods = useForm({
    defaultValues: {
      AGE: "",
      WKSWORK1: "",
      UHRSWORK: "",
      TRANTIME: "",
      sex: null,
      race: [],
      maritalStatus: "",
      bornInUS: null,
      sameSexMarriage: null,
      mixedRaceMarriage: null,
      insurance: "",
      isInSchool: null,
      carpools: null,
      isGroupQuarters: null,
      englishSkill: null,
      education: "",
      has2ndDegree: null,
      workType: "",
      commute: null,
      schoolType: null,
      workLocation: null,
      degree: "",
      occupation: "",
    },
  });
  const { handleSubmit, control, setValue, watch } = methods;
  const onSubmit = (data) => {
    if (
      data.insurance === "hasEmployerHealthInsurance" ||
      data.insurance === "hasEmployerHealthInsurance" ||
      data.insurance === "hasMilitaryHealthInsurance"
    ) {
      console.log({
        ...data,
        hasPrivateHealthInsurance: "hasPrivateHealthInsurance",
        hasHealthInsurance: "hasHealthInsurance"
      });
      // Send to API
    } else if (
      data.insurance === "hasMedicare" ||
      data.insurance === "hasMedicaid" ||
      data.insurance === "hasVeteransHealthInsurance"
    ) {
      console.log({
        ...data,
        hasPublicHealthInsurance: "hasPublicHealthInsurance",
        hasHealthInsurance: "hasHealthInsurance"
      });
      // Send to API
    }
  };
  const watchCheckbox = watch("race");
  const watchRadio = watch(
    [
      "sex",
      "bornInUS",
      "sameSexMarriage",
      "mixedRaceMarriage",
      "isInSchool",
      "carpools",
      "isGroupQuarters",
      "englishSkill",
      "has2ndDegree",
      "commute",
      "schoolType",
    ],
    false
  );
  const watchDropdown = watch(["insurance", "education"], false);
  const watchNumber = watch(["AGE", "WKSWORK1", "UHRSWORK", "TRANTIME"], false);
  const watchAutocomplete = watch(
    ["workLocation", "degree", "occupation"],
    false
  );

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <div className={styles["form"]}>
        <div className={styles["form-age"]}>
          <FormInputNumber name="AGE" control={control} label="Age" />
        </div>
        <div className={styles["form-number"]}>
          <FormInputNumber
            name="WKSWORK1"
            control={control}
            label="Weeks of Work"
          />
        </div>
        <div className={styles["form-number"]}>
          <FormInputNumber
            name="UHRSWORK"
            control={control}
            label="Hours of Work"
          />
        </div>
        <div className={styles["form-number"]}>
          <FormInputNumber
            name="TRANTIME"
            control={control}
            label="Transit Time"
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"sex"}
            label={"Sex"}
          />
        </div>
        <div className={styles["form-checkbox"]}>
          <FormInputMultiCheckbox
            control={control}
            setValue={setValue}
            name={"race"}
            label={"Race"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"maritalStatus"}
            label={"Marital Status"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"bornInUS"}
            label={"Were you born in the United States?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"sameSexMarriage"}
            label={"Are you in a same-sex marriage?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"mixedRaceMarriage"}
            label={"Are you in an interracial marriage?"}
          />
        </div>
        <div className={styles["form-dropdown"]}>
          <FormInputDropdown
            name="insurance"
            control={control}
            label="Insurance"
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"isInSchool"}
            label={"Are you currently in school?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"carpools"}
            label={"Do you usually carpool?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"isGroupQuarters"}
            label={"Do you live in group quarters?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"englishSkill"}
            label={"How would you describe your english skills?"}
          />
        </div>
        <div className={styles["form-dropdown"]}>
          <FormInputDropdown
            name="education"
            control={control}
            label="Education"
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"has2ndDegree"}
            label={"Do you have a 2nd degree?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"workType"}
            label={"Work Type"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"commute"}
            label={"How do you commute to work?"}
          />
        </div>
        <div className={styles["form-radio"]}>
          <FormInputRadio
            control={control}
            setValue={setValue}
            name={"schoolType"}
            label={"Do you attend public or private school?"}
          />
        </div>
        <div className={styles["form-dropdown"]}>
          <FormInputAutoComplete
            name="workLocation"
            control={control}
            label="Where do you work?"
          />
        </div>
        <div className={styles["form-dropdown"]}>
          <FormInputAutoComplete
            name="degree"
            control={control}
            label="Degree"
          />
        </div>
        <div className={styles["form-dropdown"]}>
          <FormInputAutoComplete
            name="occupation"
            control={control}
            label="Occupation"
          />
        </div>
        <div className={styles["form-buttons"]}>
          <Button
            sx={{
              backgroundColor: "#7871aa",
              borderColor: "#7871aa",
              "&:hover": {
                backgroundColor: "#7871aa",
                borderColor: "#7871aa",
              },
            }}
            className={styles["form-button"]}
            onClick={handleSubmit(onSubmit)}
            variant={"contained"}
            disabled={
              !watchNumber ||
              watchNumber.includes("") ||
              watchNumber.some((v) => v < 0 || v > 168) ||
              !watchRadio ||
              watchRadio.includes(null) ||
              watchCheckbox.length == 0 ||
              !watchDropdown ||
              watchDropdown.includes("") ||
              !watchAutocomplete ||
              watchAutocomplete.includes("")
            }
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
      <div className={styles["results"]}>
        <div className={styles["results-title"]}>Result</div>
      </div>
    </div>
  );
}
