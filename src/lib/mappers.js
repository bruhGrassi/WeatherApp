import { getDayOfWeek } from "./dates";
import { getDailyTemperature } from "./get-daily-temperature";

export const mapCurrentWeatherData = (data) => ({
  name: data.name,
  temp: data.main.temp,
  description: data.weather[0].main,
  image: data.weather[0].icon,
  wind: data.wind.speed,
  humidity: data.main.humidity,
  visibility: data.visibility,
  pressure: data.main.pressure,
});

export const mapForecastData = (data) => {
  const forecast = data.list.map((item) => {
    const date = new Date(item.dt * 1000);
    return {
      date,
      dayOfWeek: getDayOfWeek(date.getDay()),
      temp_min: Math.trunc(item.main.temp_min),
      temp_max: Math.trunc(item.main.temp_max),
      image: item.weather[0].icon,
      hour: date.getHours(),
    };
  });
  return getDailyTemperature(forecast);
};
