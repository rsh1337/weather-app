export default async function handler(req, res) {
  const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=piatra+neamt&count=1&language=en&format=json')
  const data = await response.json();
  console.log(data)
  return res.status(200).json({error: false, data: data})
}