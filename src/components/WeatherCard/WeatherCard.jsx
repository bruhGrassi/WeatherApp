import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { UNITS, ICON_URL } from "../../constants";

const WeatherCardWrapper = styled.div`
  background-color: var(--color-primary);
  padding: 1.3125rem;
`;

const WeatherCardCommon = css`
  font-family: inherit;
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xsmall);
`;

const WeatherCardDate = styled.div`
  ${WeatherCardCommon}
  text-align: center;
  color: var(--color-action-primary);
`;

const WeatherCardImage = styled.img`
  width: 7.5rem;
  margin: auto;
`;

const WeatherCardTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

const WeatherCardTemperatureMax = styled.div`
  ${WeatherCardCommon}
  color: var(--color-action-primary);
`;

const WeatherCardTemperatureMin = styled.div`
  ${WeatherCardCommon}
  color: var(--color-text-primary-light);
`;

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
