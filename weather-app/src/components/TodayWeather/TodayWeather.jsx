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
}) => {
  const iconUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;
  return (
    <div className="today-weather">
      <div className="today-weather__header">
        <button className="search__trigger" onClick={handleSidebar}>
          Search for places
        </button>
        <RoundButton
          variant="icon"
          onClick={() => console.log("Icon button clicked")}
        >
          <img src={Crosshair} />
        </RoundButton>
      </div>

      <div className="today-weather__image">
        <img src={iconUrl} alt="Weather Image" />
      </div>
      <div className="today-weather__temperature">
        {temperature}
        <span>°C</span>
      </div>
      <div className="today-weather__climate">{description}</div>
      <div className="today-weather__information">
        <p>
          <span>Today</span> • <span>Fri, 5 Jun</span>
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
