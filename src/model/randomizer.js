import { getQuizQuestions } from '../api/getQuizQuestions.js';

export async function getRandomQuizQuestions(animal, numberOfQuestions) {
  const questionToRandomize = await getQuizQuestions(animal);
  const randomQuestions = questionToRandomize.sort(() => Math.random() - 0.5);

  if (numberOfQuestions < randomQuestions.length) {
    const questionSet = randomQuestions.slice(0, numberOfQuestions);
    return questionSet;
  } else {
    return randomQuestions;
  }
}
