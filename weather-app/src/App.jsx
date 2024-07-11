import { useState } from "React";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import Sidebar from "./components/Sidebar/Sidebar";
import RoundButton from "./components/RoundButton/RoundButton";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import HighlightCard from "./components/HighlightCard/HighlightCard";
import "./App.css";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

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
