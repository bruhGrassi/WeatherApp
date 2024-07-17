import { useState, useEffect } from "React";
import useFetchWeather from "./hooks/useFetchWeather";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import OffCanvas from "./components/OffCanvas/OffCanvas";
import RoundButton from "./components/RoundButton/RoundButton";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import Skeleton from "./components/Skeleton/Skeleton";
import "./App.css";

function App() {
  const {
    currentWeatherData,
    forecastWeatherData,
    error,
    unit,
    isLoading,
    setUnit,
    fetchWeather,
    handleTemperatureUnit,
  } = useFetchWeather("London");
  const [isOffCanvas, setIsOffCanvas] = useState(false);
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

  const handleLocationSearched = async (location) => {
    const isSuccessful = await fetchWeather(location, "current");
    if (isSuccessful && typeof location === "string") {
      setLocations((locations) => {
        if (!locations.includes(location)) {
          return [...locations, location];
        }
        return locations;
      });
      handleSidebar();
    }
    await fetchWeather(location, "forecast");
  };

  const handleListSearch = async (location) => {
    handleLocationSearched(location);
  };

  const handleSidebar = () => {
    setIsOffCanvas(!isOffCanvas);
  };

  const handleCurrentLocationPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleLocationSearched({ lat: latitude, lon: longitude });
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
    <>
      <div className="container">
        {isLoading ? (
          <Skeleton />
        ) : (
          <section className="wrapper">
            <aside className="aside">
              <OffCanvas
                handleSidebar={handleSidebar}
                handleLocationSearched={handleLocationSearched}
                error={error}
                isOffCanvas={isOffCanvas}
                locations={locations}
                handleListSearch={handleListSearch}
                setLocations={setLocations}
              />

              <TodayWeather
                cityName={currentWeatherData.name}
                temperature={handleTemperatureUnit(
                  currentWeatherData.temp,
                  unit
                )}
                description={currentWeatherData.description}
                image={currentWeatherData.image}
                unit={unit}
                handleSidebar={handleSidebar}
                handleOnClick={handleCurrentLocationPosition}
              />
            </aside>
            <main className="main">
              <div className="main__header">
                <RoundButton
                  variant="primary"
                  isActive={unit === "C"}
                  onClick={() => setUnit("C")}
                >
                  °C
                </RoundButton>
                <RoundButton
                  variant="primary"
                  isActive={unit === "F"}
                  onClick={() => setUnit("F")}
                >
                  °F
                </RoundButton>
              </div>

              <div className="main__weather">
                {forecastWeatherData.map((forecastItem, index) => (
                  <WeatherCard
                    key={index}
                    date={forecastItem.date}
                    min_temp={handleTemperatureUnit(
                      forecastItem.temp_min,
                      unit
                    )}
                    max_temp={handleTemperatureUnit(
                      forecastItem.temp_max,
                      unit
                    )}
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
            </main>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
