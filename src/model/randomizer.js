/*As a user, I want to quiz with the exact number of questions in my quiz. Those questions are random each time I start a new quiz.

Acceptance criteria
Verify, consult and update before starting.

 Exact number of questions is shown (based on the user's input from Quiz settings);
 Questions are random each time the quiz is opened;
Additional notes
This functionality should be stored in a separate .js file.
As an input, an array with all retrieved Questions will be given. */
import { getQuizQuestions } from '../api/getQuizQuestions.js';

export async function questionRandomizer(animal) {
  const questions = await getQuizQuestions(animal);
  const randomQuestions = [...questions];
  randomQuestions.sort(() => Math.random() - 0.5);
  return randomQuestions;
}
