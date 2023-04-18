export default async function handler(req, res) {
    const {long, lat} = req.query
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&forecast_days=1&timezone=auto`);
    const data = await response.json();
    if (data.error){
        return res.status(400).json({message: data.reason, error: true});
    }

    return res.status(200).json(data);
}
