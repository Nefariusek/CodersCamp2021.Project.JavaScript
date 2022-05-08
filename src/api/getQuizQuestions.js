import Question from '../model/Question';

const QUESTION_APIS = {
  DOGS: { URL: `${import.meta.env.VITE_DOG_API_URL}`, API_KEY: `${import.meta.env.VITE_DOG_API_KEY}` },
  CATS: { URL: `${import.meta.env.VITE_CAT_API_URL}`, API_KEY: `${import.meta.env.VITE_CAT_API_KEY}` },
};

const QUESTIONS_APIS = {
  DOGS: { URL: 'https://api.thedogapi.com/v1/breeds', API_KEY: '62b8cc9a-2c13-4eec-abe2-80703eabb0a6' },
  CATS: { URL: 'https://api.thecatapi.com/v1/breeds', API_KEY: '2d4cf1ee-1883-474f-80ab-f931262fd79b' },
};
const QUESTION_TEXT = 'Name the breed:';

export const getQuizQuestions = async (animal) => {
  const questions = [];
  const data = await retrieveQuizQuestions(animal);

  if (data) {
    questions.push(...mapDataToQuestions(data));
  }
  return questions;
};

async function retrieveQuizQuestions(animal) {
  const url = QUESTION_APIS[animal].URL;
  const apiKey = QUESTION_APIS[animal].API_KEY;
  console.log(typeof apiKey);
  try {
    const res = await fetch(url, {
      headers: {
        'x-api-key': `${apiKey}`,
      },
    });

    return res.json();
  } catch (error) {
    return console.error('Error:', error);
  }
}

const mapDataToQuestions = (data) => {
  const allQuestions = getQuestionsFromData(data);
  return allQuestions.reduce((acc, q) => {
    if (q.img) {
      acc.push(new Question(q.img, q.name, getFalseAnswers(q.name, allQuestions), QUESTION_TEXT));
    }
    return acc;
  }, []);
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
