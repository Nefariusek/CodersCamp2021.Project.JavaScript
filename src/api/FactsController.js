export async function retrieveAnimalFact() {
  const animalTypes = ['dog', 'cat'];
  const randomNumber = getRandomIntFromInterval(0, animalTypes.length - 1);
  const randomAnimalType = animalTypes[randomNumber];
  const factUrl = `https://cat-fact.herokuapp.com/facts/random?animal_type=${randomAnimalType}&amount=1`;

  try {
    const response = await fetch(factUrl);
    const json = await response.json();
    return json.text;
  } catch (e) {
    console.error('Error while retrieving the fact from API. ' + e);
  }
}

function getRandomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
