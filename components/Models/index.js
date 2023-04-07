// Styles
import styles from "./index.module.css";

// Helper Functions

// Components

export default function Models({}) {
  return (
    <section id="models" className={styles.models}>
      <h1 className={styles["models-title"]}>Models</h1>
      <div className={styles["models-description"]}>
        <div className={styles["models-description-paragraph"]}>
          We trained 3 regression neural networks to predict salaries given
          different subsets of our data. The first (which we call the “main
          model”) was given all data fields. This was our base case, and our
          hypothesis was that this model would perform the best as it was given
          the most data.
        </div>
        <div className={styles["models-description-paragraph"]}>
          We then designated certain fields as “protected fields”. These are
          fields that, if used when making a decision about something like a
          loan application, would be considered discriminatory.
        </div>
        <div className={styles["models-description-paragraph"]}>
          The fields designated as “protected” were:
        </div>
        <ol className={styles["models-description-list"]}>
          <li className={styles["models-description-list-item"]}>
            Respondent’s sex
          </li>
          <li className={styles["models-description-list-item"]}>
            Respondent’s race
          </li>
          <li className={styles["models-description-list-item"]}>
            Whether respondent was born in the US
          </li>
          <li className={styles["models-description-list-item"]}>
            Respondent’s marital status
            <ul>
              <li>This includes whether respondent is in a same sex or mixed race marriage</li>
            </ul>
          </li>
        </ol>
        <div className={styles["models-description-paragraph"]}>
          Note that an argument could be made that other fields should be
          considered protected depending on the use case of the model. For
          example, in certain circumstances, considering a respondent’s age when
          making a decision could be considered a form of ageism. For
          simplicity, we only tested one group of protected fields, but future
          experiments could be run with different groups of protected fields.
        </div>
        <div className={styles["models-description-paragraph"]}>
          One simple way to try to eliminate any biases from our model would be
          to not provide information about protected fields. Our 2nd model
          (which we call the “no protected fields model”) does exactly this. It
          was trained on all fields except the protected fields.
        </div>
        <div className={styles["models-description-paragraph"]}>
          Finally, our 3rd model (which we call the “protected fields only
          model”) was trained only on protected fields. The goal here was to
          create a ‘stereotype bot’ that tries to predict salary based purely on
          protected fields. Such a model would (hopefully) never be used in the
          real world. Instead, our goal with creating it was to analyze which
          fields it found most useful when predicting salary.
        </div>
        <div className={styles["models-description-paragraph"]}>
          More detailed information about the architecture of the neural
          networks and preprocessing steps used can be found at the bottom of
          the website.
        </div>
      </div>
    </section>
  );
}
