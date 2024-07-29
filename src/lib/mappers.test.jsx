import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mapCurrentWeatherData, mapForecastData } from "./mappers";
import { getDailyTemperature } from "./get-daily-temperature";

// Mock the getDailyTemperature function
vi.mock("./get-daily-temperature", () => ({
  getDailyTemperature: vi.fn(),
}));

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

describe("mapForecastData", () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2024, 0, 1));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should map and process forecast data correctly", () => {
    const input = {
      list: [
        {
          dt: 1672531200,
          main: {
            temp_min: 10.5,
            temp_max: 15.3,
          },
          weather: [
            {
              icon: "01d",
            },
          ],
        },
        {
          dt: 1672617600,
          main: {
            temp_min: 8.2,
            temp_max: 12.4,
          },
          weather: [
            {
              icon: "02d",
            },
          ],
        },
      ],
    };

    const expectedForecast = [
      {
        date: "Monday",
        temp_min: 10,
        temp_max: 15,
        image: "01d",
      },
      {
        date: "Tuesday",
        temp_min: 8,
        temp_max: 12,
        image: "02d",
      },
    ];

    // Mock the getDailyTemperature function to return the expected result
    vi.mocked(getDailyTemperature).mockReturnValue(expectedForecast);

    const result = mapForecastData(input);
    expect(result).toEqual(expectedForecast);
  });
});
