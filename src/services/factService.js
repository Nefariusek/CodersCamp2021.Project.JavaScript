export async function retrieveAnimalFact() {
  const animalTypes = ['dog', 'cat'];
  const randomInt = randomIntFromInterval(0, animalTypes.length - 1);
  const randomAnimalType = animalTypes[randomInt];
  const factUrls = {
    sentenceUrl: `https://cat-fact.herokuapp.com/facts/random?animal_type=${randomAnimalType}&amount=1`,
    imageUrl: `https://api.the${randomAnimalType}api.com/v1/images/search?size=med`,
  };

  try {
    const [factResponse, imgResponse] = await Promise.all([fetch(factUrls.sentenceUrl), fetch(factUrls.imageUrl)]);
    const [factJson, imgJson] = await Promise.all([factResponse.json(), imgResponse.json()]);
    return {
      fact: factJson.text,
      imageUrl: imgJson[0].url,
    };
  } catch (e) {
    console.error(`Error while retrieving the fact from API. ${e}`);
    return { fact: null, imageUrl: null };
  }
}

function randomIntFromInterval(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
