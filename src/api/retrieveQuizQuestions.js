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

// with fetch
const fetchAnimal = async (animal) => {
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
    //const res = await fetch('https://api.thecatapi.com/v1/breeds?api_key=2d4cf1ee-1883-474f-80ab-f931262fd79b');
    const data = await res.json();
    const animalArray = makeAnimalArray(data);
    console.log(animalArray);
    return animalArray;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default function getData() {
  fetchAnimal('dog');
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
