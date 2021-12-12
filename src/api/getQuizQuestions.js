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

const getFalseAnswers = (arr) => {
  const falseAnswers = [];
  for (let i = 0; falseAnswers.length < 3; i++) {
    let falseAnswer = arr[Math.floor(Math.random() * arr.length)];
    if (!falseAnswers.includes(falseAnswer)) {
      falseAnswers.push(falseAnswer.name);
    }
  }
  return falseAnswers;
};

const prepareQuiz = (arr, numberOfQuestions) => {
  const questions = [];
  for (let questionNumber = 1; questionNumber <= numberOfQuestions; questionNumber++) {
    const animal = arr[Math.floor(Math.random() * arr.length)];
    console.log('Question number: ', questionNumber, ' answer is: ', animal);

    arr.splice(arr.indexOf(animal), 1);
    const falseAnswers = getFalseAnswers(arr);

    console.log('correct: ', animal, 'falseAnswers: ', falseAnswers);
    questions.push({
      questionNumber,
      animal,
      falseAnswers,
    });
  }
  console.log('array of questions', questions);
  return questions;
};

const getQuizQuestions = async (animal, numberOfQuestions) => {
  try {
    let animalType = {};

    switch (animal) {
      case 'CATS':
        animalType = { ...questionsApis.CATS };
        break;
      case 'DOGS':
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

export default getQuizQuestions;
