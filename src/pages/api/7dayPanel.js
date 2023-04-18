export default async function handler(req, res) {
    const {long, lat} = req.query
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=apparent_temperature_min,sunrise,uv_index_max,precipitation_sum,rain_sum,windspeed_10m_max&timeformat=unixtime&timezone=auto`);
    const data = await response.json();
    if (data.error){
        return res.status(400).json({message: data.reason, error: true});
    }
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const formattedDates = data.daily.time.map(date => {
        const weekday = weekdays[new Date(date * 1000).getDay()];
        return `${weekday}`;
    });
    const formattedData = {
        ...data,
        daily: {
            ...data.daily,
            time: formattedDates,
        },
    };

    return res.status(200).json(formattedData);
}
