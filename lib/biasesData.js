export const keys = {
  sex: ["female", "male"],
  race: [
    "American Indian",
    "Asian",
    "Black",
    "Pacific Islander",
    "White",
    "Other Race",
  ],
  education: [
    "Up to Grade 4",
    "Up to Grade 8",
    "High School (No Diploma)",
    "High School Diploma",
    "College (No Diploma)",
    "Associate's Degree",
    "Bachelor's Degree",
    "Bachelor's + Professional Degree",
    "Master's Degree",
    "Doctoral Degree",
    "2 Degrees",
  ],
  jobType: [
    "Self-Employed",
    "Private Sector",
    "Public Sector",
    "Unpaid Family Worker",
  ],
  maritalStatus: ["Married", "Was Married", "Never Married"],
  insurance: [
    "Health Insurance",
    "Private Health Insurance",
    "Public Health Insurance",
  ],
  englishSkills: [
    "Speaks English",
    "Speaks Only English",
    "Speaks English Well",
  ],
};

export const text = {
  mainModel: {
    modelDescription:
      "The model was on average about $12k off in its predictions, with a tendency to underpredict salaries. Considering the massive variance in salaries, these results are far better than random chance.",
    shapDescription:
      "If we look at the SHAP visualization (which shows the fields with the largest effects on the prediction at the top), we can begin to understand the model’s reasoning. The model places a high emphasis on the number of hours worked, with more hours worked leading it to predict a higher salary. It reduces predictions for those who are self-employed, a group that makes on average far less than the rest of the population. It also predicts a higher salary for certain jobs (such as nurses, physicians/surgeons, managers, and chief executives) and degrees (such as business and engineering degrees). This makes sense, and a human would likely use similar reasoning if predicting salary. However, the use of some protected fields when making predictions begins to highlight the model’s biases. First, we can see that the model predicts lower salaries if isFemale is true (meaning the respondent is a woman) than if isFemale is false (meaning the respondent is a man). If we look at the mean predictions for men vs. women, the divide is stark.",
    sexDescription:
      "The average prediction for women is almost $10k less than the average prediction for men. However, if we look at the error, we find that on average, the absolute error for women is less than the absolute error for men, meaning the model’s predictions for women are actually more accurate than predictions for men. This makes sense when we look at the average salaries of men and women. The nearly $10k difference in average salaries is very similar to the difference seen in predictions. In other words, it seems the model has learned that women make on average far less than men and factored that into its predictions.",
    maritalStatusDescription:
      "It may be surprising to learn that the difference between predictions on men and women is so large given the relatively small impact of isFemale shown in the SHAP visualization. This trend continues for other fields. For example, while the effects of marital status appear small on the SHAP visualization, in actuality, the difference in average predictions is massive.",
    raceDescription:
      "Similarly, none of the race fields had a significant enough effect to show up in the SHAP visualization. Despite this, there is massive disparity in the predictions between different races.",
    conclusion:
      "Clearly, the SHAP analysis is not a perfect indicator of the level of bias. After all, it appears to show that factors like sex, race, and marital status don’t have a large impact on predictions when compared to factors like education or occupation. If the model isn’t weighting protected factors highly, how is it possible that such massive disparities appear in predictions? To understand this, it helps to look at the results for the No Protected Fields model.",
  },
  noProtectedFieldsModel: {
    modelDescription:
      "This model was only slightly less accurate than the main model. If removing protected fields eliminates bias, then this dip in accuracy could be deemed acceptable.",
    shapDescription:
      "A cursory look at the SHAP visualization seems to indicate that bias from the main model has been eliminated. The model looks at reasonable factors, like whether the respondent works in high income professions (such as physicians/surgeons or chief executives and legislators) or works in states with relatively high incomes (such as California or New York). However, a deeper look into the predictions reveals that bias still exists. Even though the model is not told whether the respondent is male or female, the average prediction for women is still far lower than the average prediction for men.",
    sexDescription:
      "While the divide in average prediction between men and women here (approximately $6k) is less than the divide between predictions in the main model (approximately $10k), it is still clearly present. The divides in predictions based on race and marital status also appear.",
    maritalStatusDescription:
      "These large differences in predictions make sense when you look at who works in the jobs and holds the degrees that the model found most valuable.",
    raceDescription: "",
    conclusion:
      "With the exception of business degrees (which have a percentage of women roughly equal to the percentage of women in the entire dataset) and nursing jobs (which have a far higher percentage of women than men), all degrees and occupations given a high value by the model have a disproportionate number of men. We notice an even more pronounced trend when looking at race. Each of the most impactful occupations and degrees are majority white with the next most represented race being asians. These differences in representation help explain why the model made such disparate predictions despite not being given fields such as race or sex.",
  },
  protectedFieldsOnlyModel: {
    modelDescription:
      "This model was far less accurate than the other two models, which makes sense since it was given far less information to work with. A model such as this, which relies solely on protected fields and fails to achieve a high accuracy, would likely never be deployed in the real world. Still, the fact that it performed better than random chance shows bias is present in our data. Therefore, it is useful to examine what factors it learned to prioritize in its predictions to get a better understanding of how bias can creep into models.",
    shapDescription:
      "In the SHAP visualization for this model, we see that the model lowers the predicted salary if the respondent is a woman. This effect was noticed in the main model, but as shown in the SHAP visualization, the isFemale field had a far higher impact here than in the main model. This is likely because the Protected Fields Only model received far less data, forcing it to rely more heavily on the isFemale field.",
    sexDescription: "",
    maritalStatusDescription:
      "We also see that respondents who are or were married (including those in same sex or mixed race marriages) are predicted to have higher salaries. While marital status also appeared in the SHAP analysis of the main model, the effect here is far more pronounced. This is likely because being or having been married correlates with older age, which is correlated with higher salaries. In other words, the model is likely treating marital status as a proxy variable for age, which both other models placed a large emphasis on when making predictions.",
    raceDescription:
      "Not all fields in the SHAP analysis show immediately obvious correlations. Take the boolean field isWhite, which is true if the respondent is white and false otherwise. In the SHAP visualization, the red dots are clustered around the center, while the blue dots are spread on either side of the line. This means if the respondent is white, their race doesn’t have a large effect on the model’s prediction. However, if the respondent is not white, then their race has a large effect which can either be positive or negative. To understand how this is possible, it’s important to note that when the model makes its decision, it considers all fields at once, not a single field at a time. Therefore, whether not being white has a positive or negative impact on predictions depends on the values of other fields provided to models.",
    conclusion:
      "This makes sense when we look at the effects of other race fields present in the SHAP visualization. The model sharply decreases its predicted salary for black, American Indian, or Pacific Islander respondents. On the other hand, the model increases its predicted salary for respondents who are Asian. From this, it seems that the model treats white people as a ‘baseline’ for predictions, with other races having their salaries increased or decreased from this base salary prediction. The majority of people in our dataset are white, which is likely why the model chose them as the baseline.",
  },
};
export const data = {
  mainModel: {
    income: 38658.67796,
    predictedIncome: 36884.59375,
    absoluteError: 12061.5026,
    relativeError: -1774.082554,
    rSquaredValue: 0.62,
    observations: [
      {
        title: "Sex Predicted Average Income",
        data: [
          {
            type: "Female",
            "predicted average income": 31956.978515625,
          },
          {
            type: "Male",
            "predicted average income": 41370.39453125,
          },
        ],
        axis: "US$",
      },
      {
        title: "Sex Mean Absolute Error",
        data: [
          {
            type: "Female",
            "mean absolute error": 10638.112048820996,
          },
          {
            type: "Male",
            "mean absolute error": 13357.270714298273,
          },
        ],
        axis: "US$",
      },
      {
        title: "Race Predicted Average Income",
        data: [
          {
            type: "American Indian",
            "predicted average income": 30613.8515625,
          },
          {
            type: "Non American Indian",
            "predicted average income": 37074.80859375,
          },
          {
            type: "Asian",
            "predicted average income": 45137.828125,
          },
          {
            type: "Non Asian",
            "predicted average income": 36177.3203125,
          },
          {
            type: "Black",
            "predicted average income": 29455.892578125,
          },
          {
            type: "Non Black",
            "predicted average income": 37649.00390625,
          },
          {
            type: "Pacific Islander",
            "predicted average income": 31756.580078125,
          },
          {
            type: "Non Pacific Islander",
            "predicted average income": 36906.55859375,
          },
          {
            type: "White",
            "predicted average income": 37881.61328125,
          },
          {
            type: "Non White",
            "predicted average income": 33499.79296875,
          },
        ],
        axis: "US$",
      },
      {
        title: "Marital Status Predicted Average Income",
        data: [
          {
            type: "Married",
            "predicted average income": 43823.41796875,
          },
          {
            type: "Not Married",
            "predicted average income": 28194.490234375,
          },
        ],
        axis: "US$",
      },
      {
        title: "Mixed Race Marriage Predicted Average Income",
        data: [
          {
            type: "Mixed Race Marriage",
            "predicted average income": 44918.88671875,
          },
          {
            type: "Non Mixed Race Marriage",
            "predicted average income": 36046.484375,
          },
        ],
        axis: "US$",
      },
    ],
  },
  noProtectedFieldsModel: {
    income: 38658.67796,
    predictedIncome: 36286.28125,
    absoluteError: 12545.848655,
    relativeError: -2372.397862,
    rSquaredValue: 0.6,
    observations: [
      {
        title: "Sex Predicted Average Income",
        data: [
          {
            type: "Female",
            "predicted average income": 33089.02734375,
          },
          {
            type: "Male",
            "predicted average income": 39196.86328125,
          },
        ],
        axis: "US$",
      },
      {
        title: "Sex Mean Absolute Error",
        data: [
          {
            type: "Female",
            "mean absolute error": 10993.900687510863,
          },
          {
            type: "Male",
            "mean absolute error": 13958.647615196638,
          },
        ],
        axis: "US$",
      },
      {
        title: "Race Predicted Average Income",
        data: [
          {
            type: "American Indian",
            "predicted average income": 31329.642578125,
          },
          {
            type: "Non American Indian",
            "predicted average income": 36436.6328125,
          },
          {
            type: "Asian",
            "predicted average income": 44214.27734375,
          },
          {
            type: "Non Asian",
            "predicted average income": 35606.87890625,
          },
          {
            type: "Black",
            "predicted average income": 30676.037109375,
          },
          {
            type: "Non Black",
            "predicted average income": 36863.56640625,
          },
          {
            type: "Pacific Islander",
            "predicted average income": 31856.337890625,
          },
          {
            type: "Non Pacific Islander",
            "predicted average income": 36305.25390625,
          },
          {
            type: "White",
            "predicted average income": 36991.16796875,
          },
          {
            type: "Non White",
            "predicted average income": 33893.26171875,
          },
        ],
        axis: "US$",
      },
      {
        title: "Marital Status Predicted Average Income",
        data: [
          {
            type: "Married",
            "predicted average income": 42048.4375,
          },
          {
            type: "Not Married",
            "predicted average income": 29069.814453125,
          },
        ],
        axis: "US$",
      },
      {
        title: "Mixed Race Marriage Predicted Average Income",
        data: [
          {
            type: "Mixed Race Marriage",
            "predicted average income": 43256.921875,
          },
          {
            type: "Non Mixed Race Marriage",
            "predicted average income": 35559.12109375,
          },
        ],
        axis: "US$",
      },
      {
        title: "Managers Distribution",
        data: [
          {
            type: "Female",
            percent: 40.40475870154331,
          },
          {
            type: "White",
            percent: 82.42393957448444,
          },
          {
            type: "Black",
            percent: 6.690242355518826,
          },
          {
            type: "Asian",
            percent: 8.500701504872095,
          },
          {
            type: "American Indian",
            percent: 2.548480713420845,
          },
          {
            type: "Pacific Islander",
            percent: 0.3055870538717303,
          },
          {
            type: "Other Race",
            percent: 8.900463185408698,
          },
        ],
        axis: "%",
      },
      {
        title: "Registered Nurses Distribution",
        data: [
          {
            type: "Female",
            percent: 88.4373211219233,
          },
          {
            type: "White",
            percent: 79.10131654264453,
          },
          {
            type: "Black",
            percent: 8.474527761877504,
          },
          {
            type: "Asian",
            percent: 10.892959358900973,
          },
          {
            type: "American Indian",
            percent: 2.1665712650257584,
          },
          {
            type: "Pacific Islander",
            percent: 0.32341156267887807,
          },
          {
            type: "Other Race",
            percent: 6.522610188895249,
          },
        ],
        axis: "%",
      },
      {
        title:
          "Chief Executives and Legislators/Public Administration Distribution",
        data: [
          {
            type: "Female",
            percent: 28.99722152058601,
          },
          {
            type: "White",
            percent: 88.10937105329628,
          },
          {
            type: "Black",
            percent: 3.681485223541298,
          },
          {
            type: "Asian",
            percent: 7.179843394796666,
          },
          {
            type: "American Indian",
            percent: 1.9386208638545087,
          },
          {
            type: "Pacific Islander",
            percent: 0.2020712301086133,
          },
          {
            type: "Other Race",
            percent: 6.188431422076282,
          },
        ],
        axis: "%",
      },
      {
        title: "Physicians and Surgeons Distribution",
        data: [
          {
            type: "Female",
            percent: 38.081338781864177,
          },
          {
            type: "White",
            percent: 73.07841992605565,
          },
          {
            type: "Black",
            percent: 4.6604397742751505,
          },
          {
            type: "Asian",
            percent: 22.397353570733605,
          },
          {
            type: "American Indian",
            percent: 1.118894726600506,
          },
          {
            type: "Pacific Islander",
            percent: 0.1945903872348706,
          },
          {
            type: "Other Race",
            percent: 6.64526172407083,
          },
        ],
        axis: "%",
      },
      {
        title: "Sales Representatives Distribution",
        data: [
          {
            type: "Female",
            percent: 29.213483146067415,
          },
          {
            type: "White",
            percent: 87.6174013252665,
          },
          {
            type: "Black",
            percent: 4.471333909536157,
          },
          {
            type: "Asian",
            percent: 5.2146355517142036,
          },
          {
            type: "American Indian",
            percent: 7.977528089887642,
          },
          {
            type: "Pacific Islander",
            percent: 0.28233938346297898,
          },
          {
            type: "Other Race",
            percent: 8.936905790838374,
          },
        ],
        axis: "%",
      },
      {
        title: "Business Degree Distribution",
        data: [
          {
            type: "Female",
            percent: 45.118657556746505,
          },
          {
            type: "White",
            percent: 79.92007653687571,
          },
          {
            type: "Black",
            percent: 7.98133990331293,
          },
          {
            type: "Asian",
            percent: 10.362110859939211,
          },
          {
            type: "American Indian",
            percent: 1.7440925215683287,
          },
          {
            type: "Pacific Islander",
            percent: 0.32849897979053957,
          },
          {
            type: "Other Race",
            percent: 8.289519358580343,
          },
        ],
        axis: "%",
      },
      {
        title: "Engineering Degree Distribution",
        data: [
          {
            type: "Female",
            percent: 17.458750528839373,
          },
          {
            type: "White",
            percent: 70.15331305276306,
          },
          {
            type: "Black",
            percent: 4.2105687289723394,
          },
          {
            type: "Asian",
            percent: 24.18357273807845,
          },
          {
            type: "American Indian",
            percent: 1.5008965086528195,
          },
          {
            type: "Pacific Islander",
            percent: 0.22765275903056186,
          },
          {
            type: "Other Race",
            percent: 8.973145032939138,
          },
        ],
        axis: "%",
      },
    ],
  },
  protectedFieldsOnlyModel: {
    income: 38658.67796,
    predictedIncome: 34163.097656,
    absoluteError: 22348.26235,
    relativeError: -4495.577944,
    rSquaredValue: 0.1,
    observations: [
      {
        title: "Sex Predicted Average Income",
        data: [
          {
            type: "Female",
            "predicted average income": 28263.486328125,
          },
          {
            type: "Male",
            "predicted average income": 39533.75390625,
          },
        ],
        axis: "US$",
      },
      {
        title: "Sex Mean Absolute Error",
        data: [
          {
            type: "Female",
            "mean absolute error": 20671.092601533383,
          },
          {
            type: "Male",
            "mean absolute error": 23875.055598530264,
          },
        ],
        axis: "US$",
      },
      {
        title: "Race Predicted Average Income",
        data: [
          {
            type: "American Indian",
            "predicted average income": 27801.771484375,
          },
          {
            type: "Non American Indian",
            "predicted average income": 34356.0546875,
          },
          {
            type: "Asian",
            "predicted average income": 41340.12890625,
          },
          {
            type: "Non Asian",
            "predicted average income": 33548.05078125,
          },
          {
            type: "Black",
            "predicted average income": 26976.54296875,
          },
          {
            type: "Non Black",
            "predicted average income": 34902.5859375,
          },
          {
            type: "Pacific Islander",
            "predicted average income": 29004.037109375,
          },
          {
            type: "Non Pacific Islander",
            "predicted average income": 34185.203125,
          },
          {
            type: "White",
            "predicted average income": 35098.1328125,
          },
          {
            type: "Non White",
            "predicted average income": 30988.73828125,
          },
        ],
        axis: "US$",
      },
      {
        title: "Marital Status Predicted Average Income",
        data: [
          {
            type: "Married",
            "predicted average income": 41682.91796875,
          },
          {
            type: "Not Married",
            "predicted average income": 24745.3671875,
          },
        ],
        axis: "US$",
      },
      {
        title: "Mixed Race Marriage Predicted Average Income",
        data: [
          {
            type: "Mixed Race Marriage",
            "predicted average income": 42454.328125,
          },
          {
            type: "Non Mixed Race Marriage",
            "predicted average income": 33298.1875,
          },
        ],
        axis: "US$",
      },
    ],
  },
};
