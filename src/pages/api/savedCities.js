export default async function handler(req, res) {
    const {long, lat} = req.query
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&forecast_days=1`);
    const data = await response.json();

    return res.status(200).json(data.current_weather);
}
