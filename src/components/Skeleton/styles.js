import styled, { css } from "styled-components";
import {
  TodayWeatherHeader,
  TodayWeatherImage,
  TodayWeatherClimate,
} from "../TodayWeather/styles";
import { MainHeader, MainWeather, MainHighlightText } from "../../style";
import { WeatherCardWrapper } from "../WeatherCard/styles";

export const SkeletonWrapper = css`
  background-color: var(--color-skeleton);
  min-height: var(--size-md);
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(106, 102, 111, 0.3),
      transparent
    );
    animation: skeleton-loading 1.5s infinite;
  }

  @keyframes skeleton-loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SkeletonCard = css`
  height: 10rem;
  margin-top: var(--size-md);
`;

export const TodayWeatherHeaderSkeleton = styled(TodayWeatherHeader)`
  ${SkeletonWrapper}
`;

export const TodayWeatherImageSkeleton = styled(TodayWeatherImage)`
  ${SkeletonWrapper}
`;

export const TodayWeatherClimateSkeleton = styled(TodayWeatherClimate)`
  ${SkeletonWrapper}
`;

export const MainHeaderSkeleton = styled(MainHeader)`
  ${SkeletonWrapper}
`;

export const MainWeatherSkeleton = styled(MainWeather)`
  ${SkeletonWrapper}
`;

export const MainHighlightTextSkeleton = styled(MainHighlightText)`
  ${SkeletonWrapper}
`;

export const WeatherCardWrapperSkeleton = styled(WeatherCardWrapper)`
  ${SkeletonWrapper}
  ${SkeletonCard}
`;
