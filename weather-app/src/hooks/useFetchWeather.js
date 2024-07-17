import { useState, useEffect } from "React";

const useFetchWeather = (initialLocation = "London") => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("C");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "4d7cbd0d9f544d18cd63e774e861a657";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

  const mapCurrentWeatherData = (data) => ({
    name: data.name,
    temp: data.main.temp,
    description: data.weather[0].main,
    image: data.weather[0].icon,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    visibility: data.visibility,
    pressure: data.main.pressure,
  });

  const mapForecastData = (data) => {
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

  /**
   * Returns the day of the week or "Tomorrow" if the day is the next day.
   * @param {number} dayIndex - Index of the day.
   * @returns {string} - Day of the week or "Tomorrow".
   */
  const getDayOfWeek = (dayIndex) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    const tomorrow = (today + 1) % 7;
    return dayIndex === tomorrow ? "Tomorrow" : daysOfWeek[dayIndex];
  };

  /**
   * Processes the forecast data to get daily temperature.
   * @param {Array} forecast - Forecast data.
   * @returns {Array} - Daily temperature data excluding today's date.
   */
  const getDailyTemperature = (forecast) => {
    const dailyTemperatures = forecast.reduce((acc, item) => {
      const dateStr = item.date.toDateString();
      if (!acc[dateStr]) {
        acc[dateStr] = {
          date: item.dayOfWeek,
          temp_min: item.temp_min,
          temp_max: item.temp_max,
          image: item.image,
        };
      } else {
        acc[dateStr].temp_min = Math.min(acc[dateStr].temp_min, item.temp_min);
        if (item.temp_max > acc[dateStr].temp_max) {
          acc[dateStr].temp_max = item.temp_max;
          acc[dateStr].image = item.image;
        }
      }
      return acc;
    }, {});

    const today = new Date().toLocaleString("en-us", { weekday: "long" });
    return Object.values(dailyTemperatures).filter(
      (item) => item.date !== today
    );
  };

  const fetchWeather = async (location, type) => {
    try {
      let url, mappedDataFn, setDataFn;

      setIsLoading(true);

      if (type === "current") {
        if (typeof location === "string") {
          url = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
        } else {
          throw new Error("Invalid location format");
        }
        mappedDataFn = mapCurrentWeatherData;
        setDataFn = setCurrentWeatherData;
      } else if (type === "forecast") {
        if (typeof location === "string") {
          url = `${API_FORECAST_URL}?q=${location}&appid=${API_KEY}&units=metric&exclude=hourly,minutely,current`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API_FORECAST_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric&exclude=hourly,minutely,current`;
        } else {
          throw new Error("Invalid location format");
        }
        mappedDataFn = mapForecastData;
        setDataFn = setForecastWeatherData;
      } else {
        throw new Error("Invalid fetch type");
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const mappedData = mappedDataFn(data);
      setDataFn(mappedData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchWeather(initialLocation, "current");
      await fetchWeather(initialLocation, "forecast");
    };

    fetchData();
  }, [initialLocation]);

  const handleTemperatureUnit = (tempInCelsius, unit) => {
    if (unit === "C") {
      return Math.trunc(tempInCelsius);
    }
    return Math.trunc((tempInCelsius * 9) / 5 + 32);
  };

  return {
    currentWeatherData,
    forecastWeatherData,
    error,
    unit,
    isLoading,
    setUnit,
    fetchWeather,
    handleTemperatureUnit,
  };
};

export default useFetchWeather;
