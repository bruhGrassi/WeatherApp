import { useState, useEffect } from "react";
import { mapCurrentWeatherData, mapForecastData } from "../lib/mappers";
import { WEATHER_TYPES, API, UNITS } from "../constants";
import { API_KEY } from "../config";

const useFetchWeather = (initialLocation = "London") => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState(UNITS.CELCIUS);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (location, type) => {
    setError("");

    try {
      let url, mappedDataFn, setDataFn;

      setIsLoading(true);

      if (type === WEATHER_TYPES.CURRENT) {
        if (typeof location === "string") {
          url = `${API.CURRENT_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API.CURRENT_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
        } else {
          throw new Error("Invalid location format");
        }
        mappedDataFn = mapCurrentWeatherData;
        setDataFn = setCurrentWeatherData;
      } else if (type === WEATHER_TYPES.FORECAST) {
        if (typeof location === "string") {
          url = `${API.FORECAST_URL}?q=${location}&appid=${API_KEY}&units=metric`;
        } else if (
          typeof location === "object" &&
          location.lat &&
          location.lon
        ) {
          url = `${API.FORECAST_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units`;
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
      await fetchWeather(initialLocation, WEATHER_TYPES.CURRENT);
      await fetchWeather(initialLocation, WEATHER_TYPES.FORECAST);
    };

    fetchData();
  }, [initialLocation]);

  const handleTemperatureUnit = (tempInCelsius, unit) => {
    if (unit === UNITS.CELCIUS) {
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
