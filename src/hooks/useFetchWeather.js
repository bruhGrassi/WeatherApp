import { useState, useEffect, useCallback } from "react";
import { mapCurrentWeatherData, mapForecastData } from "../lib/mappers";
import { WEATHER_TYPES, API, UNITS, API_KEY } from "../constants";

const useFetchWeather = (initialLocation) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState(UNITS.CELSIUS);
  const [isLoading, setIsLoading] = useState(true);

  const buildWeatherUrl = (location, type) => {
    const baseEndpoint =
      type === WEATHER_TYPES.CURRENT ? API.CURRENT_URL : API.FORECAST_URL;
    const locationQuery =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location.lat}&lon=${location.lon}`;
    return `${baseEndpoint}?${locationQuery}&appid=${API_KEY}&units=metric`;
  };

  const fetchWeatherData = async (location, type) => {
    setIsLoading(true);
    try {
      const url = buildWeatherUrl(location, type);

      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      if (type === WEATHER_TYPES.CURRENT) {
        setCurrentWeatherData(mapCurrentWeatherData(data));
      } else {
        setForecastWeatherData(mapForecastData(data));
      }

      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const fetchWeatherForLocation = useCallback(async (location) => {
    setError(null);
    setIsLoading(true);
    const results = await Promise.all([
      fetchWeatherData(location, WEATHER_TYPES.CURRENT),
      fetchWeatherData(location, WEATHER_TYPES.FORECAST),
    ]);
    setIsLoading(false);
    return results.every((result) => result);
  }, []);

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
  }, [fetchWeatherForLocation, initialLocation]);

  const handleTemperatureUnit = (tempInCelsius, unit) => {
    if (unit === UNITS.CELSIUS) {
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
    fetchWeatherForLocation,
    handleTemperatureUnit,
  };
};

export default useFetchWeather;
