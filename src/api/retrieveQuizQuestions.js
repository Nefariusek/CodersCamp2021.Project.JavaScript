//const axios = require('axios').default;
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
const fetchData = async () => {
  console.log('im stuck in fetch');
  try {
    console.log('heelp');
    const res = await fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': '2d4cf1ee-1883-474f-80ab-f931262fd79b',
      },
    });
    //const res = await fetch('https://api.thecatapi.com/v1/breeds?api_key=2d4cf1ee-1883-474f-80ab-f931262fd79b');
    const data = await res.json();
    const animalArray = makeAnimalArray(data);
    console.log(animalArray);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default function getData() {
  fetchData();
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
