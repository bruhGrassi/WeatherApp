import { useState, useEffect } from "react";
import useFetchWeather from "./hooks/useFetchWeather";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import LocationSearch from "./components/LocationSearch/LocationSearch";
import RoundButton from "./components/RoundButton/RoundButton";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import Skeleton from "./components/Skeleton/Skeleton";
import { WEATHER_TYPES, UNITS } from "./constants";
import "./App.css";

function App() {
  const initialLocation = "Firenze";
  const {
    currentWeatherData,
    forecastWeatherData,
    error,
    unit,
    isLoading,
    setUnit,
    fetchWeatherForLocation,
    handleTemperatureUnit,
  } = useFetchWeather(initialLocation);
  const [isLocationSearchOpen, setIsLocationSearchOpen] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedLocations = localStorage.getItem("locations");
    if (storedLocations) {
      setLocations(JSON.parse(storedLocations));
    }
  }, []);

  useEffect(() => {
    if (locations.length > 0) {
      localStorage.setItem("locations", JSON.stringify(locations));
    }
  }, [locations]);

  const handleLocationSearch = async (location) => {
    const isValidLocation = await fetchWeatherForLocation(location);

    if (isValidLocation && typeof location === "string") {
      setLocations((prevLocations) =>
        !prevLocations.includes(location)
          ? [...prevLocations, location]
          : prevLocations
      );
    }

    handleLocationSearchVisibility();
  };

  const handleListSearch = async (location) => {
    handleLocationSearch(location);
  };

  const handleLocationSearchVisibility = () => {
    setIsLocationSearchOpen((prev) => !prev);
  };

  const handleCurrentLocationPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleLocationSearch({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <Skeleton />
      ) : (
        <section className="wrapper">
          <aside className="aside">
            <LocationSearch
              handleLocationSearchVisibility={handleLocationSearchVisibility}
              handleLocationSearch={handleLocationSearch}
              error={error}
              isLocationSearchOpen={isLocationSearchOpen}
              locations={locations}
              handleListSearch={handleListSearch}
              setLocations={setLocations}
            />

            <TodayWeather
              cityName={currentWeatherData.name}
              temperature={handleTemperatureUnit(currentWeatherData.temp, unit)}
              description={currentWeatherData.description}
              image={currentWeatherData.image}
              unit={unit}
              handleLocationSearchVisibility={handleLocationSearchVisibility}
              handleOnGeolocationClick={handleCurrentLocationPosition}
            />
          </aside>
          <main className="main">
            <div className="main__header">
              <RoundButton
                variant="primary"
                isActive={unit === UNITS.CELSIUS}
                onClick={() => setUnit(UNITS.CELSIUS)}
              >
                °C
              </RoundButton>
              <RoundButton
                variant="primary"
                isActive={unit === UNITS.FAHRENHEIT}
                onClick={() => setUnit(UNITS.FAHRENHEIT)}
              >
                °F
              </RoundButton>
            </div>

            <div className="main__weather">
              {forecastWeatherData.map((forecastItem, index) => (
                <WeatherCard
                  key={index}
                  date={forecastItem.date}
                  min_temp={handleTemperatureUnit(forecastItem.temp_min, unit)}
                  max_temp={handleTemperatureUnit(forecastItem.temp_max, unit)}
                  image={forecastItem.image}
                  unit={unit}
                />
              ))}
            </div>
            <p className="main__highlight--text">Today's Highlight</p>

            <div className="main__highlight">
              <HighlightCard
                title={"Wind status"}
                data={currentWeatherData.wind}
                unit={"mph"}
                other={true}
              />
              <HighlightCard
                title={"Humidity"}
                data={currentWeatherData.humidity}
                unit={"%"}
                range={currentWeatherData.humidity}
              />
              <HighlightCard
                title={"Visibility"}
                data={currentWeatherData.visibility}
                unit={"miles"}
              />
              <HighlightCard
                title={"Air Pressure"}
                data={currentWeatherData.pressure}
                unit={"mb"}
              />
            </div>

            <a
              href="https://github.com/bruhGrassi"
              target="_blank"
              className="link"
            >
              Create by <span>Bruna Grassi</span>
            </a>
          </main>
        </section>
      )}
    </div>
  );
}

export default App;
