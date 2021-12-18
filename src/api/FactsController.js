export async function retrieveAnimalFact() {
  const FACT_URL = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;

  const response = await fetch(FACT_URL);
  const json = await response.json();
  return json.text;
}
