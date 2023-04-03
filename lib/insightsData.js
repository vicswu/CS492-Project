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

export const data = {
  sex: {
    dataset: [
      {
        type: "Full Dataset",
        male: 758888,
        female: 689933,
      },
      {
        type: "Test Dataset",
        male: 113762,
        female: 103562,
      },
      {
        type: "Training Dataset",
        male: 645126,
        female: 586371,
      },
    ],
    salary: {
      under25k: [
        {
          id: "female",
          label: "Female",
          value: 261056,
          color: "hsl(100, 70%, 50%)",
        },
        {
          id: "male",
          label: "Male",
          value: 314634,
          color: "#7871aa",
        },
      ],
      "25To50k": [
        {
          id: "female",
          label: "Female",
          value: 208988,
          color: "hsl(100, 70%, 50%)",
        },
        {
          id: "male",
          label: "Male",
          value: 219651,
          color: "hsl(175, 70%, 50%)",
        },
      ],
      "50To75k": [
        {
          id: "female",
          label: "Female",
          value: 91910,
          color: "hsl(100, 70%, 50%)",
        },
        {
          id: "male",
          label: "Male",
          value: 123883,
          color: "hsl(175, 70%, 50%)",
        },
      ],
      over75k: [
        {
          id: "female",
          label: "Female",
          value: 74401,
          color: "hsl(100, 70%, 50%)",
        },
        {
          id: "male",
          label: "Male",
          value: 154298,
          color: "hsl(175, 70%, 50%)",
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Female",
              y: 261056,
            },
            {
              x: "Male",
              y: 314634,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Female",
              y: 208988,
            },
            {
              x: "Male",
              y: 219651,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Female",
              y: 91910,
            },
            {
              x: "Male",
              y: 123883,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Female",
              y: 74401,
            },
            {
              x: "Male",
              y: 154298,
            },
          ],
        },
      ],
    },
  },
  race: {
    dataset: [
      {
        type: "Full Dataset",
        "American Indian": 42172,
        Asian: 114530,
        Black: 136251,
        "Pacific Islander": 6072,
        White: 330077,
        "Other Race": 190660,
      },
      {
        type: "Test Dataset",
        "American Indian": 6398,
        Asian: 17154,
        Black: 20276,
        "Pacific Islander": 927,
        White: 49449,
        "Other Race": 28510,
      },
      {
        type: "Training Dataset",
        "American Indian": 35774,
        Asian: 97376,
        Black: 115975,
        "Pacific Islander": 5145,
        White: 280628,
        "Other Race": 162150,
      },
    ],
    salary: {
      under25k: [
        {
          id: "American Indian",
          label: "American Indian",
          value: 19837,
        },
        {
          id: "Asian",
          label: "Asian",
          value: 40676,
        },
        {
          id: "Black",
          label: "Black",
          value: 65353,
        },
        {
          id: "Pacific Islander",
          label: "Pacific Islander",
          value: 2679,
        },
        {
          id: "White",
          label: "White",
          value: 149924,
        },
        {
          id: "Other Race",
          label: "Other Race",
          value: 95530,
        },
      ],
      "25To50k": [
        {
          id: "American Indian",
          label: "American Indian",
          value: 13246,
        },
        {
          id: "Asian",
          label: "Asian",
          value: 26492,
        },
        {
          id: "Black",
          label: "Black",
          value: 42469,
        },
        {
          id: "Pacific Islander",
          label: "Pacific Islander",
          value: 1910,
        },
        {
          id: "White",
          label: "White",
          value: 95268,
        },
        {
          id: "Other Race",
          label: "Other Race",
          value: 57936,
        },
      ],
      "50To75k": [
        {
          id: "American Indian",
          label: "American Indian",
          value: 5217,
        },
        {
          id: "Asian",
          label: "Asian",
          value: 17541,
        },
        {
          id: "Black",
          label: "Black",
          value: 16482,
        },
        {
          id: "Pacific Islander",
          label: "Pacific Islander",
          value: 808,
        },
        {
          id: "White",
          label: "White",
          value: 40640,
        },
        {
          id: "Other Race",
          label: "Other Race",
          value: 20762,
        },
      ],
      over75k: [
        {
          id: "American Indian",
          label: "American Indian",
          value: 3872,
        },
        {
          id: "Asian",
          label: "Asian",
          value: 29821,
        },
        {
          id: "Black",
          label: "Black",
          value: 11947,
        },
        {
          id: "Pacific Islander",
          label: "Pacific Islander",
          value: 675,
        },
        {
          id: "White",
          label: "White",
          value: 44245,
        },
        {
          id: "Other Race",
          label: "Other Race",
          value: 16432,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "American Indian",
              y: 19837,
            },
            {
              x: "Asian",
              y: 40676,
            },
            {
              x: "Black",
              y: 65353,
            },
            {
              x: "Pacific Islander",
              y: 2679,
            },
            {
              x: "White",
              y: 149924,
            },
            {
              x: "Other Race",
              y: 95530,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "American Indian",
              y: 13246,
            },
            {
              x: "Asian",
              y: 26492,
            },
            {
              x: "Black",
              y: 42469,
            },
            {
              x: "Pacific Islander",
              y: 1910,
            },
            {
              x: "White",
              y: 95268,
            },
            {
              x: "Other Race",
              y: 57936,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "American Indian",
              y: 5217,
            },
            {
              x: "Asian",
              y: 17541,
            },
            {
              x: "Black",
              y: 16482,
            },
            {
              x: "Pacific Islander",
              y: 808,
            },
            {
              x: "White",
              y: 40640,
            },
            {
              x: "Other Race",
              y: 20762,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "American Indian",
              y: 3872,
            },
            {
              x: "Asian",
              y: 29821,
            },
            {
              x: "Black",
              y: 11947,
            },
            {
              x: "Pacific Islander",
              y: 675,
            },
            {
              x: "White",
              y: 44245,
            },
            {
              x: "Other Race",
              y: 16432,
            },
          ],
        },
      ],
    },
  },
  education: {
    dataset: [
      {
        type: "Full Dataset",
        "Up to Grade 4": 3839,
        "Up to Grade 8": 17453,
        "High School (No Diploma)": 73655,
        "High School Diploma": 333243,
        "College (No Diploma)": 289605,
        "Associate's Degree": 134557,
        "Bachelor's Degree": 348523,
        "Bachelor's + Professional Degree": 39951,
        "Master's Degree": 161376,
        "Doctoral Degree": 29033,
        "2 Degrees": 66907,
      },
      {
        type: "Test Dataset",
        "Up to Grade 4": 579,
        "Up to Grade 8": 2585,
        "High School (No Diploma)": 11071,
        "High School Diploma": 50229,
        "College (No Diploma)": 43530,
        "Associate's Degree": 20039,
        "Bachelor's Degree": 52249,
        "Bachelor's + Professional Degree": 5987,
        "Master's Degree": 24034,
        "Doctoral Degree": 4414,
        "2 Degrees": 10022,
      },
      {
        type: "Training Dataset",
        "Up to Grade 4": 3260,
        "Up to Grade 8": 14868,
        "High School (No Diploma)": 62584,
        "High School Diploma": 283014,
        "College (No Diploma)": 246075,
        "Associate's Degree": 114518,
        "Bachelor's Degree": 296274,
        "Bachelor's + Professional Degree": 33964,
        "Master's Degree": 137342,
        "Doctoral Degree": 24619,
        "2 Degrees": 56885,
      },
    ],
    salary: {
      under25k: [
        {
          id: "Up to Grade 4",
          label: "Up to Grade 4",
          value: 2554,
        },
        {
          id: "Up to Grade 8",
          label: "Up to Grade 8",
          value: 11345,
        },
        {
          id: "High School (No Diploma)",
          label: "High School (No Diploma)",
          value: 52703,
        },
        {
          id: "High School Diploma",
          label: "High School Diploma",
          value: 176160,
        },
        {
          id: "College (No Diploma)",
          label: "College (No Diploma)",
          value: 140823,
        },
        {
          id: "Associate's Degree",
          label: "Associate's Degree",
          value: 50541,
        },
        {
          id: "Bachelor's Degree",
          label: "Bachelor's Degree",
          value: 90330,
        },
        {
          id: "Bachelor's + Professional Degree",
          label: "Bachelor's + Professional Degree",
          value: 7236,
        },
        {
          id: "Master's Degree",
          label: "Master's Degree",
          value: 28919,
        },
        {
          id: "Doctoral Degree",
          label: "Doctoral Degree",
          value: 4314,
        },
        {
          id: "2 Degrees",
          label: "2 Degrees",
          value: 14919,
        },
      ],
      "25To50k": [
        {
          id: "Up to Grade 4",
          label: "Up to Grade 4",
          value: 1017,
        },
        {
          id: "Up to Grade 8",
          label: "Up to Grade 8",
          value: 4832,
        },
        {
          id: "High School (No Diploma)",
          label: "High School (No Diploma)",
          value: 15621,
        },
        {
          id: "High School Diploma",
          label: "High School Diploma",
          value: 109540,
        },
        {
          id: "College (No Diploma)",
          label: "College (No Diploma)",
          value: 90948,
        },
        {
          id: "Associate's Degree",
          label: "Associate's Degree",
          value: 49439,
        },
        {
          id: "Bachelor's Degree",
          label: "Bachelor's Degree",
          value: 102552,
        },
        {
          id: "Bachelor's + Professional Degree",
          label: "Bachelor's + Professional Degree",
          value: 5670,
        },
        {
          id: "Master's Degree",
          label: "Master's Degree",
          value: 39518,
        },
        {
          id: "Doctoral Degree",
          label: "Doctoral Degree",
          value: 4511,
        },
        {
          id: "2 Degrees",
          label: "2 Degrees",
          value: 17123,
        },
      ],
      "50To75k": [
        {
          id: "Up to Grade 4",
          label: "Up to Grade 4",
          value: 170,
        },
        {
          id: "Up to Grade 8",
          label: "Up to Grade 8",
          value: 871,
        },
        {
          id: "High School (No Diploma)",
          label: "High School (No Diploma)",
          value: 3530,
        },
        {
          id: "High School Diploma",
          label: "High School Diploma",
          value: 32349,
        },
        {
          id: "College (No Diploma)",
          label: "College (No Diploma)",
          value: 35216,
        },
        {
          id: "Associate's Degree",
          label: "Associate's Degree",
          value: 22415,
        },
        {
          id: "Bachelor's Degree",
          label: "Bachelor's Degree",
          value: 70119,
        },
        {
          id: "Bachelor's + Professional Degree",
          label: "Bachelor's + Professional Degree",
          value: 6350,
        },
        {
          id: "Master's Degree",
          label: "Master's Degree",
          value: 37614,
        },
        {
          id: "Doctoral Degree",
          label: "Doctoral Degree",
          value: 6055,
        },
        {
          id: "2 Degrees",
          label: "2 Degrees",
          value: 14003,
        },
      ],
      over75k: [
        {
          id: "Up to Grade 4",
          label: "Up to Grade 4",
          value: 98,
        },
        {
          id: "Up to Grade 8",
          label: "Up to Grade 8",
          value: 405,
        },
        {
          id: "High School (No Diploma)",
          label: "High School (No Diploma)",
          value: 1801,
        },
        {
          id: "High School Diploma",
          label: "High School Diploma",
          value: 15194,
        },
        {
          id: "College (No Diploma)",
          label: "College (No Diploma)",
          value: 22618,
        },
        {
          id: "Associate's Degree",
          label: "Associate's Degree",
          value: 12162,
        },
        {
          id: "Bachelor's Degree",
          label: "Bachelor's Degree",
          value: 85522,
        },
        {
          id: "Bachelor's + Professional Degree",
          label: "Bachelor's + Professional Degree",
          value: 20695,
        },
        {
          id: "Master's Degree",
          label: "Master's Degree",
          value: 55325,
        },
        {
          id: "Doctoral Degree",
          label: "Doctoral Degree",
          value: 14153,
        },
        {
          id: "2 Degrees",
          label: "2 Degrees",
          value: 20862,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Up to Grade 4",
              y: 2554,
            },
            {
              x: "Up to Grade 8",
              y: 11345,
            },
            {
              x: "High School (No Diploma)",
              y: 52703,
            },
            {
              x: "High School Diploma",
              y: 176160,
            },
            {
              x: "College (No Diploma)",
              y: 140823,
            },
            {
              x: "Associate's Degree",
              y: 50541,
            },
            {
              x: "Bachelor's Degree",
              y: 90330,
            },
            {
              x: "Bachelor's + Professional Degree",
              y: 7236,
            },
            {
              x: "Master's Degree",
              y: 28919,
            },
            {
              x: "Doctoral Degree",
              y: 4314,
            },
            {
              x: "2 Degrees",
              y: 14919,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Up to Grade 4",
              y: 1017,
            },
            {
              x: "Up to Grade 8",
              y: 4832,
            },
            {
              x: "High School (No Diploma)",
              y: 15621,
            },
            {
              x: "High School Diploma",
              y: 109540,
            },
            {
              x: "College (No Diploma)",
              y: 90948,
            },
            {
              x: "Associate's Degree",
              y: 49439,
            },
            {
              x: "Bachelor's Degree",
              y: 102552,
            },
            {
              x: "Bachelor's + Professional Degree",
              y: 5670,
            },
            {
              x: "Master's Degree",
              y: 39518,
            },
            {
              x: "Doctoral Degree",
              y: 4511,
            },
            {
              x: "2 Degrees",
              y: 17123,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Up to Grade 4",
              y: 170,
            },
            {
              x: "Up to Grade 8",
              y: 871,
            },
            {
              x: "High School (No Diploma)",
              y: 3530,
            },
            {
              x: "High School Diploma",
              y: 32349,
            },
            {
              x: "College (No Diploma)",
              y: 35216,
            },
            {
              x: "Associate's Degree",
              y: 22415,
            },
            {
              x: "Bachelor's Degree",
              y: 70119,
            },
            {
              x: "Bachelor's + Professional Degree",
              y: 6350,
            },
            {
              x: "Master's Degree",
              y: 37614,
            },
            {
              x: "Doctoral Degree",
              y: 6055,
            },
            {
              x: "2 Degrees",
              y: 14003,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Up to Grade 4",
              y: 98,
            },
            {
              x: "Up to Grade 8",
              y: 405,
            },
            {
              x: "High School (No Diploma)",
              y: 1801,
            },
            {
              x: "High School Diploma",
              y: 15194,
            },
            {
              x: "College (No Diploma)",
              y: 22618,
            },
            {
              x: "Associate's Degree",
              y: 12162,
            },
            {
              x: "Bachelor's Degree",
              y: 85522,
            },
            {
              x: "Bachelor's + Professional Degree",
              y: 20695,
            },
            {
              x: "Master's Degree",
              y: 55325,
            },
            {
              x: "Doctoral Degree",
              y: 14153,
            },
            {
              x: "2 Degrees",
              y: 20862,
            },
          ],
        },
      ],
    },
  },
  jobType: {
    dataset: [
      {
        type: "Full Dataset",
        "Self-Employed": 150721,
        "Private Sector": 389209,
        "Public Sector": 235633,
        "Unpaid Family Worker": 2855,
      },
      {
        type: "Test Dataset",
        "Self-Employed": 22815,
        "Private Sector": 58271,
        "Public Sector": 35010,
        "Unpaid Family Worker": 446,
      },
      {
        type: "Training Dataset",
        "Self-Employed": 127906,
        "Private Sector": 330938,
        "Public Sector": 200623,
        "Unpaid Family Worker": 2409,
      },
    ],
    salary: {
      under25k: [
        {
          id: "Self-Employed",
          label: "Self-Employed",
          value: 106041,
        },
        {
          id: "Private Sector",
          label: "Private Sector",
          value: 171670,
        },
        {
          id: "Public Sector",
          label: "Public Sector",
          value: 63408,
        },
        {
          id: "Unpaid Family Worker",
          label: "Unpaid Family Worker",
          value: 2221,
        },
      ],
      "25To50k": [
        {
          id: "Self-Employed",
          label: "Self-Employed",
          value: 18425,
        },
        {
          id: "Private Sector",
          label: "Private Sector",
          value: 104966,
        },
        {
          id: "Public Sector",
          label: "Public Sector",
          value: 86182,
        },
        {
          id: "Unpaid Family Worker",
          label: "Unpaid Family Worker",
          value: 359,
        },
      ],
      "50To75k": [
        {
          id: "Self-Employed",
          label: "Self-Employed",
          value: 9126,
        },
        {
          id: "Private Sector",
          label: "Private Sector",
          value: 60108,
        },
        {
          id: "Public Sector",
          label: "Public Sector",
          value: 50850,
        },
        {
          id: "Unpaid Family Worker",
          label: "Unpaid Family Worker",
          value: 132,
        },
      ],
      over75k: [
        {
          id: "Self-Employed",
          label: "Self-Employed",
          value: 17129,
        },
        {
          id: "Private Sector",
          label: "Private Sector",
          value: 52465,
        },
        {
          id: "Public Sector",
          label: "Public Sector",
          value: 35193,
        },
        {
          id: "Unpaid Family Worker",
          label: "Unpaid Family Worker",
          value: 143,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Self-Employed",
              y: 106041,
            },
            {
              x: "Private Sector",
              y: 171670,
            },
            {
              x: "Public Sector",
              y: 63408,
            },
            {
              x: "Unpaid Family Worker",
              y: 2221,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Self-Employed",
              y: 18425,
            },
            {
              x: "Private Sector",
              y: 104966,
            },
            {
              x: "Public Sector",
              y: 86182,
            },
            {
              x: "Unpaid Family Worker",
              y: 359,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Self-Employed",
              y: 9126,
            },
            {
              x: "Private Sector",
              y: 60108,
            },
            {
              x: "Public Sector",
              y: 50850,
            },
            {
              x: "Unpaid Family Worker",
              y: 132,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Self-Employed",
              y: 17129,
            },
            {
              x: "Private Sector",
              y: 52465,
            },
            {
              x: "Public Sector",
              y: 35193,
            },
            {
              x: "Unpaid Family Worker",
              y: 143,
            },
          ],
        },
      ],
    },
  },
  maritalStatus: {
    dataset: [
      {
        type: "Full Dataset",
        Married: 644856,
        "Was Married": 198273,
        "Never Married": 446583,
      },
      {
        type: "Test Dataset",
        Married: 96486,
        "Was Married": 29828,
        "Never Married": 66658,
      },
      {
        type: "Training Dataset",
        Married: 548370,
        "Was Married": 168445,
        "Never Married": 379925,
      },
    ],
    salary: {
      under25k: [
        {
          id: "Married",
          label: "Married",
          value: 243439,
        },
        {
          id: "Was Married",
          label: "Was Married",
          value: 80020,
        },
        {
          id: "Never Married",
          label: "Never Married",
          value: 252231,
        },
      ],
      "25To50k": [
        {
          id: "Married",
          label: "Married",
          value: 185555,
        },
        {
          id: "Was Married",
          label: "Was Married",
          value: 64879,
        },
        {
          id: "Never Married",
          label: "Never Married",
          value: 120676,
        },
      ],
      "50To75k": [
        {
          id: "Married",
          label: "Married",
          value: 72651,
        },
        {
          id: "Was Married",
          label: "Was Married",
          value: 28873,
        },
        {
          id: "Never Married",
          label: "Never Married",
          value: 43778,
        },
      ],
      over75k: [
        {
          id: "Married",
          label: "Married",
          value: 54399,
        },
        {
          id: "Was Married",
          label: "Was Married",
          value: 24501,
        },
        {
          id: "Never Married",
          label: "Never Married",
          value: 29898,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Married",
              y: 243439,
            },
            {
              x: "Was Married",
              y: 80020,
            },
            {
              x: "Never Married",
              y: 252231,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Married",
              y: 185555,
            },
            {
              x: "Was Married",
              y: 64879,
            },
            {
              x: "Never Married",
              y: 120676,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Married",
              y: 72651,
            },
            {
              x: "Was Married",
              y: 28873,
            },
            {
              x: "Never Married",
              y: 43778,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Married",
              y: 54399,
            },
            {
              x: "Was Married",
              y: 24501,
            },
            {
              x: "Never Married",
              y: 29898,
            },
          ],
        },
      ],
    },
  },
  insurance: {
    dataset: [
      {
        type: "Full Dataset",
        "Health Insurance": 118079,
        "Private Health Insurance": 259322,
        "Public Health Insurance": 245927,
      },
      {
        type: "Test Dataset",
        "Health Insurance": 17688,
        "Private Health Insurance": 38958,
        "Public Health Insurance": 37087,
      },
      {
        type: "Training Dataset",
        "Health Insurance": 100391,
        "Private Health Insurance": 220364,
        "Public Health Insurance": 208840,
      },
    ],
    salary: {
      under25k: [
        {
          id: "Health Insurance",
          label: "Health Insurance",
          value: 78473,
        },
        {
          id: "Private Health Insurance",
          label: "Private Health Insurance",
          value: 184239,
        },
        {
          id: "Public Health Insurance",
          label: "Public Health Insurance",
          value: 157938,
        },
      ],
      "25To50k": [
        {
          id: "Health Insurance",
          label: "Health Insurance",
          value: 29649,
        },
        {
          id: "Private Health Insurance",
          label: "Private Health Insurance",
          value: 53730,
        },
        {
          id: "Public Health Insurance",
          label: "Public Health Insurance",
          value: 50088,
        },
      ],
      "50To75k": [
        {
          id: "Health Insurance",
          label: "Health Insurance",
          value: 6216,
        },
        {
          id: "Private Health Insurance",
          label: "Private Health Insurance",
          value: 12369,
        },
        {
          id: "Public Health Insurance",
          label: "Public Health Insurance",
          value: 18756,
        },
      ],
      over75k: [
        {
          id: "Health Insurance",
          label: "Health Insurance",
          value: 3741,
        },
        {
          id: "Private Health Insurance",
          label: "Private Health Insurance",
          value: 8984,
        },
        {
          id: "Public Health Insurance",
          label: "Public Health Insurance",
          value: 19145,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Health Insurance",
              y: 78473,
            },
            {
              x: "Private Health Insurance",
              y: 184239,
            },
            {
              x: "Public Health Insurance",
              y: 157938,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Health Insurance",
              y: 29649,
            },
            {
              x: "Private Health Insurance",
              y: 53730,
            },
            {
              x: "Public Health Insurance",
              y: 50088,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Health Insurance",
              y: 6216,
            },
            {
              x: "Private Health Insurance",
              y: 12369,
            },
            {
              x: "Public Health Insurance",
              y: 18756,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Health Insurance",
              y: 3741,
            },
            {
              x: "Private Health Insurance",
              y: 8984,
            },
            {
              x: "Public Health Insurance",
              y: 19145,
            },
          ],
        },
      ],
    },
  },
  englishSkills: {
    dataset: [
      {
        type: "Full Dataset",
        "Speaks English": 12077,
        "Speaks Only English": 293681,
        "Speaks English Well": 45890,
      },
      {
        type: "Test Dataset",
        "Speaks English": 1782,
        "Speaks Only English": 44110,
        "Speaks English Well": 6904,
      },
      {
        type: "Training Dataset",
        "Speaks English": 10295,
        "Speaks Only English": 249571,
        "Speaks English Well": 38986,
      },
    ],
    salary: {
      under25k: [
        {
          id: "Speaks English",
          label: "Speaks English",
          value: 8624,
        },
        {
          id: "Speaks Only English",
          label: "Speaks Only English",
          value: 133436,
        },
        {
          id: "Speaks English Well",
          label: "Speaks English Well",
          value: 29666,
        },
      ],
      "25To50k": [
        {
          id: "Speaks English",
          label: "Speaks English",
          value: 2757,
        },
        {
          id: "Speaks Only English",
          label: "Speaks Only English",
          value: 81931,
        },
        {
          id: "Speaks English Well",
          label: "Speaks English Well",
          value: 12166,
        },
      ],
      "50To75k": [
        {
          id: "Speaks English",
          label: "Speaks English",
          value: 439,
        },
        {
          id: "Speaks Only English",
          label: "Speaks Only English",
          value: 35625,
        },
        {
          id: "Speaks English Well",
          label: "Speaks English Well",
          value: 2470,
        },
      ],
      over75k: [
        {
          id: "Speaks English",
          label: "Speaks English",
          value: 257,
        },
        {
          id: "Speaks Only English",
          label: "Speaks Only English",
          value: 42689,
        },
        {
          id: "Speaks English Well",
          label: "Speaks English Well",
          value: 1588,
        },
      ],
      radial: [
        {
          id: "Under US$25,000",
          data: [
            {
              x: "Speaks English",
              y: 8624,
            },
            {
              x: "Speaks Only English",
              y: 133436,
            },
            {
              x: "Speaks English Well",
              y: 29666,
            },
          ],
        },
        {
          id: "US$25,000 to US$50,000",
          data: [
            {
              x: "Speaks English",
              y: 2757,
            },
            {
              x: "Speaks Only English",
              y: 81931,
            },
            {
              x: "Speaks English Well",
              y: 12166,
            },
          ],
        },
        {
          id: "US$50,000 to US$75,000",
          data: [
            {
              x: "Speaks English",
              y: 439,
            },
            {
              x: "Speaks Only English",
              y: 35625,
            },
            {
              x: "Speaks English Well",
              y: 2470,
            },
          ],
        },
        {
          id: "Over US$75,000",
          data: [
            {
              x: "Speaks English",
              y: 257,
            },
            {
              x: "Speaks Only English",
              y: 42689,
            },
            {
              x: "Speaks English Well",
              y: 1588,
            },
          ],
        },
      ],
    },
  },
};
