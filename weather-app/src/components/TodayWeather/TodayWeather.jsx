import "./TodayWeather.css";
import IsoRainSwrsDay from "../../assets/images/IsoRainSwrsDay.png";
import Pin from "../../assets/icons/pin.png";
import Crosshair from "../../assets/icons/crosshair.png";
import RoundButton from "../../components/RoundButton/RoundButton";

const TodayWeather = () => {
  return (
    <div className="today-weather">
      <div className="today-weather__header">
        <button className="search__trigger">Search for places</button>
        <RoundButton
          variant="icon"
          onClick={() => console.log("Icon button clicked")}
        >
          <img src={Crosshair} />
        </RoundButton>
      </div>

      <div className="today-weather__image">
        <img src={IsoRainSwrsDay} alt="Weather Image" />
      </div>
      <div className="today-weather__temperature">
        15<span>°C</span>
      </div>
      <div className="today-weather__climate">Shower</div>
      <div className="today-weather__information">
        <p>
          <span>Today</span> • <span>Fri, 5 Jun</span>
        </p>
        <p>
          <img src={Pin} alt={Pin} />
          Helsinki
        </p>
      </div>
    </div>
  );
};

export default TodayWeather;
