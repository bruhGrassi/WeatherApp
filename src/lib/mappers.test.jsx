import { describe, it, expect } from "vitest";
import { mapCurrentWeatherData } from "./mappers";

describe("mapCurrentWeatherData", () => {
  it("should map weather data to the correct format", () => {
    const input = {
      name: "Firenze",
      main: {
        temp: 24,
        humidity: 60,
        pressure: 1012,
      },
      weather: [
        {
          main: "Clear",
          icon: "01d",
        },
      ],
      wind: {
        speed: 5.5,
      },
      visibility: 10000,
    };

    const expectedOutput = {
      name: "Firenze",
      temp: 24,
      description: "Clear",
      image: "01d",
      wind: 5.5,
      humidity: 60,
      visibility: 10000,
      pressure: 1012,
    };

    const result = mapCurrentWeatherData(input);
    expect(result).toEqual(expectedOutput);
  });
});
