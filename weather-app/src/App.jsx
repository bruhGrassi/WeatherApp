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

  const API_KEY = "4d7cbd0d9f544d18cd63e774e861a657";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  useEffect(() => {
    const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (savedWeatherData) {
      setWeatherData(savedWeatherData);
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
    }
  }, [weatherData]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
      return null;
    }
  };

  useEffect(() => {
    const loadDefaultCity = async () => {
      try {
        const cityData = await fetchWeather(currentCity);
        if (cityData) {
          setWeatherData(cityData);
          setError(null);
        }
      } catch (error) {
        console.error("Error loading default city:", error);
        setError(error.message);
      }
    };

    loadDefaultCity();
  }, [currentCity]);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <section className="wrapper">
        <aside className="aside">
          {isSidebar ? (
            <Sidebar handleSidebar={handleSidebar} />
          ) : (
            <TodayWeather handleSidebar={handleSidebar} />
          )}
        </aside>
        <main className="main">
          <div className="main__header">
            <RoundButton variant="primary">°C</RoundButton>
            <RoundButton variant="secondary">°F</RoundButton>
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
              data={"7"}
              unit={"mph"}
              other={true}
            />
            <HighlightCard
              title={"Humidity"}
              data={"84"}
              unit={"%"}
              range={"84"}
            />
            <HighlightCard title={"Visibility"} data={"6,4"} unit={"miles"} />
            <HighlightCard title={"Air Pressure"} data={"998"} unit={"mb"} />
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
