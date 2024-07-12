import Pin from "../../assets/icons/pin.png";
import Crosshair from "../../assets/icons/crosshair.png";
import RoundButton from "../../components/RoundButton/RoundButton";
import "./TodayWeather.css";

const TodayWeather = ({
  handleSidebar,
  cityName,
  temperature,
  description,
  image,
  unit,
  fetchWeather,
}) => {
  const iconUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;
  const options = { weekday: "short", month: "short", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather({ lat: latitude, lon: longitude });
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
    <div className="today-weather">
      <div className="today-weather__header">
        <button className="search__trigger" onClick={handleSidebar}>
          Search for places
        </button>
        <RoundButton variant="icon" onClick={getCurrentLocationWeather}>
          <img src={Crosshair} />
        </RoundButton>
      </div>

      <div className="today-weather__image">
        <img src={iconUrl} alt="Weather Image" />
      </div>
      <div className="today-weather__temperature">
        {temperature}
        <span>°{unit === "C" ? "C" : "F"}</span>
      </div>
      <div className="today-weather__climate">{description}</div>
      <div className="today-weather__information">
        <p>
          <span>Today</span> • <span>{today}</span>
        </p>
        <p>
          <img src={Pin} alt={Pin} />
          {cityName}
        </p>
      </div>
    </div>
  );
};

export default TodayWeather;
