import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Crosshair, MapPin } from "lucide-react";
import RoundButton from "../../components/RoundButton/RoundButton";
import { UNITS, ICON_URL } from "../../constants";

export const TodayWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
`;

export const TodayWeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--margin-size-small);
`;
export const TodayWeatherImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--margin-size-small);
  flex: 1.2;
  padding-top: var(--padding-size-medium);

  & img {
    width: 20vh;
  }

  @media (max-width: 1023px) {
    .today-weather__image img {
      width: max(20vh, 10rem);
    }
  }
`;

const SearchTrigger = styled.button`
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xsmall);
  box-shadow: var(--box-shadow);
  color: var(--color-tertiary);
  background: var(--color-action-ternary);
  height: 2.5rem;
  width: 10.0625rem;
`;

const TodayWeatherCommon = css`
  width: 100%;
  font-family: inherit;
  text-align: center;
`;

const TodayWeatherTemperature = styled.div`
  ${TodayWeatherCommon}

  font-size: 13.33vh;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xlarge);
  color: var(--color-text-secondary);

  & span {
    font-size: 4.44vh;
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-large);
    text-align: left;
  }

  @media (min-width: 1800px) {
    .today-weather__temperature {
      font-size: 8vh;
    }
  }
`;

export const TodayWeatherClimate = styled.div`
  ${TodayWeatherCommon}
  flex: 1;
  color: var(--color-text-primary-light);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-medium);
  padding: 1.3125rem 0;
`;

export const TodayWeatherClimateInformation = styled.div`
  & p {
    ${TodayWeatherCommon}
    flex: 1;
    color: var(--color-text-primary-dark);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-small);
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

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
