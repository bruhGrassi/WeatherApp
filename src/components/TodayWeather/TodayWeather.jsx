import PropTypes from "prop-types";
import Pin from "../../assets/icons/pin.png";
import Crosshair from "../../assets/icons/crosshair.png";
import RoundButton from "../../components/RoundButton/RoundButton";
import { UNITS, ICON_URL } from "../../constants";
import "./TodayWeather.css";

const TodayWeather = ({
  handleLocationSearch,
  cityName,
  temperature,
  description,
  image,
  unit,
  handleOnClick,
}) => {
  const iconUrl = `${ICON_URL}${image}@4x.png`;
  const options = { weekday: "short", month: "short", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="today-weather">
      <div className="today-weather__header">
        <button className="search__trigger" onClick={handleLocationSearch}>
          Search for places
        </button>
        <RoundButton variant="icon" onClick={handleOnClick}>
          <img src={Crosshair} />
        </RoundButton>
      </div>

      <div className="today-weather__image">
        <img src={iconUrl} alt="Weather Image" />
      </div>
      <div className="today-weather__temperature">
        {temperature}
        <span>
          °{unit === UNITS.CELCIUS ? UNITS.CELCIUS : UNITS.FAHRENHEIT}
        </span>
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

TodayWeather.propTypes = {
  handleLocationSearch: PropTypes.func,
  cityName: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  unit: PropTypes.string,
  handleCurrentLocation: PropTypes.func,
  handleOnClick: PropTypes.func,
};

export default TodayWeather;
