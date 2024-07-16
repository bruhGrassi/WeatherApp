import PropTypes from "prop-types";
import "./WeatherCard.css";

const WeatherCard = ({ date, min_temp, max_temp, image, unit }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;
  return (
    <div className="weather-card">
      <div className="weather-card__date">{date}</div>
      <img src={iconUrl} className="weather-card__image" />
      <div className="weather-card__temperature">
        <div className="weather-card__temperature--max">
          {max_temp}° {unit === "C" ? "C" : "F"}
        </div>
        <div className="weather-card__temperature--min">
          {min_temp}° {unit === "C" ? "C" : "F"}
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  date: PropTypes.string,
  min_temp: PropTypes.number,
  max_temp: PropTypes.number,
  image: PropTypes.string,
  unit: PropTypes.string,
};

export default WeatherCard;
