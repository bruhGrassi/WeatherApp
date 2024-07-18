import { useState, useEffect } from "react";
import { mapCurrentWeatherData, mapForecastData } from "../lib/mappers";
import { WEATHER_TYPES, API, UNITS } from "../constants";
import { API_KEY } from "../config";

const useFetchWeather = (initialLocation) => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState(UNITS.CELCIUS);
  const [isLoading, setIsLoading] = useState(true);

  const generateUrl = (location, type, apiKey) => {
    const baseEndpoint =
      type === WEATHER_TYPES.CURRENT ? API.CURRENT_URL : API.FORECAST_URL;
    let url = "";

    if (typeof location === "string") {
      url = `${baseEndpoint}?q=${location}&appid=${apiKey}&units=metric`;
    } else if (typeof location === "object" && location.lat && location.lon) {
      url = `${baseEndpoint}?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`;
    } else {
      throw new Error("Invalid location format");
    }

    return url;
  };

  const fetchWeather = async (location, type) => {
    setError("");
    setIsLoading(true);

    try {
      const apiKey = API_KEY;
      const url = generateUrl(location, type, apiKey);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const mappedData =
        type === WEATHER_TYPES.CURRENT
          ? mapCurrentWeatherData(data)
          : mapForecastData(data);

      if (type === WEATHER_TYPES.CURRENT) {
        setCurrentWeatherData(mappedData);
      } else if (type === WEATHER_TYPES.FORECAST) {
        setForecastWeatherData(mappedData);
      }

      return true;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeatherForLocation = async (location) => {
    await fetchWeather(location, WEATHER_TYPES.CURRENT);
    await fetchWeather(location, WEATHER_TYPES.FORECAST);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            await fetchWeatherForLocation({ lat: latitude, lon: longitude });
          },
          async (error) => {
            console.error("Geolocation error:", error);
            await fetchWeatherForLocation(initialLocation);
          }
        );
      } else {
        await fetchWeatherForLocation(initialLocation);
      }
    };

    fetchData();
  }, []);

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
