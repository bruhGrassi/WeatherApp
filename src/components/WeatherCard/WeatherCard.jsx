import PropTypes from "prop-types";
import { UNITS, ICON_URL } from "../../constants";
import {
  WeatherCardWrapper,
  WeatherCardDate,
  WeatherCardImage,
  WeatherCardTemperature,
  WeatherCardTemperatureMax,
  WeatherCardTemperatureMin,
} from "./styles";

const WeatherCard = ({ date, min_temp, max_temp, image, unit }) => {
  const iconUrl = `${ICON_URL}${image}@4x.png`;
  const currentUnit = unit === UNITS.CELSIUS ? UNITS.CELSIUS : UNITS.FAHRENHEIT;

  return (
    <WeatherCardWrapper>
      <WeatherCardDate>{date}</WeatherCardDate>
      <WeatherCardImage src={iconUrl} />
      <WeatherCardTemperature>
        <WeatherCardTemperatureMax>
          {max_temp}° {currentUnit}
        </WeatherCardTemperatureMax>
        <WeatherCardTemperatureMin>
          {min_temp}° {currentUnit}
        </WeatherCardTemperatureMin>
      </WeatherCardTemperature>
    </WeatherCardWrapper>
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
