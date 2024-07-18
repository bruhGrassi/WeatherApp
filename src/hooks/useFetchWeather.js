import { useState, useEffect } from "react";
import { mapCurrentWeatherData, mapForecastData } from "../lib/mappers";

const useFetchWeather = (initialLocation = "London") => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("C");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "4d7cbd0d9f544d18cd63e774e861a657";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchWeather = async (location, type) => {
    setError("");

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
          url = `${API_FORECAST_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API_FORECAST_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units`;
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

      return true;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);

      return false;
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
