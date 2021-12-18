import Question from '../model/question.js';

const QUESTION_TEXT = 'Name the breed:';

const questionsApis = {
  DOGS: { url: 'https://api.thedogapi.com/v1/breeds', api_key: '62b8cc9a-2c13-4eec-abe2-80703eabb0a6' },
  CATS: { url: 'https://api.thecatapi.com/v1/breeds', api_key: '2d4cf1ee-1883-474f-80ab-f931262fd79b' },
};

export const getQuizQuestions = async (animal, numberOfQuestions) => {
  const questions = [];
  const data = await retrieveQuizQuestions(animal);

  if (data) {
    questions.push(...mapDataToQuestions(data));
  }
  return questions;
};

async function retrieveQuizQuestions(animal) {
  try {
    const res = await fetch(questionsApis[animal].url, {
      headers: {
        'x-api-key': questionsApis[animal].api_key,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const mapDataToQuestions = (data) => {
  const allQuestions = getQuestionsFromData(data);
  const quizQuestions = [];
  allQuestions.forEach((q) => {
    const question = new Question(q.img, q.name, getFalseAnswers(q.name, allQuestions), QUESTION_TEXT);
    quizQuestions.push(question);
  });

  return quizQuestions;
};

const getQuestionsFromData = (data) => {
  return data.map((record) => ({
    name: record.name,
    img: record.image?.url,
  }));
};

const getFalseAnswers = (correctAnswer, allAnswers) => {
  const falseAnswers = [];
  while (falseAnswers.length < 3) {
    const falseAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];

    if (!falseAnswers.some((answer) => answer === falseAnswer.name) && falseAnswer.name !== correctAnswer) {
      falseAnswers.push(falseAnswer.name);
    }
  }

  return falseAnswers;
};
