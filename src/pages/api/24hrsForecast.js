export default async function handler (req, res) {
    const { long, lat } = req.query;
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode&timeformat=unixtime&forecast_days=1&timezone=auto`);
    const data = await response.json();
    if (data.error){
        return res.status(400).json({message: data.reason, error: true});
    }
    const formattedHourly = data.hourly.time.map(date => {
        return new Date(date * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    });
    const formattedData = {
        ...data,
        hourly: {
            ...data.hourly,
            time: formattedHourly,
        },
    };
    return res.status(200).json(formattedData);
};
