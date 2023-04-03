export const aboutText = [
  `Artificial intelligence has become an essential tool in our daily lives, 
  from virtual assistants to medical diagnosis, but it is not perfect. In many cases, 
  AI models can have significant biases that can affect decision making and perpetuate 
  discrimination. Our mission is to shed light on the biases present in AI models and 
  their impact on decision making.`,
  `To showcase the biases that exist in AI models, we have trained multiple dense neural 
  networks using openly available census data from IPUMS2. We have made different models 
  with singular changes to the dataset/inputs to observe the variation in output, determining 
  how impactful specific changes can be on the models’ decision making and accuracy. By observing the effects 
  that certain omissions such as race, religion, sex and many other variables, can have on the 
  accuracy of models, we hope to raise awareness of the importance of addressing biases in AI.`,
  `Our web application is designed to be interactive and user-friendly. Users can modify various 
  filters and clearly visualize the biases present in the neural networks. We look at metrics such 
  as accuracy, false positive, and false negative rates (both for the entire dataset and for individual 
    groups to find any disparities in performance). Our goal is to educate and empower the public with 
    the knowledge needed to advocate for more inclusive and less biased AI models.`,
  `Thank you for visiting our website, and we hope you find our content informative and thought-provoking.`,
];

export const methodologyText = [
  `Our model was a regression neural network. The original data contained salaries up to a maximum of $615527. 
  In order to reduce the variance, we adjusted the data so the maximum salary was $100k by replacing 
  any values above this threshold with $100k. While this means our model isn’t suitable to predict 
  salaries of extremely high earners, given the mean salary before this adjustment was around $45k 
  (with only 8.5% of people in our training set having a salary above $100k), the model would still 
  be applicable to most people.`,
  `The Main Model uses every data feature. 
    Its goal is purely to maximize accuracy. The evaluations below were calculated on the test set, which 
    contained 15% of the original data (217324 data points). The distribution of each field was almost 
    exactly equal between the training and test set.`,
  `The next model is the No Protected Fields Model. This model, similarily to the Main Model, uses all data features.
  However, we made sure to exclude protected fields. By protected fields, we mean any field that could be considered discriminatory 
  if used when making a financial decisions. Thus, we excluded fields like sex and race. By doing so,
  we hope to minimize the biases that were found in the two previous models.`,
  `Lastly, we have the Protected Fields Only Model. This model only uses protected fields in its evaluations. By doing so,
  we wished to observe the effects and biases that would be minimized/maximized by the sole focus on the protected fields.`
];
