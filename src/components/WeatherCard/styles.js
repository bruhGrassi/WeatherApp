import styled, { css } from "styled-components";

export const WeatherCardWrapper = styled.div`
  background-color: var(--color-primary);
  padding: 1.3125rem;
`;

const WeatherCardCommon = css`
  font-family: inherit;
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xsmall);
`;

export const WeatherCardDate = styled.div`
  ${WeatherCardCommon}
  text-align: center;
  color: var(--color-action-primary);
`;

export const WeatherCardImage = styled.img`
  width: 7.5rem;
  margin: auto;
`;

export const WeatherCardTemperature = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const WeatherCardTemperatureMax = styled.div`
  ${WeatherCardCommon}
  color: var(--color-action-primary);
`;

export const WeatherCardTemperatureMin = styled.div`
  ${WeatherCardCommon}
  color: var(--color-text-primary-light);
`;
