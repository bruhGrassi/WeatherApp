import { useState, useEffect } from "React";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import Sidebar from "./components/Sidebar/Sidebar";
import RoundButton from "./components/RoundButton/RoundButton";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import "./App.css";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [currentCity, setCurrentCity] = useState("London");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("C");

  const API_KEY = "4d7cbd0d9f544d18cd63e774e861a657";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const mapWeatherData = (data) => {
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

  const fetchWeather = async (location) => {
    try {
      let url;

      if (typeof location === "string") {
        url = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${API_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const mappedData = mapWeatherData(data);
      setWeatherData(mappedData); //setWeatherData is asynchronous, so the state update is not immediate
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchWeather(currentCity);
  }, []);

  useEffect(() => {
    if (weatherData) {
      console.log("Updated weatherData", weatherData);
    }
  }, [weatherData]);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleTemperatureUnit = (tempInCelsius, unit) => {
    if (unit === "C") {
      return Math.trunc(tempInCelsius);
    }
    const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
    return Math.trunc(tempInFahrenheit);
  };

  return (
    <>
      <div>
        {weatherData ? (
          <section className="wrapper">
            <aside className="aside">
              {isSidebar ? (
                <Sidebar
                  handleSidebar={handleSidebar}
                  fetchWeather={fetchWeather}
                />
              ) : (
                <TodayWeather
                  cityName={weatherData.name}
                  temperature={handleTemperatureUnit(weatherData.temp, unit)}
                  description={weatherData.description}
                  image={weatherData.image}
                  unit={unit}
                  handleSidebar={handleSidebar}
                  fetchWeather={fetchWeather}
                />
              )}
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
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
              </div>
              <p className="main__highlight--text">Today's Highlight</p>

              <div className="main__highlight">
                <HighlightCard
                  title={"Wind status"}
                  data={weatherData.wind}
                  unit={"mph"}
                  other={true}
                />
                <HighlightCard
                  title={"Humidity"}
                  data={weatherData.humidity}
                  unit={"%"}
                  range={weatherData.humidity}
                />
                <HighlightCard
                  title={"Visibility"}
                  data={weatherData.visibility}
                  unit={"miles"}
                />
                <HighlightCard
                  title={"Air Pressure"}
                  data={weatherData.pressure}
                  unit={"mb"}
                />
              </div>
            </main>
          </section>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}

export default App;
