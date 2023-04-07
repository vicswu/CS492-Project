import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function FormInputAutoComplete({ name, control, label }) {
  const options = {
    workLocation: [
      { label: "Outside the US", value: "worksOutsideUS" },
      { label: "Alabama", value: "worksIn_Alabama" },
      { label: "Alaska", value: "worksIn_Alaska" },
      { label: "Arizona", value: "worksIn_Arizona" },
      { label: "Arkansas", value: "worksIn_Arkansas" },
      { label: "California", value: "worksIn_California" },
      { label: "Colorado", value: "worksIn_Colorado" },
      { label: "Connecticut", value: "worksIn_Connecticut" },
      { label: "Delaware", value: "worksIn_Delaware" },
      {
        label: "District of Columbia",
        value: "worksIn_District_of_Columbia",
      },
      { label: "Florida", value: "worksIn_Florida" },
      { label: "Georgia", value: "worksIn_Georgia" },
      { label: "Hawaii", value: "worksIn_Hawaii" },
      { label: "Idaho", value: "worksIn_Idaho" },
      { label: "Illinois", value: "worksIn_Illinois" },
      { label: "Indiana", value: "worksIn_Indiana" },
      { label: "Iowa", value: "worksIn_Iowa" },
      { label: "Kansas", value: "worksIn_Kansas" },
      { label: "Kentucky", value: "worksIn_Kentucky" },
      { label: "Louisiana", value: "worksIn_Louisiana" },
      { label: "Maine", value: "worksIn_Maine" },
      { label: "Maryland", value: "worksIn_Maryland" },
      { label: "Massachusetts", value: "worksIn_Massachusetts" },
      { label: "Michigan", value: "worksIn_Michigan" },
      { label: "Minnesota", value: "worksIn_Minnesota" },
      { label: "Mississippi", value: "worksIn_Mississippi" },
      { label: "Missouri", value: "worksIn_Missouri" },
      { label: "Montana", value: "worksIn_Montana" },
      { label: "Nebraska", value: "worksIn_Nebraska" },
      { label: "Nevada", value: "worksIn_Nevada" },
      { label: "New Hampshire", value: "worksIn_New_Hampshire" },
      { label: "New Jersey", value: "worksIn_New_Jersey" },
      { label: "New Mexico", value: "worksIn_New_Mexico" },
      { label: "New York", value: "worksIn_New_York" },
      { label: "North Carolina", value: "worksIn_North_Carolina" },
      { label: "North Dakota", value: "worksIn_North_Dakota" },
      { label: "Ohio", value: "worksIn_Ohio" },
      { label: "Oklahoma", value: "worksIn_Oklahoma" },
      { label: "Oregon", value: "worksIn_Oregon" },
      { label: "Pennsylvania", value: "worksIn_Pennsylvania" },
      { label: "Rhode Island", value: "worksIn_Rhode_Island" },
      { label: "South Carolina", value: "worksIn_South_Carolina" },
      { label: "South Dakota", value: "worksIn_South_Dakota" },
      { label: "Tennessee", value: "worksIn_Tennessee" },
      { label: "Texas", value: "worksIn_Texas" },
      { label: "Utah", value: "worksIn_Utah" },
      { label: "Vermont", value: "worksIn_Vermont" },
      { label: "Virginia", value: "worksIn_Virginia" },
      { label: "Washington", value: "worksIn_Washington" },
      { label: "West Virginia", value: "worksIn_West_Virginia" },
      { label: "Wisconsin", value: "worksIn_Wisconsin" },
      { label: "Wyoming", value: "worksIn_Wyoming" },
      { label: "Puerto Rico", value: "worksIn_Puerto_Rico" },
    ],
    degree: [
      { label: "No Degree", value: null },
      { label: "Agriculture", value: "hasDegree_Agriculture" },
      {
        label: "Environment and Natural Resources",
        value: "hasDegree_Environment_and_Natural_Resources",
      },
      { label: "Architecture", value: "hasDegree_Architecture" },
      {
        label: "Area, Ethnic and Civilization Studies",
        value: "hasDegree_Area_Ethnic_and_Civilization_Studies",
      },
      { label: "Communications", value: "hasDegree_Communications" },
      {
        label: "Communication Technologies",
        value: "hasDegree_Communication_Technologies",
      },
      {
        label: "Computer and Information Sciences",
        value: "hasDegree_Computer_and_Information_Sciences",
      },
      {
        label: "Cosmetology Services and Culinary Arts",
        value: "hasDegree_Cosmetology_Services_and_Culinary_Arts",
      },
      {
        label: "Education Administration and Teaching",
        value: "hasDegree_Education_Administration_and_Teaching",
      },
      { label: "Engineering", value: "hasDegree_Engineering" },
      {
        label: "Engineering Technologies",
        value: "hasDegree_Engineering_Technologies",
      },
      {
        label: "Linguistics and Foreign Languages",
        value: "hasDegree_Linguistics_and_Foreign_Languages",
      },
      {
        label: "Family and Consumer Sciences",
        value: "hasDegree_Family_and_Consumer_Sciences",
      },
      { label: "Law", value: "hasDegree_Law" },
      {
        label: "English Language, Literature and Composition",
        value: "hasDegree_English_Language_Literature_and_Composition",
      },
      {
        label: "Liberal Arts and Humanities",
        value: "hasDegree_Liberal_Arts_and_Humanities",
      },
      { label: "Library Science", value: "hasDegree_Library_Science" },
      {
        label: "Biology and Life_Sciences",
        value: "hasDegree_Biology_and_Life_Sciences",
      },
      {
        label: "Mathematics and Statistics",
        value: "hasDegree_Mathematics_and_Statistics",
      },
      {
        label: "Military Technologies",
        value: "hasDegree_Military_Technologies",
      },
      {
        label: "Interdisciplinary and Multi-Disciplinary Studies (General)",
        value:
          "hasDegree_Interdisciplinary_and_Multi-Disciplinary_Studies_(General)",
      },
      {
        label: "Physical Fitness, Parks, Recreation and Leisure",
        value: "hasDegree_Physical_Fitness_Parks_Recreation_and_Leisure",
      },
      {
        label: "Philosophy and Religious Studies",
        value: "hasDegree_Philosophy_and_Religious_Studies",
      },
      {
        label: "Theology and Religious Vocations",
        value: "hasDegree_Theology_and_Religious_Vocations",
      },
      { label: "Physical Sciences", value: "hasDegree_Physical_Sciences" },
      {
        label: "Nuclear, Industrial, Radiology and Biological Technologies",
        value:
          "hasDegree_Nuclear_Industrial_Radiology_and_Biological_Technologies",
      },
      { label: "Psychology", value: "hasDegree_Psychology" },
      {
        label: "Criminal Justice and Fire Protection",
        value: "hasDegree_Criminal_Justice_and_Fire_Protection",
      },
      {
        label: "Public Affairs Policy and Social Work",
        value: "hasDegree_Public_Affairs_Policy_and_Social_Work",
      },
      { label: "Social Sciences", value: "hasDegree_Social_Sciences" },
      {
        label: "Construction Services",
        value: "hasDegree_Construction_Services",
      },
      {
        label: "Electrical and Mechanic Repairs and Technologies",
        value: "hasDegree_Electrical_and_Mechanic_Repairs_and_Technologies",
      },
      {
        label: "Transportation Sciences and Technologies",
        value: "hasDegree_Transportation_Sciences_and_Technologies",
      },
      { label: "Fine Arts", value: "hasDegree_Fine_Arts" },
      {
        label: "Medical and Health Sciences",
        value: "hasDegree_Medical_and_Health_Sciences_and_Services",
      },
      { label: "Business", value: "hasDegree_Business" },
      { label: "History", value: "hasDegree_History" },
    ],
    occupation: [
      {
        label:
          "Unemployed with No Work Experience in the Last 5 Years or Earlier or Never Worked",
        value:
          "occupation_Unemployed_with_No_Work_Experience_in_the_Last_5_Years_or_Earlier_or_Never_Worked",
      },
      {
        label: "Chief executives and legislators/public administration",
        value:
          "occupation_Chief_executives_and_legislators/public_administration",
      },
      {
        label: "General and Operations Managers",
        value: "occupation_General_and_Operations_Managers",
      },
      {
        label: "Managers in Marketing Advertising and Public Relations",
        value:
          "occupation_Managers_in_Marketing_Advertising_and_Public_Relations",
      },
      {
        label: "Administrative Services Managers",
        value: "occupation_Administrative_Services_Managers",
      },
      {
        label: "Computer and Information Systems Managers",
        value: "occupation_Computer_and_Information_Systems_Managers",
      },
      {
        label: "Financial Managers",
        value: "occupation_Financial_Managers",
      },
      {
        label: "Human Resources Managers",
        value: "occupation_Human_Resources_Managers",
      },
      {
        label: "Industrial Production Managers",
        value: "occupation_Industrial_Production_Managers",
      },
      {
        label: "Purchasing Managers",
        value: "occupation_Purchasing_Managers",
      },
      {
        label: "Transportation Storage and Distribution Managers",
        value: "occupation_Transportation_Storage_and_Distribution_Managers",
      },
      {
        label: "Farmers Ranchers and Other Agricultural Managers",
        value: "occupation_Farmers_Ranchers_and_Other_Agricultural_Managers",
      },
      {
        label: "Constructions Managers",
        value: "occupation_Constructions_Managers",
      },
      {
        label: "Education Administrators",
        value: "occupation_Education_Administrators",
      },
      {
        label: "Architectural and Engineering Managers",
        value: "occupation_Architectural_and_Engineering_Managers",
      },
      {
        label: "Food Service and Lodging Managers",
        value: "occupation_Food_Service_and_Lodging_Managers",
      },
      {
        label: "Medical and Health Services Managers",
        value: "occupation_Medical_and_Health_Services_Managers",
      },
      {
        label: "Natural Science Managers",
        value: "occupation_Natural_Science_Managers",
      },
      {
        label: "Property Real Estate and Community Association Managers",
        value:
          "occupation_Property_Real_Estate_and_Community_Association_Managers",
      },
      {
        label: "Social and Community Service Managers",
        value: "occupation_Social_and_Community_Service_Managers",
      },
      {
        label: "Managers (including Postmasters)",
        value: "occupation_Managers_nec_(including_Postmasters)",
      },
      {
        label:
          "Agents and Business Managers of Artists Performers and Athletes",
        value:
          "occupation_Agents_and_Business_Managers_of_Artists_Performers_and_Athletes",
      },
      {
        label: "Buyers and Purchasing Agents Farm Products",
        value: "occupation_Buyers_and_Purchasing_Agents_Farm_Products",
      },
      {
        label: "Wholesale and Retail Buyers Except Farm Products",
        value: "occupation_Wholesale_and_Retail_Buyers_Except_Farm_Products",
      },
      {
        label: "Purchasing Agents Except Wholesale Retail and Farm Products",
        value:
          "occupation_Purchasing_Agents_Except_Wholesale_Retail_and_Farm_Products",
      },
      {
        label: "Claims Adjusters Appraisers Examiners and Investigators",
        value:
          "occupation_Claims_Adjusters_Appraisers_Examiners_and_Investigators",
      },
      {
        label: "Compliance Officers Except Agriculture",
        value: "occupation_Compliance_Officers_Except_Agriculture",
      },
      { label: "Cost Estimators", value: "occupation_Cost_Estimators" },
      {
        label: "Human Resources Training and Labor Relations Specialists",
        value:
          "occupation_Human_Resources_Training_and_Labor_Relations_Specialists",
      },
      { label: "Logisticians", value: "occupation_Logisticians" },
      {
        label: "Management Analysts",
        value: "occupation_Management_Analysts",
      },
      {
        label: "Meeting and Convention Planners",
        value: "occupation_Meeting_and_Convention_Planners",
      },
      {
        label: "Other Business Operations and Management Specialists",
        value:
          "occupation_Other_Business_Operations_and_Management_Specialists",
      },
      {
        label: "Accountants and Auditors",
        value: "occupation_Accountants_and_Auditors",
      },
      {
        label: "Appraisers and Assessors of Real Estate",
        value: "occupation_Appraisers_and_Assessors_of_Real_Estate",
      },
      { label: "Budget Analysts", value: "occupation_Budget_Analysts" },
      { label: "Credit Analysts", value: "occupation_Credit_Analysts" },
      {
        label: "Financial Analysts",
        value: "occupation_Financial_Analysts",
      },
      {
        label: "Personal Financial Advisors",
        value: "occupation_Personal_Financial_Advisors",
      },
      {
        label: "Insurance Underwriters",
        value: "occupation_Insurance_Underwriters",
      },
      {
        label: "Financial Examiners",
        value: "occupation_Financial_Examiners",
      },
      {
        label: "Credit Counselors and Loan Officers",
        value: "occupation_Credit_Counselors_and_Loan_Officers",
      },
      {
        label: "Tax Examiners and Collectors and Revenue Agents",
        value: "occupation_Tax_Examiners_and_Collectors_and_Revenue_Agents",
      },
      { label: "Tax Preparers", value: "occupation_Tax_Preparers" },
      {
        label: "Financial Specialists",
        value: "occupation_Financial_Specialists_nec",
      },
      {
        label:
          "Computer Scientists and Systems Analysts/Network systems Analysts/Web Developers",
        value:
          "occupation_Computer_Scientists_and_Systems_Analysts/Network_systems_Analysts/Web_Developers",
      },
      {
        label: "Computer Programmers",
        value: "occupation_Computer_Programmers",
      },
      {
        label: "Software Developers Applications and Systems Software",
        value:
          "occupation_Software_Developers_Applications_and_Systems_Software",
      },
      {
        label: "Computer Support Specialists",
        value: "occupation_Computer_Support_Specialists",
      },
      {
        label: "Database Administrators",
        value: "occupation_Database_Administrators",
      },
      {
        label: "Network and Computer Systems Administrators",
        value: "occupation_Network_and_Computer_Systems_Administrators",
      },
      { label: "Actuaries", value: "occupation_Actuaries" },
      {
        label: "Operations Research Analysts",
        value: "occupation_Operations_Research_Analysts",
      },
      {
        label: "Mathematical science occupations",
        value: "occupation_Mathematical_science_occupations_nec",
      },
      {
        label: "Architects Except Naval",
        value: "occupation_Architects_Except_Naval",
      },
      {
        label: "Surveyors Cartographers and Photogrammetrists",
        value: "occupation_Surveyors_Cartographers_and_Photogrammetrists",
      },
      {
        label: "Aerospace Engineers",
        value: "occupation_Aerospace_Engineers",
      },
      {
        label: "Chemical Engineers",
        value: "occupation_Chemical_Engineers",
      },
      { label: "Civil Engineers", value: "occupation_Civil_Engineers" },
      {
        label: "Computer Hardware Engineers",
        value: "occupation_Computer_Hardware_Engineers",
      },
      {
        label: "Electrical and Electronics Engineers",
        value: "occupation_Electrical_and_Electronics_Engineers",
      },
      {
        label: "Environmental Engineers",
        value: "occupation_Environmental_Engineers",
      },
      {
        label: "Industrial Engineers including Health and Safety",
        value: "occupation_Industrial_Engineers_including_Health_and_Safety",
      },
      {
        label: "Marine Engineers and Naval Architects",
        value: "occupation_Marine_Engineers_and_Naval_Architects",
      },
      {
        label: "Materials Engineers",
        value: "occupation_Materials_Engineers",
      },
      {
        label: "Mechanical Engineers",
        value: "occupation_Mechanical_Engineers",
      },
      {
        label:
          "Petroleum mining and geological engineers including mining safety engineers",
        value:
          "occupation_Petroleum_mining_and_geological_engineers_including_mining_safety_engineers",
      },
      { label: "Engineers", value: "occupation_Engineers_nec" },
      { label: "Drafters", value: "occupation_Drafters" },
      {
        label: "Engineering Technicians Except Drafters",
        value: "occupation_Engineering_Technicians_Except_Drafters",
      },
      {
        label: "Surveying and Mapping Technicians",
        value: "occupation_Surveying_and_Mapping_Technicians",
      },
      {
        label: "Agricultural and Food Scientists",
        value: "occupation_Agricultural_and_Food_Scientists",
      },
      {
        label: "Biological Scientists",
        value: "occupation_Biological_Scientists",
      },
      {
        label: "Conservation Scientists and Foresters",
        value: "occupation_Conservation_Scientists_and_Foresters",
      },
      {
        label: "Medical Scientists and Life Scientists",
        value: "occupation_Medical_Scientists_and_Life_Scientists_All_Other",
      },
      {
        label: "Astronomers and Physicists",
        value: "occupation_Astronomers_and_Physicists",
      },
      {
        label: "Atmospheric and Space Scientists",
        value: "occupation_Atmospheric_and_Space_Scientists",
      },
      {
        label: "Chemists and Materials Scientists",
        value: "occupation_Chemists_and_Materials_Scientists",
      },
      {
        label: "Environmental Scientists and Geoscientists",
        value: "occupation_Environmental_Scientists_and_Geoscientists",
      },
      {
        label: "Physical Scientists",
        value: "occupation_Physical_Scientists_nec",
      },
      {
        label: "Economists and market researchers",
        value: "occupation_Economists_and_market_researchers",
      },
      { label: "Psychologists", value: "occupation_Psychologists" },
      {
        label: "Urban and Regional Planners",
        value: "occupation_Urban_and_Regional_Planners",
      },
      {
        label: "Social Scientists",
        value: "occupation_Social_Scientists_nec",
      },
      {
        label: "Agricultural and Food Science Technicians",
        value: "occupation_Agricultural_and_Food_Science_Technicians",
      },
      {
        label: "Biological Technicians",
        value: "occupation_Biological_Technicians",
      },
      {
        label: "Chemical Technicians",
        value: "occupation_Chemical_Technicians",
      },
      {
        label: "Life Physical and Social Science Technicians",
        value: "occupation_Life_Physical_and_Social_Science_Technicians_nec",
      },
      { label: "Counselors", value: "occupation_Counselors" },
      { label: "Social Workers", value: "occupation_Social_Workers" },
      {
        label: "Community and Social Service Specialists",
        value: "occupation_Community_and_Social_Service_Specialists_nec",
      },
      { label: "Clergy", value: "occupation_Clergy" },
      {
        label: "Directors of Religious Activities and Education",
        value: "occupation_Directors_Religious_Activities_and_Education",
      },
      {
        label: "Religious Workers",
        value: "occupation_Religious_Workers_nec",
      },
      {
        label: "Lawyers and judges magistrates and otherjudicial workers",
        value:
          "occupation_Lawyers_and_judges_magistrates_and_other_judicial_workers",
      },
      {
        label: "Paralegals and Legal Assistants",
        value: "occupation_Paralegals_and_Legal_Assistants",
      },
      {
        label: "Legal Support Workers",
        value: "occupation_Legal_Support_Workers_nec",
      },
      {
        label: "Postsecondary Teachers",
        value: "occupation_Postsecondary_Teachers",
      },
      {
        label: "Preschool and Kindergarten Teachers",
        value: "occupation_Preschool_and_Kindergarten_Teachers",
      },
      {
        label: "Elementary and Middle School Teachers",
        value: "occupation_Elementary_and_Middle_School_Teachers",
      },
      {
        label: "Secondary School Teachers",
        value: "occupation_Secondary_School_Teachers",
      },
      {
        label: "Special Education Teachers",
        value: "occupation_Special_Education_Teachers",
      },
      {
        label: "Other Teachers and Instructors",
        value: "occupation_Other_Teachers_and_Instructors",
      },
      {
        label: "Archivists Curators and Museum Technicians",
        value: "occupation_Archivists_Curators_and_Museum_Technicians",
      },
      { label: "Librarians", value: "occupation_Librarians" },
      {
        label: "Library Technicians",
        value: "occupation_Library_Technicians",
      },
      {
        label: "Teacher Assistants",
        value: "occupation_Teacher_Assistants",
      },
      {
        label: "Education Training and Library Workers",
        value: "occupation_Education_Training_and_Library_Workers_nec",
      },
      {
        label: "Artists and Related Workers",
        value: "occupation_Artists_and_Related_Workers",
      },
      { label: "Designers", value: "occupation_Designers" },
      {
        label: "Actors Producers and Directors",
        value: "occupation_Actors_Producers_and_Directors",
      },
      {
        label: "Athletes Coaches Umpires and Related Workers",
        value: "occupation_Athletes_Coaches_Umpires_and_Related_Workers",
      },
      {
        label: "Dancers and Choreographers",
        value: "occupation_Dancers_and_Choreographers",
      },
      {
        label: "Musicians Singers and Related Workers",
        value: "occupation_Musicians_Singers_and_Related_Workers",
      },
      {
        label:
          "Entertainers and Performers Sports and Related Workers (All Other)",
        value:
          "occupation_Entertainers_and_Performers_Sports_and_Related_Workers_All_Other",
      },
      { label: "Announcers", value: "occupation_Announcers" },
      {
        label: "Editors News Analysts Reporters and Correspondents",
        value: "occupation_Editors_News_Analysts_Reporters_and_Correspondents",
      },
      {
        label: "Public Relations Specialists",
        value: "occupation_Public_Relations_Specialists",
      },
      { label: "Technical Writers", value: "occupation_Technical_Writers" },
      {
        label: "Writers and Authors",
        value: "occupation_Writers_and_Authors",
      },
      {
        label: "Media and Communication Workers",
        value: "occupation_Media_and_Communication_Workers_nec",
      },
      {
        label:
          "Broadcast and Sound Engineering Technicians and Radio Operators and media and communication equipment workers (All Other)",
        value:
          "occupation_Broadcast_and_Sound_Engineering_Technicians_and_Radio_Operators_and_media_and_communication_equipment_workers_all_other",
      },
      { label: "Photographers", value: "occupation_Photographers" },
      {
        label:
          "Television Video and Motion Picture Camera Operators and Editors",
        value:
          "occupation_Television_Video_and_Motion_Picture_Camera_Operators_and_Editors",
      },
      { label: "Chiropractors", value: "occupation_Chiropractors" },
      { label: "Dentists", value: "occupation_Dentists" },
      {
        label: "Dieticians and Nutritionists",
        value: "occupation_Dieticians_and_Nutritionists",
      },
      { label: "Optometrists", value: "occupation_Optometrists" },
      { label: "Pharmacists", value: "occupation_Pharmacists" },
      {
        label: "Physicians and Surgeons",
        value: "occupation_Physicians_and_Surgeons",
      },
      {
        label: "Physician Assistants",
        value: "occupation_Physician_Assistants",
      },
      { label: "Podiatrists", value: "occupation_Podiatrists" },
      { label: "Registered Nurses", value: "occupation_Registered_Nurses" },
      { label: "Audiologists", value: "occupation_Audiologists" },
      {
        label: "Occupational Therapists",
        value: "occupation_Occupational_Therapists",
      },
      {
        label: "Physical Therapists",
        value: "occupation_Physical_Therapists",
      },
      {
        label: "Radiation Therapists",
        value: "occupation_Radiation_Therapists",
      },
      {
        label: "Recreational Therapists",
        value: "occupation_Recreational_Therapists",
      },
      {
        label: "Respiratory Therapists",
        value: "occupation_Respiratory_Therapists",
      },
      {
        label: "Speech Language Pathologists",
        value: "occupation_Speech_Language_Pathologists",
      },
      { label: "Therapists", value: "occupation_Therapists_nec" },
      { label: "Veterinarians", value: "occupation_Veterinarians" },
      {
        label: "Health Diagnosing and Treating Practitioners",
        value: "occupation_Health_Diagnosing_and_Treating_Practitioners_nec",
      },
      {
        label: "Clinical Laboratory Technologists and Technicians",
        value: "occupation_Clinical_Laboratory_Technologists_and_Technicians",
      },
      { label: "Dental Hygienists", value: "occupation_Dental_Hygienists" },
      {
        label: "Diagnostic Related Technologists and Technicians",
        value: "occupation_Diagnostic_Related_Technologists_and_Technicians",
      },
      {
        label: "Emergency Medical Technicians and Paramedics",
        value: "occupation_Emergency_Medical_Technicians_and_Paramedics",
      },
      {
        label:
          "Health Diagnosing and Treating Practitioner Support Technicians",
        value:
          "occupation_Health_Diagnosing_and_Treating_Practitioner_Support_Technicians",
      },
      {
        label: "Licensed Practical and Licensed Vocational Nurses",
        value: "occupation_Licensed_Practical_and_Licensed_Vocational_Nurses",
      },
      {
        label: "Medical Records and Health Information Technicians",
        value: "occupation_Medical_Records_and_Health_Information_Technicians",
      },
      {
        label: "Opticians Dispensing",
        value: "occupation_Opticians_Dispensing",
      },
      {
        label: "Health Technologists and Technicians",
        value: "occupation_Health_Technologists_and_Technicians_nec",
      },
      {
        label: "Healthcare Practitioners and Technical Occupations",
        value:
          "occupation_Healthcare_Practitioners_and_Technical_Occupations_nec",
      },
      {
        label: "Nursing Psychiatric and Home Health Aides",
        value: "occupation_Nursing_Psychiatric_and_Home_Health_Aides",
      },
      {
        label: "Occupational Therapy Assistants and Aides",
        value: "occupation_Occupational_Therapy_Assistants_and_Aides",
      },
      {
        label: "Physical Therapist Assistants and Aides",
        value: "occupation_Physical_Therapist_Assistants_and_Aides",
      },
      {
        label: "Massage Therapists",
        value: "occupation_Massage_Therapists",
      },
      { label: "Dental Assistants", value: "occupation_Dental_Assistants" },
      {
        label: "Medical Assistants and Other Healthcare Support Occupations",
        value:
          "occupation_Medical_Assistants_and_Other_Healthcare_Support_Occupations_nec",
      },
      {
        label: "First-Line Supervisors of Correctional Officers",
        value: "occupation_First-Line_Supervisors_of_Correctional_Officers",
      },
      {
        label: "First-Line Supervisors of Police and Detectives",
        value: "occupation_First-Line_Supervisors_of_Police_and_Detectives",
      },
      {
        label: "First-Line Supervisors of Fire Fighting and Prevention Workers",
        value:
          "occupation_First-Line_Supervisors_of_Fire_Fighting_and_Prevention_Workers",
      },
      {
        label: "Supervisors Protective Service Workers (All Other)",
        value: "occupation_Supervisors_Protective_Service_Workers_All_Other",
      },
      { label: "Firefighters", value: "occupation_Firefighters" },
      { label: "Fire Inspectors", value: "occupation_Fire_Inspectors" },
      {
        label: "Sheriffs Bailiffs Correctional Officers and Jailers",
        value: "occupation_Sheriffs_Bailiffs_Correctional_Officers_and_Jailers",
      },
      {
        label: "Police Officers and Detectives",
        value: "occupation_Police_Officers_and_Detectives",
      },
      { label: "Animal Control", value: "occupation_Animal_Control" },
      {
        label: "Private Detectives and Investigators",
        value: "occupation_Private_Detectives_and_Investigators",
      },
      {
        label: "Security Guards and Gaming Surveillance Officers",
        value: "occupation_Security_Guards_and_Gaming_Surveillance_Officers",
      },
      { label: "Crossing Guards", value: "occupation_Crossing_Guards" },
      {
        label: "Law enforcement workers",
        value: "occupation_Law_enforcement_workers_nec",
      },
      { label: "Chefs and Cooks", value: "occupation_Chefs_and_Cooks" },
      {
        label: "First-Line Supervisors of Food Preparation and Serving Workers",
        value:
          "occupation_First-Line_Supervisors_of_Food_Preparation_and_Serving_Workers",
      },
      {
        label: "Food Preparation Workers",
        value: "occupation_Food_Preparation_Workers",
      },
      { label: "Bartenders", value: "occupation_Bartenders" },
      {
        label:
          "Combined Food Preparation and Serving Workers Including Fast Food",
        value:
          "occupation_Combined_Food_Preparation_and_Serving_Workers_Including_Fast_Food",
      },
      {
        label: "Waiters and Waitresses",
        value: "occupation_Waiters_and_Waitresses",
      },
      {
        label: "Food Servers Nonrestaurant",
        value: "occupation_Food_Servers_Nonrestaurant",
      },
      {
        label: "Food preparation and serving related workers",
        value: "occupation_Food_preparation_and_serving_related_workers_nec",
      },
      { label: "Dishwashers", value: "occupation_Dishwashers" },
      {
        label: "Host and Hostesses Restaurant Lounge and Coffee Shop",
        value:
          "occupation_Host_and_Hostesses_Restaurant_Lounge_and_Coffee_Shop",
      },
      {
        label: "First-Line Supervisors of Housekeeping and Janitorial Workers",
        value:
          "occupation_First-Line_Supervisors_of_Housekeeping_and_Janitorial_Workers",
      },
      {
        label:
          "First-Line Supervisors of Landscaping Lawn Service and Groundskeeping Workers",
        value:
          "occupation_First-Line_Supervisors_of_Landscaping_Lawn_Service_and_Groundskeeping_Workers",
      },
      {
        label: "Janitors and Building Cleaners",
        value: "occupation_Janitors_and_Building_Cleaners",
      },
      {
        label: "Maids and Housekeeping Cleaners",
        value: "occupation_Maids_and_Housekeeping_Cleaners",
      },
      {
        label: "Pest Control Workers",
        value: "occupation_Pest_Control_Workers",
      },
      {
        label: "Grounds Maintenance Workers",
        value: "occupation_Grounds_Maintenance_Workers",
      },
      {
        label: "First-Line Supervisors of Personal Service Workers",
        value: "occupation_First-Line_Supervisors_of_Personal_Service_Workers",
      },
      { label: "Animal Trainers", value: "occupation_Animal_Trainers" },
      {
        label: "Nonfarm Animal Caretakers",
        value: "occupation_Nonfarm_Animal_Caretakers",
      },
      {
        label: "Gaming Services Workers",
        value: "occupation_Gaming_Services_Workers",
      },
      {
        label: "Ushers Lobby Attendants and Ticket Takers",
        value: "occupation_Ushers_Lobby_Attendants_and_Ticket_Takers",
      },
      {
        label: "Entertainment Attendants and Related Workers",
        value: "occupation_Entertainment_Attendants_and_Related_Workers_nec",
      },
      {
        label: "Funeral Service Workers and Embalmers",
        value: "occupation_Funeral_Service_Workers_and_Embalmers",
      },
      { label: "Barbers", value: "occupation_Barbers" },
      {
        label: "Hairdressers Hairstylists and Cosmetologists",
        value: "occupation_Hairdressers_Hairstylists_and_Cosmetologists",
      },
      {
        label: "Personal Appearance Workers",
        value: "occupation_Personal_Appearance_Workers_nec",
      },
      {
        label: "Baggage Porters Bellhops and Concierges",
        value: "occupation_Baggage_Porters_Bellhops_and_Concierges",
      },
      {
        label: "Tour and Travel Guides",
        value: "occupation_Tour_and_Travel_Guides",
      },
      { label: "Childcare Workers", value: "occupation_Childcare_Workers" },
      {
        label: "Personal Care Aides",
        value: "occupation_Personal_Care_Aides",
      },
      {
        label: "Recreation and Fitness Workers",
        value: "occupation_Recreation_and_Fitness_Workers",
      },
      {
        label: "Residential Advisors",
        value: "occupation_Residential_Advisors",
      },
      {
        label: "Personal Care and Service Workers (All Other)",
        value: "occupation_Personal_Care_and_Service_Workers_All_Other",
      },
      {
        label: "First-Line Supervisors of Sales Workers",
        value: "occupation_First-Line_Supervisors_of_Sales_Workers",
      },
      { label: "Cashiers", value: "occupation_Cashiers" },
      {
        label: "Counter and Rental Clerks",
        value: "occupation_Counter_and_Rental_Clerks",
      },
      {
        label: "Parts Salespersons",
        value: "occupation_Parts_Salespersons",
      },
      {
        label: "Retail Salespersons",
        value: "occupation_Retail_Salespersons",
      },
      {
        label: "Advertising Sales Agents",
        value: "occupation_Advertising_Sales_Agents",
      },
      {
        label: "Insurance Sales Agents",
        value: "occupation_Insurance_Sales_Agents",
      },
      {
        label: "Securities Commodities and Financial Services Sales Agents",
        value:
          "occupation_Securities_Commodities_and_Financial_Services_Sales_Agents",
      },
      { label: "Travel Agents", value: "occupation_Travel_Agents" },
      {
        label: "Sales Representatives Services (All Other)",
        value: "occupation_Sales_Representatives_Services_All_Other",
      },
      {
        label: "Sales Representatives Wholesale and Manufacturing",
        value: "occupation_Sales_Representatives_Wholesale_and_Manufacturing",
      },
      {
        label: "Models Demonstrators and Product Promoters",
        value: "occupation_Models_Demonstrators_and_Product_Promoters",
      },
      {
        label: "Real Estate Brokers and Sales Agents",
        value: "occupation_Real_Estate_Brokers_and_Sales_Agents",
      },
      { label: "Sales Engineers", value: "occupation_Sales_Engineers" },
      { label: "Telemarketers", value: "occupation_Telemarketers" },
      {
        label:
          "Door-to-Door Sales Workers News and Street Vendors and Related Workers",
        value:
          "occupation_Door-to-Door_Sales_Workers_News_and_Street_Vendors_and_Related_Workers",
      },
      {
        label: "Sales and Related Workers (All Other)",
        value: "occupation_Sales_and_Related_Workers_All_Other",
      },
      {
        label:
          "First-Line Supervisors of Office and Administrative Support Workers",
        value:
          "occupation_First-Line_Supervisors_of_Office_and_Administrative_Support_Workers",
      },
      {
        label: "Switchboard Operators Including Answering Service",
        value: "occupation_Switchboard_Operators_Including_Answering_Service",
      },
      {
        label: "Telephone Operators",
        value: "occupation_Telephone_Operators",
      },
      {
        label: "Bill and Account Collectors",
        value: "occupation_Bill_and_Account_Collectors",
      },
      {
        label: "Billing and Posting Clerks",
        value: "occupation_Billing_and_Posting_Clerks",
      },
      {
        label: "Bookkeeping Accounting and Auditing Clerks",
        value: "occupation_Bookkeeping_Accounting_and_Auditing_Clerks",
      },
      {
        label: "Payroll and Timekeeping Clerks",
        value: "occupation_Payroll_and_Timekeeping_Clerks",
      },
      {
        label: "Procurement Clerks",
        value: "occupation_Procurement_Clerks",
      },
      { label: "Bank Tellers", value: "occupation_Bank_Tellers" },
      {
        label: "Financial Clerks",
        value: "occupation_Financial_Clerks_nec",
      },
      {
        label: "Court Municipal and License Clerks",
        value: "occupation_Court_Municipal_and_License_Clerks",
      },
      {
        label: "Credit Authorizers Checkers and Clerks",
        value: "occupation_Credit_Authorizers_Checkers_and_Clerks",
      },
      {
        label: "Customer Service Representatives",
        value: "occupation_Customer_Service_Representatives",
      },
      {
        label: "Eligibility Interviewers Government Programs",
        value: "occupation_Eligibility_Interviewers_Government_Programs",
      },
      { label: "File Clerks", value: "occupation_File_Clerks" },
      {
        label: "Hotel Motel and Resort Desk Clerks",
        value: "occupation_Hotel_Motel_and_Resort_Desk_Clerks",
      },
      {
        label: "Interviewers Except Eligibility and Loan",
        value: "occupation_Interviewers_Except_Eligibility_and_Loan",
      },
      {
        label: "Library Assistants Clerical",
        value: "occupation_Library_Assistants_Clerical",
      },
      {
        label: "Loan Interviewers and Clerks",
        value: "occupation_Loan_Interviewers_and_Clerks",
      },
      {
        label: "New Account Clerks",
        value: "occupation_New_Account_Clerks",
      },
      {
        label: "Correspondent clerks and order clerks",
        value: "occupation_Correspondent_clerks_and_order_clerks",
      },
      {
        label: "Human Resources Assistants Except Payroll and Timekeeping",
        value:
          "occupation_Human_Resources_Assistants_Except_Payroll_and_Timekeeping",
      },
      {
        label: "Receptionists and Information Clerks",
        value: "occupation_Receptionists_and_Information_Clerks",
      },
      {
        label: "Reservation and Transportation Ticket Agents and Travel Clerks",
        value:
          "occupation_Reservation_and_Transportation_Ticket_Agents_and_Travel_Clerks",
      },
      {
        label: "Information and Record Clerks (All Other)",
        value: "occupation_Information_and_Record_Clerks_All_Other",
      },
      {
        label: "Cargo and Freight Agents",
        value: "occupation_Cargo_and_Freight_Agents",
      },
      {
        label: "Couriers and Messengers",
        value: "occupation_Couriers_and_Messengers",
      },
      { label: "Dispatchers", value: "occupation_Dispatchers" },
      {
        label: "Meter Readers Utilities",
        value: "occupation_Meter_Readers_Utilities",
      },
      {
        label: "Postal Service Clerks",
        value: "occupation_Postal_Service_Clerks",
      },
      {
        label: "Postal Service Mail Carriers",
        value: "occupation_Postal_Service_Mail_Carriers",
      },
      {
        label:
          "Postal Service Mail Sorters Processors and Processing Machine Operators",
        value:
          "occupation_Postal_Service_Mail_Sorters_Processors_and_Processing_Machine_Operators",
      },
      {
        label: "Production Planning and Expediting Clerks",
        value: "occupation_Production_Planning_and_Expediting_Clerks",
      },
      {
        label: "Shipping Receiving and Traffic Clerks",
        value: "occupation_Shipping_Receiving_and_Traffic_Clerks",
      },
      {
        label: "Stock Clerks and Order Fillers",
        value: "occupation_Stock_Clerks_and_Order_Fillers",
      },
      {
        label: "Weighers Measurers Checkers and Samplers Recordkeeping",
        value:
          "occupation_Weighers_Measurers_Checkers_and_Samplers_Recordkeeping",
      },
      {
        label: "Secretaries and Administrative Assistants",
        value: "occupation_Secretaries_and_Administrative_Assistants",
      },
      { label: "Data Entry Keyers", value: "occupation_Data_Entry_Keyers" },
      {
        label: "Word Processors and Typists",
        value: "occupation_Word_Processors_and_Typists",
      },
      {
        label: "Insurance Claims and Policy Processing Clerks",
        value: "occupation_Insurance_Claims_and_Policy_Processing_Clerks",
      },
      {
        label: "Mail Clerks and Mail Machine Operators Except Postal Service",
        value:
          "occupation_Mail_Clerks_and_Mail_Machine_Operators_Except_Postal_Service",
      },
      {
        label: "Office Clerks General",
        value: "occupation_Office_Clerks_General",
      },
      {
        label: "Office Machine Operators Except Computer",
        value: "occupation_Office_Machine_Operators_Except_Computer",
      },
      {
        label: "Proofreaders and Copy Markers",
        value: "occupation_Proofreaders_and_Copy_Markers",
      },
      {
        label: "Statistical Assistants",
        value: "occupation_Statistical_Assistants",
      },
      {
        label: "Office and administrative support workers",
        value: "occupation_Office_and_administrative_support_workers_nec",
      },
      {
        label: "First-Line Supervisors of Farming Fishing and Forestry Workers",
        value:
          "occupation_First-Line_Supervisors_of_Farming_Fishing_and_Forestry_Workers",
      },
      {
        label: "Agricultural Inspectors",
        value: "occupation_Agricultural_Inspectors",
      },
      {
        label: "Graders and Sorters Agricultural Products",
        value: "occupation_Graders_and_Sorters_Agricultural_Products",
      },
      {
        label: "Agricultural workers",
        value: "occupation_Agricultural_workers_nec",
      },
      {
        label: "Fishing and hunting workers",
        value: "occupation_Fishing_and_hunting_workers",
      },
      {
        label: "Forest and Conservation Workers",
        value: "occupation_Forest_and_Conservation_Workers",
      },
      { label: "Logging Workers", value: "occupation_Logging_Workers" },
      {
        label:
          "First-Line Supervisors of Construction Trades and Extraction Workers",
        value:
          "occupation_First-Line_Supervisors_of_Construction_Trades_and_Extraction_Workers",
      },
      { label: "Boilermakers", value: "occupation_Boilermakers" },
      {
        label: "Brickmasons Blockmasons and Stonemasons",
        value: "occupation_Brickmasons_Blockmasons_and_Stonemasons",
      },
      { label: "Carpenters", value: "occupation_Carpenters" },
      {
        label: "Carpet Floor and Tile Installers and Finishers",
        value: "occupation_Carpet_Floor_and_Tile_Installers_and_Finishers",
      },
      {
        label: "Cement Masons Concrete Finishers and Terrazzo Workers",
        value:
          "occupation_Cement_Masons_Concrete_Finishers_and_Terrazzo_Workers",
      },
      {
        label: "Construction Laborers",
        value: "occupation_Construction_Laborers",
      },
      {
        label:
          "Construction equipment operators except paving surfacing and tamping equipment operators",
        value:
          "occupation_Construction_equipment_operators_except_paving_surfacing_and_tamping_equipment_operators",
      },
      {
        label: "Drywall Installers Ceiling Tile Installers and Tapers",
        value:
          "occupation_Drywall_Installers_Ceiling_Tile_Installers_and_Tapers",
      },
      { label: "Electricians", value: "occupation_Electricians" },
      { label: "Glaziers", value: "occupation_Glaziers" },
      {
        label: "Insulation Workers",
        value: "occupation_Insulation_Workers",
      },
      {
        label: "Painters Construction and Maintenance",
        value: "occupation_Painters_Construction_and_Maintenance",
      },
      {
        label: "Pipelayers Plumbers Pipefitters and Steamfitters",
        value: "occupation_Pipelayers_Plumbers_Pipefitters_and_Steamfitters",
      },
      {
        label: "Plasterers and Stucco Masons",
        value: "occupation_Plasterers_and_Stucco_Masons",
      },
      { label: "Roofers", value: "occupation_Roofers" },
      {
        label: "Sheet Metal Workers metal-working",
        value: "occupation_Sheet_Metal_Workers_metal-working",
      },
      {
        label: "Structural Iron and Steel Workers",
        value: "occupation_Structural_Iron_and_Steel_Workers",
      },
      {
        label: "Helpers Construction Trades",
        value: "occupation_Helpers_Construction_Trades",
      },
      {
        label: "Construction and Building Inspectors",
        value: "occupation_Construction_and_Building_Inspectors",
      },
      {
        label: "Elevator Installers and Repairers",
        value: "occupation_Elevator_Installers_and_Repairers",
      },
      { label: "Fence Erectors", value: "occupation_Fence_Erectors" },
      {
        label: "Hazardous Materials Removal Workers",
        value: "occupation_Hazardous_Materials_Removal_Workers",
      },
      {
        label: "Highway Maintenance Workers",
        value: "occupation_Highway_Maintenance_Workers",
      },
      {
        label: "Rail-Track Laying and Maintenance Equipment Operators",
        value:
          "occupation_Rail-Track_Laying_and_Maintenance_Equipment_Operators",
      },
      {
        label: "Construction workers",
        value: "occupation_Construction_workers_nec",
      },
      {
        label:
          "Derrick rotary drill and service unit operators and roustabouts oil gas and mining",
        value:
          "occupation_Derrick_rotary_drill_and_service_unit_operators_and_roustabouts_oil_gas_and_mining",
      },
      {
        label: "Earth Drillers Except Oil and Gas",
        value: "occupation_Earth_Drillers_Except_Oil_and_Gas",
      },
      {
        label: "Explosives Workers Ordnance Handling Experts and Blasters",
        value:
          "occupation_Explosives_Workers_Ordnance_Handling_Experts_and_Blasters",
      },
      {
        label: "Mining Machine Operators",
        value: "occupation_Mining_Machine_Operators",
      },
      {
        label: "Extraction workers",
        value: "occupation_Extraction_workers_nec",
      },
      {
        label: "First-Line Supervisors of Mechanics Installers and Repairers",
        value:
          "occupation_First-Line_Supervisors_of_Mechanics_Installers_and_Repairers",
      },
      {
        label: "Computer Automated Teller and Office Machine Repairers",
        value:
          "occupation_Computer_Automated_Teller_and_Office_Machine_Repairers",
      },
      {
        label:
          "Radio and Telecommunications Equipment Installers and Repairers",
        value:
          "occupation_Radio_and_Telecommunications_Equipment_Installers_and_Repairers",
      },
      {
        label: "Avionics Technicians",
        value: "occupation_Avionics_Technicians",
      },
      {
        label: "Electric Motor Power Tool and Related Repairers",
        value: "occupation_Electric_Motor_Power_Tool_and_Related_Repairers",
      },
      {
        label:
          "Electrical and electronics repairers transportation equipment and industrial and utility",
        value:
          "occupation_Electrical_and_electronics_repairers_transportation_equipment_and_industrial_and_utility",
      },
      {
        label:
          "Electronic Home Entertainment Equipment Installers and Repairers",
        value:
          "occupation_Electronic_Home_Entertainment_Equipment_Installers_and_Repairers",
      },
      {
        label: "Security and Fire Alarm Systems Installers",
        value: "occupation_Security_and_Fire_Alarm_Systems_Installers",
      },
      {
        label: "Aircraft Mechanics and Service Technicians",
        value: "occupation_Aircraft_Mechanics_and_Service_Technicians",
      },
      {
        label: "Automotive Body and Related Repairers",
        value: "occupation_Automotive_Body_and_Related_Repairers",
      },
      {
        label: "Automotive Glass Installers and Repairers",
        value: "occupation_Automotive_Glass_Installers_and_Repairers",
      },
      {
        label: "Automotive Service Technicians and Mechanics",
        value: "occupation_Automotive_Service_Technicians_and_Mechanics",
      },
      {
        label: "Bus and Truck Mechanics and Diesel Engine Specialists",
        value:
          "occupation_Bus_and_Truck_Mechanics_and_Diesel_Engine_Specialists",
      },
      {
        label:
          "Heavy Vehicle and Mobile Equipment Service Technicians and Mechanics",
        value:
          "occupation_Heavy_Vehicle_and_Mobile_Equipment_Service_Technicians_and_Mechanics",
      },
      {
        label: "Small Engine Mechanics",
        value: "occupation_Small_Engine_Mechanics",
      },
      {
        label:
          "Vehicle and Mobile Equipment Mechanics Installers and Repairers",
        value:
          "occupation_Vehicle_and_Mobile_Equipment_Mechanics_Installers_and_Repairers_nec",
      },
      {
        label: "Control and Valve Installers and Repairers",
        value: "occupation_Control_and_Valve_Installers_and_Repairers",
      },
      {
        label:
          "Heating Air Conditioning and Refrigeration Mechanics and Installers",
        value:
          "occupation_Heating_Air_Conditioning_and_Refrigeration_Mechanics_and_Installers",
      },
      {
        label: "Home Appliance Repairers",
        value: "occupation_Home_Appliance_Repairers",
      },
      {
        label: "Industrial and Refractory Machinery Mechanics",
        value: "occupation_Industrial_and_Refractory_Machinery_Mechanics",
      },
      {
        label: "Maintenance and Repair Workers General",
        value: "occupation_Maintenance_and_Repair_Workers_General",
      },
      {
        label: "Maintenance Workers Machinery",
        value: "occupation_Maintenance_Workers_Machinery",
      },
      { label: "Millwrights", value: "occupation_Millwrights" },
      {
        label: "Electrical Power-Line Installers and Repairers",
        value: "occupation_Electrical_Power-Line_Installers_and_Repairers",
      },
      {
        label: "Telecommunications Line Installers and Repairers",
        value: "occupation_Telecommunications_Line_Installers_and_Repairers",
      },
      {
        label: "Precision Instrument and Equipment Repairers",
        value: "occupation_Precision_Instrument_and_Equipment_Repairers",
      },
      {
        label: "Coin Vending and Amusement Machine Servicers and Repairers",
        value:
          "occupation_Coin_Vending_and_Amusement_Machine_Servicers_and_Repairers",
      },
      {
        label: "Locksmiths and Safe Repairers",
        value: "occupation_Locksmiths_and_Safe_Repairers",
      },
      { label: "Riggers", value: "occupation_Riggers" },
      {
        label: "Helpers--Installation Maintenance and Repair Workers",
        value:
          "occupation_Helpers--Installation_Maintenance_and_Repair_Workers",
      },
      {
        label:
          "Other Installation Maintenance and Repair Workers Including Wind Turbine Service Technicians and Commercial Divers and Signal and Track Switch Repairers",
        value:
          "occupation_Other_Installation_Maintenance_and_Repair_Workers_Including_Wind_Turbine_Service_Technicians_and_Commercial_Divers_and_Signal_and_Track_Switch_Repairers",
      },
      {
        label: "First-Line Supervisors of Production and Operating Workers",
        value:
          "occupation_First-Line_Supervisors_of_Production_and_Operating_Workers",
      },
      {
        label: "Electrical Electronics and Electromechanical Assemblers",
        value:
          "occupation_Electrical_Electronics_and_Electromechanical_Assemblers",
      },
      {
        label: "Engine and Other Machine Assemblers",
        value: "occupation_Engine_and_Other_Machine_Assemblers",
      },
      {
        label: "Structural Metal Fabricators and Fitters",
        value: "occupation_Structural_Metal_Fabricators_and_Fitters",
      },
      {
        label: "Assemblers and Fabricators",
        value: "occupation_Assemblers_and_Fabricators_nec",
      },
      { label: "Bakers", value: "occupation_Bakers" },
      {
        label: "Butchers and Other Meat Poultry and Fish Processing Workers",
        value:
          "occupation_Butchers_and_Other_Meat_Poultry_and_Fish_Processing_Workers",
      },
      {
        label:
          "Food and Tobacco Roasting Baking and Drying Machine Operators and Tenders",
        value:
          "occupation_Food_and_Tobacco_Roasting_Baking_and_Drying_Machine_Operators_and_Tenders",
      },
      { label: "Food Batchmakers", value: "occupation_Food_Batchmakers" },
      {
        label: "Food Cooking Machine Operators and Tenders",
        value: "occupation_Food_Cooking_Machine_Operators_and_Tenders",
      },
      {
        label: "Food Processing",
        value: "occupation_Food_Processing_nec",
      },
      {
        label: "Computer Control Programmers and Operators",
        value: "occupation_Computer_Control_Programmers_and_Operators",
      },
      {
        label:
          "Extruding and Drawing Machine Setters Operators and Tenders Metal and Plastic",
        value:
          "occupation_Extruding_and_Drawing_Machine_Setters_Operators_and_Tenders_Metal_and_Plastic",
      },
      {
        label:
          "Cutting Punching and Press Machine Setters Operators and Tenders Metal and Plastic",
        value:
          "occupation_Cutting_Punching_and_Press_Machine_Setters_Operators_and_Tenders_Metal_and_Plastic",
      },
      {
        label:
          "Grinding Lapping Polishing and Buffing Machine Tool Setters Operators and Tenders Metal and Plastic",
        value:
          "occupation_Grinding_Lapping_Polishing_and_Buffing_Machine_Tool_Setters_Operators_and_Tenders_Metal_and_Plastic",
      },
      {
        label:
          "Lathe and Turning Machine Tool Setters Operators and Tenders Metal and Plastic",
        value:
          "occupation_Lathe_and_Turning_Machine_Tool_Setters_Operators_and_Tenders_Metal_and_Plastic",
      },
      { label: "Machinists", value: "occupation_Machinists" },
      {
        label: "Metal Furnace Operators Tenders Pourers and Casters",
        value: "occupation_Metal_Furnace_Operators_Tenders_Pourers_and_Casters",
      },
      {
        label:
          "Molders and Molding Machine Setters Operators and Tenders Metal and Plastic",
        value:
          "occupation_Molders_and_Molding_Machine_Setters_Operators_and_Tenders_Metal_and_Plastic",
      },
      {
        label: "Tool and Die Makers",
        value: "occupation_Tool_and_Die_Makers",
      },
      {
        label: "Welding Soldering and Brazing Workers",
        value: "occupation_Welding_Soldering_and_Brazing_Workers",
      },
      {
        label: "Metal workers and plastic workers",
        value: "occupation_Metal_workers_and_plastic_workers_nec",
      },
      {
        label: "Bookbinders Printing Machine Operators and Job Printers",
        value:
          "occupation_Bookbinders_Printing_Machine_Operators_and_Job_Printers",
      },
      {
        label: "Prepress Technicians and Workers",
        value: "occupation_Prepress_Technicians_and_Workers",
      },
      {
        label: "Laundry and Dry-Cleaning Workers",
        value: "occupation_Laundry_and_Dry-Cleaning_Workers",
      },
      {
        label: "Pressers Textile Garment and Related Materials",
        value: "occupation_Pressers_Textile_Garment_and_Related_Materials",
      },
      {
        label: "Sewing Machine Operators",
        value: "occupation_Sewing_Machine_Operators",
      },
      {
        label: "Shoe and Leather Workers and Repairers",
        value: "occupation_Shoe_and_Leather_Workers_and_Repairers",
      },
      {
        label: "Tailors Dressmakers and Sewers",
        value: "occupation_Tailors_Dressmakers_and_Sewers",
      },
      {
        label:
          "Textile Winding Twisting and Drawing Out Machine Setters Operators and Tenders",
        value:
          "occupation_Textile_Winding_Twisting_and_Drawing_Out_Machine_Setters_Operators_and_Tenders",
      },
      { label: "Upholsterers", value: "occupation_Upholsterers" },
      {
        label: "Textile Apparel and Furnishings workers nec",
        value: "occupation_Textile_Apparel_and_Furnishings_workers_nec",
      },
      {
        label: "Cabinetmakers and Bench Carpenters",
        value: "occupation_Cabinetmakers_and_Bench_Carpenters",
      },
      {
        label: "Furniture Finishers",
        value: "occupation_Furniture_Finishers",
      },
      {
        label: "Sawing Machine Setters Operators and Tenders Wood",
        value: "occupation_Sawing_Machine_Setters_Operators_and_Tenders_Wood",
      },
      {
        label:
          "Woodworking Machine Setters Operators and Tenders Except Sawing",
        value:
          "occupation_Woodworking_Machine_Setters_Operators_and_Tenders_Except_Sawing",
      },
      {
        label: "Woodworkers including model makers and patternmakers",
        value:
          "occupation_Woodworkers_including_model_makers_and_patternmakers_nec",
      },
      {
        label: "Power Plant Operators Distributors and Dispatchers",
        value: "occupation_Power_Plant_Operators_Distributors_and_Dispatchers",
      },
      {
        label: "Stationary Engineers and Boiler Operators",
        value: "occupation_Stationary_Engineers_and_Boiler_Operators",
      },
      {
        label: "Water Wastewater Treatment Plant and System Operators",
        value:
          "occupation_Water_Wastewater_Treatment_Plant_and_System_Operators",
      },
      {
        label: "Plant and System Operators",
        value: "occupation_Plant_and_System_Operators_nec",
      },
      {
        label: "Chemical Processing Machine Setters Operators and Tenders",
        value:
          "occupation_Chemical_Processing_Machine_Setters_Operators_and_Tenders",
      },
      {
        label: "Crushing Grinding Polishing Mixing and Blending Workers",
        value:
          "occupation_Crushing_Grinding_Polishing_Mixing_and_Blending_Workers",
      },
      { label: "Cutting Workers", value: "occupation_Cutting_Workers" },
      {
        label:
          "Extruding Forming Pressing and Compacting Machine Setters Operators and Tenders",
        value:
          "occupation_Extruding_Forming_Pressing_and_Compacting_Machine_Setters_Operators_and_Tenders",
      },
      {
        label: "Furnace Kiln Oven Drier and Kettle Operators and Tenders",
        value:
          "occupation_Furnace_Kiln_Oven_Drier_and_Kettle_Operators_and_Tenders",
      },
      {
        label: "Inspectors Testers Sorters Samplers and Weighers",
        value: "occupation_Inspectors_Testers_Sorters_Samplers_and_Weighers",
      },
      {
        label: "Jewelers and Precious Stone and Metal Workers",
        value: "occupation_Jewelers_and_Precious_Stone_and_Metal_Workers",
      },
      {
        label: "Medical Dental and Ophthalmic Laboratory Technicians",
        value:
          "occupation_Medical_Dental_and_Ophthalmic_Laboratory_Technicians",
      },
      {
        label: "Packaging and Filling Machine Operators and Tenders",
        value: "occupation_Packaging_and_Filling_Machine_Operators_and_Tenders",
      },
      {
        label: "Painting Workers and Dyers",
        value: "occupation_Painting_Workers_and_Dyers",
      },
      {
        label: "Photographic Process Workers and Processing Machine Operators",
        value:
          "occupation_Photographic_Process_Workers_and_Processing_Machine_Operators",
      },
      {
        label: "Adhesive Bonding Machine Operators and Tenders",
        value: "occupation_Adhesive_Bonding_Machine_Operators_and_Tenders",
      },
      {
        label: "Etchers Engravers and Lithographers",
        value: "occupation_Etchers_Engravers_and_Lithographers",
      },
      {
        label: "Molders Shapers and Casters Except Metal and Plastic",
        value:
          "occupation_Molders_Shapers_and_Casters_Except_Metal_and_Plastic",
      },
      {
        label: "Paper Goods Machine Setters Operators and Tenders",
        value: "occupation_Paper_Goods_Machine_Setters_Operators_and_Tenders",
      },
      { label: "Tire Builders", value: "occupation_Tire_Builders" },
      {
        label: "Helpers Production Workers",
        value: "occupation_Helpers--Production_Workers",
      },
      {
        label:
          "Other production workers including semiconductor processors and cooling and freezing equipment operators",
        value:
          "occupation_Other_production_workers_including_semiconductor_processors_and_cooling_and_freezing_equipment_operators",
      },
      {
        label: "Supervisors of Transportation and Material Moving Workers",
        value:
          "occupation_Supervisors_of_Transportation_and_Material_Moving_Workers",
      },
      {
        label: "Aircraft Pilots and Flight Engineers",
        value: "occupation_Aircraft_Pilots_and_Flight_Engineers",
      },
      {
        label: "Air Traffic Controllers and Airfield Operations Specialists",
        value:
          "occupation_Air_Traffic_Controllers_and_Airfield_Operations_Specialists",
      },
      {
        label: "Flight Attendants and Transportation Workers and Attendants",
        value:
          "occupation_Flight_Attendants_and_Transportation_Workers_and_Attendants",
      },
      {
        label: "Bus and Ambulance Drivers and Attendants",
        value: "occupation_Bus_and_Ambulance_Drivers_and_Attendants",
      },
      {
        label: "Driver/Sales Workers and Truck Drivers",
        value: "occupation_Driver/Sales_Workers_and_Truck_Drivers",
      },
      {
        label: "Taxi Drivers and Chauffeurs",
        value: "occupation_Taxi_Drivers_and_Chauffeurs",
      },
      {
        label: "Motor Vehicle Operators (All Other)",
        value: "occupation_Motor_Vehicle_Operators_All_Other",
      },
      {
        label: "Locomotive Engineers and Operators",
        value: "occupation_Locomotive_Engineers_and_Operators",
      },
      {
        label: "Railroad Conductors and Yardmasters",
        value: "occupation_Railroad_Conductors_and_Yardmasters",
      },
      {
        label: "Subway Streetcar and Other Rail Transportation Workers",
        value:
          "occupation_Subway_Streetcar_and_Other_Rail_Transportation_Workers",
      },
      {
        label: "Sailors and marine oilers and ship engineers",
        value: "occupation_Sailors_and_marine_oilers_and_ship_engineers",
      },
      {
        label: "Ship and Boat Captains and Operators",
        value: "occupation_Ship_and_Boat_Captains_and_Operators",
      },
      {
        label: "Parking Lot Attendants",
        value: "occupation_Parking_Lot_Attendants",
      },
      {
        label: "Automotive and Watercraft Service Attendants",
        value: "occupation_Automotive_and_Watercraft_Service_Attendants",
      },
      {
        label: "Transportation Inspectors",
        value: "occupation_Transportation_Inspectors",
      },
      {
        label: "Transportation workers",
        value: "occupation_Transportation_workers_nec",
      },
      {
        label: "Crane and Tower Operators",
        value: "occupation_Crane_and_Tower_Operators",
      },
      {
        label: "Conveyor operators and tenders and hoist and winch operators",
        value:
          "occupation_Conveyor_operators_and_tenders_and_hoist_and_winch_operators",
      },
      {
        label: "Industrial Truck and Tractor Operators",
        value: "occupation_Industrial_Truck_and_Tractor_Operators",
      },
      {
        label: "Cleaners of Vehicles and Equipment",
        value: "occupation_Cleaners_of_Vehicles_and_Equipment",
      },
      {
        label: "Laborers and Freight Stock and Material Movers Hand",
        value: "occupation_Laborers_and_Freight_Stock_and_Material_Movers_Hand",
      },
      {
        label: "Machine Feeders and Offbearers",
        value: "occupation_Machine_Feeders_and_Offbearers",
      },
      {
        label: "Packers and Packagers Hand",
        value: "occupation_Packers_and_Packagers_Hand",
      },
      {
        label: "Pumping Station Operators",
        value: "occupation_Pumping_Station_Operators",
      },
      {
        label: "Reuse and Recyclable Material Collectors",
        value: "occupation_Refuse_and_Recyclable_Material_Collectors",
      },
      {
        label: "Material moving workers",
        value: "occupation_Material_moving_workers_nec",
      },
      {
        label: "Military Officer Special and Tactical Operations Leaders",
        value:
          "occupation_Military_Officer_Special_and_Tactical_Operations_Leaders",
      },
      {
        label: "First-Line Enlisted Military Supervisors",
        value: "occupation_First-Line_Enlisted_Military_Supervisors",
      },
      {
        label:
          "Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members",
        value:
          "occupation_Military_Enlisted_Tactical_Operations_and_Air/Weapons_Specialists_and_Crew_Members",
      },
      {
        label: "Military Rank Not Specified",
        value: "occupation_Military_Rank_Not_Specified",
      },
    ],
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options[name]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={onChange}
                value={value}
                label={label}
              />
            )}
          />
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}
