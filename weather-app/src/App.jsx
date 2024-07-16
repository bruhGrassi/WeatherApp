import { useState, useEffect } from "React";
import useFetchWeather from "./hooks/useFetchWeather";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import Sidebar from "./components/Sidebar/Sidebar";
import RoundButton from "./components/RoundButton/RoundButton";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import "./App.css";

function App() {
  const {
    currentWeatherData,
    forecastWeatherData,
    error,
    unit,
    setUnit,
    handleTemperatureUnit,
  } = useFetchWeather("London");
  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <div>
        {currentWeatherData.name ? (
          <section className="wrapper">
            <aside className="aside">
              {isSidebar ? (
                <Sidebar handleSidebar={handleSidebar} />
              ) : (
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
