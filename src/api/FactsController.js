export async function retrieveAnimalFact() {
  const animalTypes = ['dog', 'cat'];
  const randomAnimalType = randomIntFromInterval(0, animalTypes.length - 1);
  const animalType = animalTypes[randomAnimalType];
  const FACT_URL = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=1`;

  const response = await fetch(FACT_URL);
  const json = await response.json();
  return json.text;
}

function randomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
