export default async function handler(req, res) {
  const {long, lat} = req.query
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,cloudcover,visibility,windspeed_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise&current_weather=true&forecast_days=1&timezone=auto`);
  const data = await response.json();
  const hourlyData = data.hourly;
  const currentWeatherData = data.current_weather;
  const dataForTime = hourlyData.time.map((time) => {
    const index = hourlyData.time.indexOf(time);
    if (currentWeatherData.time === time) {
      return {
        time,
        temperature: data.current_weather.temperature,
        windspeed: currentWeatherData.windspeed,
        weathercode: currentWeatherData.weathercode,
        precipitation_probability: hourlyData.precipitation_probability[index],
        relativehumidity_2m: hourlyData.relativehumidity_2m[index],
        windspeed_10m: hourlyData.windspeed_10m[index],
        uv_index: hourlyData.uv_index[index],
        apparent_temperature: hourlyData.apparent_temperature[index],
        cloudcover: hourlyData.cloudcover[index],
        visibility: (hourlyData.visibility[index] / 1000).toFixed(3),
        temperature_2m_max: data.daily.temperature_2m_max[0],
        temperature_2m_min: data.daily.temperature_2m_min[0],
        sunrise: data.daily.sunrise[0].slice(-5),
      };
    }
  }).filter((data) => data !== undefined);
  const APIKey = process.env.OPENWEATHERKEY
  const responseCity = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${APIKey}`);
  const dataCity = await responseCity.json();
  return res.status(200).json({data: dataForTime, city: dataCity[0].name});
}