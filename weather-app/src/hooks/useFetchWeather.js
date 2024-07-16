import { useState, useEffect } from "React";

const useFetchWeather = (initialLocation = "London") => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("C");

  const API_KEY = "4d7cbd0d9f544d18cd63e774e861a657";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

  const mapCurrentWeatherData = (data) => {
    return {
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].main,
      image: data.weather[0].icon,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      visibility: data.visibility,
      pressure: data.main.pressure,
    };
  };

  const mapForecastData = (data) => {
    return data.list.slice(0, 5).map((item) => ({
      date: new Date(item.dt * 1000).toLocaleDateString(),
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      description: item.weather[0].main,
      image: item.weather[0].icon,
    }));
  };

  const fetchWeather = async (location, type) => {
    try {
      let url, mappedDataFn, setDataFn;

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
          url = `${API_FORECAST_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API_FORECAST_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
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

      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchWeather(initialLocation, "current");
    fetchWeather(initialLocation, "forecast");
  }, [initialLocation]);

  const handleTemperatureUnit = (tempInCelsius, unit) => {
    if (unit === "C") {
      return Math.trunc(tempInCelsius);
    }
    const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
    return Math.trunc(tempInFahrenheit);
  };

  return {
    currentWeatherData,
    forecastWeatherData,
    error,
    unit,
    setUnit,
    fetchWeather,
    handleTemperatureUnit,
  };
};

export default useFetchWeather;
