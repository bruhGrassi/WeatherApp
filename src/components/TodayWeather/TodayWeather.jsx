import PropTypes from "prop-types";
import { Crosshair, MapPin } from "lucide-react";
import RoundButton from "../../components/RoundButton/RoundButton";
import { UNITS, ICON_URL } from "../../constants";
import {
  TodayWeatherWrapper,
  TodayWeatherHeader,
  TodayWeatherImage,
  SearchTrigger,
  TodayWeatherTemperature,
  TodayWeatherClimate,
  TodayWeatherClimateInformation,
} from "./styles";

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
    <TodayWeatherWrapper>
      <TodayWeatherHeader>
        <SearchTrigger onClick={handleLocationSearchVisibility}>
          Search for places
        </SearchTrigger>
        <RoundButton variant="icon" onClick={handleOnGeolocationClick}>
          <Crosshair />
        </RoundButton>
      </TodayWeatherHeader>

      <TodayWeatherImage>
        <img src={iconUrl} alt="Weather Image" />
      </TodayWeatherImage>
      <TodayWeatherTemperature>
        {temperature}
        <span>
          °{unit === UNITS.CELSIUS ? UNITS.CELSIUS : UNITS.FAHRENHEIT}
        </span>
      </TodayWeatherTemperature>
      <TodayWeatherClimate>{description}</TodayWeatherClimate>
      <TodayWeatherClimateInformation>
        <p>
          <span>Today</span> • <span>{today}</span>
        </p>
        <p>
          <MapPin />
          {cityName}
        </p>
      </TodayWeatherClimateInformation>
    </TodayWeatherWrapper>
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
