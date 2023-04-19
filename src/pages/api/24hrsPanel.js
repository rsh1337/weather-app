export default async function handler(req, res) {
    const {long, lat, option} = req.query
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=${option}&forecast_days=1&timeformat=unixtime`);
    const data = await response.json();
    if (data.error){
        return res.status(400).json({message: data.reason, error: true});
    }

    return res.status(200).json(data);
}
