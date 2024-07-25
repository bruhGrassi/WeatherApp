import styled, { css } from "styled-components";

export const TodayWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

export const SearchTrigger = styled.button`
  font-size: var(--size-sm);
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
  text-align: center;
`;

export const TodayWeatherTemperature = styled.div`
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
    padding-bottom: var(--size-sm);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
