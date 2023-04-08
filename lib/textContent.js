// export const aboutText = [
//   `Artificial intelligence has become an essential tool in our daily lives,
//   from virtual assistants to medical diagnosis, but it is not perfect. In many cases,
//   AI models can have significant biases that can affect decision making and perpetuate
//   discrimination. Our mission is to shed light on the biases present in AI models and
//   their impact on decision making.`,
//   `To showcase the biases that exist in AI models, we have trained multiple dense neural
//   networks using openly available census data from IPUMS2. We have made different models
//   with singular changes to the dataset/inputs to observe the variation in output, determining
//   how impactful specific changes can be on the models’ decision making and accuracy. By observing the effects
//   that certain omissions such as race, religion, sex and many other variables, can have on the
//   accuracy of models, we hope to raise awareness of the importance of addressing biases in AI.`,
//   `Our web application is designed to be interactive and user-friendly. Users can modify various
//   filters and clearly visualize the biases present in the neural networks. We look at metrics such
//   as accuracy, false positive, and false negative rates (both for the entire dataset and for individual
//     groups to find any disparities in performance). Our goal is to educate and empower the public with
//     the knowledge needed to advocate for more inclusive and less biased AI models.`,
//   `Thank you for visiting our website, and we hope you find our content informative and thought-provoking.`,
// ];

export const aboutText = [
  `Imagine you’re working for a bank, advertising firm, or some other business with a lot of data on a large number 
  of people that would like to use this data to predict people’s salaries. How would you suggest doing this? Your 
  mind might jump to machine learning, the incredible technology driving innovation across numerous industries. 
  After all, an application like this, where you have a lot of data and don’t need to be perfectly accurate, seems 
  perfect for a machine learning solution.`,
  `However, the company has an additional requirement: they store information such as people’s race and sex, and 
  they want to ensure that whatever system you suggest is not going to discriminate on these factors. Your solution 
  is simple: just don’t tell the machine learning model these attributes. This seems like a sensible solution. 
  Many methods of reducing discrimination, such as blind recruiting, focus on eliminating unconscious bias by not 
  providing information about characteristics like race or sex to decision makers. Why not use a similar approach here?`,
  `This assumption that removing attributes will prevent bias from appearing in machine learning models is not 
  necessarily true. To demonstrate this, we will train 3 machine learning models to predict salary. The first will 
  be given all information available about a person. The second will not be given information such as sex or race 
  that could lead to discrimination. If blinding a model to certain attributes eliminates bias, then we should see 
  any bias present in the first model’s predictions eliminated in the second model’s predictions. As a test of how 
  much models can learn biases, the third model will be given only information such as sex or race that could lead 
  to discrimination. If models cannot learn bias, this model should be no better at predicting salary than random chance.`,
];

// export const methodologyText = [
//   `Our model was a regression neural network. The original data contained salaries up to a maximum of $615527.
//   In order to reduce the variance, we adjusted the data so the maximum salary was $100k by replacing
//   any values above this threshold with $100k. While this means our model isn’t suitable to predict
//   salaries of extremely high earners, given the mean salary before this adjustment was around $45k
//   (with only 8.5% of people in our training set having a salary above $100k), the model would still
//   be applicable to most people.`,
//   `The Main Model uses every data feature.
//     Its goal is purely to maximize accuracy. The evaluations below were calculated on the test set, which
//     contained 15% of the original data (217324 data points). The distribution of each field was almost
//     exactly equal between the training and test set.`,
//   `The next model is the No Protected Fields Model. This model, similarily to the Main Model, uses all data features.
//   However, we made sure to exclude protected fields. By protected fields, we mean any field that could be considered discriminatory
//   if used when making a financial decisions. Thus, we excluded fields like sex and race. By doing so,
//   we hope to minimize the biases that were found in the two previous models.`,
//   `Lastly, we have the Protected Fields Only Model. This model only uses protected fields in its evaluations. By doing so,
//   we wished to observe the effects and biases that would be minimized/maximized by the sole focus on the protected fields.`
// ];

export const conclusionText = [
  `As demonstrated by our Main model, when provided protected attributes, machine learning models can produce 
  biased results as our Main model did here. However, as shown by our No Protected Fields model, even when not 
  provided these attributes, models can still produce biased results when fed biased data. As demonstrated in our 
  Insights section and given the fact that our Protected Fields Only model was able to achieve results better than 
  random chance, it’s clear that our real world data contains biases.`,
  `These biases may not preclude the deployment of such a model in the real world. Let’s go back to our original 
  thought experiment where you’re an employee tasked with suggesting a system to predict salaries. If certain groups 
  make more on average than others, would you reject a model with predictions that follows these real world trends? 
  Is it your job to try to account or correct for biases that exist in the rest of the world?`,
  `Your answer to these questions will vary depending on many factors, including the planned use case for this model, 
  the size of disparities in predictions, and your own personal beliefs and morals. However, to make a decision like 
  this, you first must know whether biases exist in your training data and trained machine learning models. Our goal 
  with this website is not to tell you the correct decision to make in this specific situation, nor is it to make you 
  pessimistic about the application of machine learning. Instead, we aimed to show how seemingly fair machine learning 
  models can contain biases which can go unnoticed without diligent analysis of the results. We hope you now have an 
  idea of what questions to ask and what metrics to look at when you are confronted with a seemingly impressive machine 
  learning model, especially if you are not experienced with the intricacies of machine learning.`,
];
