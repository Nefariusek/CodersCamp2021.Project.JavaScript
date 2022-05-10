import { getQuizQuestions } from '../services/quizService';

export async function getRandomQuizQuestions(animal, numberOfQuestions) {
  const questionToRandomize = await getQuizQuestions(animal);
  const randomQuestions = questionToRandomize.sort(() => Math.random() - 0.5);

  if (numberOfQuestions < randomQuestions.length) {
    return randomQuestions.slice(0, numberOfQuestions);
  }
  return randomQuestions;
}
