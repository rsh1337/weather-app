export default async function handler (req, res) {
    const { search } = req.query;
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=1&language=en&format=json`);
    const data = await response.json();
    if(!data.results){
        return res.status(400).json({error: true, message:"City not found"});
    }
    return res.status(200).json(data.results[0]);
};
