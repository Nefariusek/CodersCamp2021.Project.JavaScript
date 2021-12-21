export async function retrieveAnimalFact() {
  const animalTypes = ['dog', 'cat'];
  const randomNumber = randomIntFromInterval(0, animalTypes.length - 1);
  const randomAnimalType = animalTypes[randomNumber];
  const fact_urls = {
    SENTENCE_URL: `https://cat-fact.herokuapp.com/facts/random?animal_type=${randomAnimalType}&amount=1`,
    IMG_URL: `https://api.the${randomAnimalType}api.com/v1/images/search?size=full`,
  };

  try {
    const [factResponse, imgResponse] = await Promise.all([fetch(fact_urls.SENTENCE_URL), fetch(fact_urls.IMG_URL)]);

    const factJson = await factResponse.json();
    const imgJson = await imgResponse.json();
    return [factJson.text, imgJson[0].url];
  } catch (e) {
    console.error('Error while retrieving the fact from API. ' + e);
  }
}

function randomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
