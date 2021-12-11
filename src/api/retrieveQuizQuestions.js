//const axios = require('axios').default;

const questionsApis = {
  DOGS: { url: 'https://api.thedogapi.com/v1/breeds', api_key: '62b8cc9a-2c13-4eec-abe2-80703eabb0a6' },
  CATS: { url: 'https://api.thecatapi.com/v1/breeds', api_key: '2d4cf1ee-1883-474f-80ab-f931262fd79b' },
};

const makeAnimalArray = (data) => {
  const questions = data.map((record) => {
    const animal = {
      name: record.name,
      img: record.image,
    };
    return animal;
  });
  return questions;
};

const prepareQuiz = (arr, numberOfQuestions) => {
  const questions = [];
  for (let questionNumber = 1; questionNumber <= numberOfQuestions; questionNumber++) {
    const animal = arr[Math.floor(Math.random() * arr.length)];
    console.log('Question number: ', questionNumber, ' answer is: ', animal);
    const incorrectAnswers = [];

    arr.splice(arr.indexOf(animal), 1);

    for (let i = 0; incorrectAnswers.length < 3; i++) {
      let incorrect = arr[Math.floor(Math.random() * arr.length)];
      if (!incorrectAnswers.includes(incorrect)) {
        incorrectAnswers.push(incorrect.name);
      }
    }
    console.log('correct: ', animal, 'incorrect: ', incorrectAnswers);
    questions.push({
      questionNumber,
      animal,
      incorrectAnswers,
    });
  }
  console.log('array of questions', questions);
  return questions;
};

// with fetch
const getQuizQuestions = async (animal, numberOfQuestions) => {
  try {
    let animalType = {};
    switch (animal) {
      case 'cat':
        animalType = { ...questionsApis.CATS };
        break;
      case 'dog':
        animalType = { ...questionsApis.DOGS };
        break;
      default:
        console.log('Provide valid animal: cat/dog');
    }
    const res = await fetch(animalType.url, {
      headers: {
        'x-api-key': animalType.api_key,
      },
    });
    const data = await res.json();
    const animalArray = makeAnimalArray(data);
    console.log('default fetched', animalArray);

    prepareQuiz(animalArray, numberOfQuestions);

    return animalArray;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default function retrieveQuizQuestions(animalSpecies, numberOfQuestions) {
  getQuizQuestions(animalSpecies, numberOfQuestions);
}

/* using axios
async function fetchData() {
  try {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/breeds?api_key=2d4cf1ee-1883-474f-80ab-f931262fd79b',
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/
