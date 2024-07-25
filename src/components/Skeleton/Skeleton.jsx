import { Wrapper, Aside, Main, MainHighlight } from "../../style";
import { TodayWeatherWrapper } from "../TodayWeather/styles";
import {
  TodayWeatherHeaderSkeleton,
  TodayWeatherImageSkeleton,
  TodayWeatherClimateSkeleton,
  MainHeaderSkeleton,
  MainWeatherSkeleton,
  MainHighlightTextSkeleton,
  WeatherCardWrapperSkeleton,
} from "./styles";

const Skeleton = () => {
  return (
    <Wrapper>
      <Aside>
        <TodayWeatherWrapper>
          <TodayWeatherHeaderSkeleton />

          <TodayWeatherImageSkeleton />

          <TodayWeatherClimateSkeleton />
        </TodayWeatherWrapper>
      </Aside>
      <Main>
        <MainHeaderSkeleton />
        <MainWeatherSkeleton>
          {Array.from({ length: 5 }, (_, index) => (
            <WeatherCardWrapperSkeleton key={index} />
          ))}
        </MainWeatherSkeleton>

        <MainHighlightTextSkeleton />

        <MainHighlight>
          {Array.from({ length: 4 }, (_, index) => (
            <WeatherCardWrapperSkeleton key={index} />
          ))}
        </MainHighlight>
      </Main>
    </Wrapper>
  );
};

export default Skeleton;
