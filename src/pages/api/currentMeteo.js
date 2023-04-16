export default async function handler(req, res) {
  const {long, lat} = req.query
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m,uv_index&current_weather=true`);
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
      };
    }
  }).filter((data) => data !== undefined);
  const APIKey = process.env.OPENWEATHERKEY
  const responseCity = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${APIKey}`);
  const dataCity = await responseCity.json();
  return res.status(200).json({data: dataForTime, city: dataCity[0].name});
}