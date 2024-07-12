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

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
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

  return (
    <>
      <div>
        {weatherData ? (
          <section className="wrapper">
            <aside className="aside">
              {isSidebar ? (
                <Sidebar handleSidebar={handleSidebar} />
              ) : (
                <TodayWeather
                  cityName={weatherData.name}
                  temperature={weatherData.temp}
                  description={weatherData.description}
                  image={weatherData.image}
                  handleSidebar={handleSidebar}
                />
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
