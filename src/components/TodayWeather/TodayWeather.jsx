import PropTypes from "prop-types";
import { Crosshair, MapPin } from "lucide-react";
import RoundButton from "../../components/RoundButton/RoundButton";
import { UNITS, ICON_URL } from "../../constants";
import "./TodayWeather.css";

const TodayWeather = ({
  cityName,
  temperature,
  description,
  image,
  unit,
  handleOnGeolocationClick,
  handleLocationSearchVisibility,
}) => {
  const iconUrl = `${ICON_URL}${image}@4x.png`;
  const options = { weekday: "short", month: "short", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="today-weather">
      <div className="today-weather__header">
        <button
          className="search__trigger"
          onClick={handleLocationSearchVisibility}
        >
          Search for places
        </button>
        <RoundButton variant="icon" onClick={handleOnGeolocationClick}>
          <Crosshair />
        </RoundButton>
      </div>

      <div className="today-weather__image">
        <img src={iconUrl} alt="Weather Image" />
      </div>
      <div className="today-weather__temperature">
        {temperature}
        <span>
          °{unit === UNITS.CELSIUS ? UNITS.CELSIUS : UNITS.FAHRENHEIT}
        </span>
      </div>
      <div className="today-weather__climate">{description}</div>
      <div className="today-weather__information">
        <p>
          <span>Today</span> • <span>{today}</span>
        </p>
        <p>
          <MapPin />
          {cityName}
        </p>
      </div>
    </div>
  );
};

TodayWeather.propTypes = {
  cityName: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  unit: PropTypes.string,
  handleOnGeolocationClick: PropTypes.func,
  handleLocationSearchVisibility: PropTypes.func,
};

export default TodayWeather;
