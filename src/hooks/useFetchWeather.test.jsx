import { renderHook, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useFetchWeather from "./useFetchWeather";
import { mapCurrentWeatherData, mapForecastData } from "../lib/mappers";

vi.mock("../lib/mappers", () => ({
  mapCurrentWeatherData: vi.fn(),
  mapForecastData: vi.fn(),
}));

globalThis.fetch = vi.fn(() => {
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        coord: {
          lon: -46.6361,
          lat: -23.5475,
        },
        weather: [
          {
            id: 300,
            main: "Drizzle",
            description: "light intensity drizzle",
            icon: "09d",
          },
        ],
        base: "stations",
        main: {
          temp: 14.15,
          feels_like: 14.05,
          temp_min: 13.58,
          temp_max: 15.05,
          pressure: 1027,
          humidity: 93,
          sea_level: 1027,
          grnd_level: 936,
        },
        visibility: 5000,
        wind: {
          speed: 3.6,
          deg: 180,
        },
        clouds: {
          all: 75,
        },
        dt: 1722348911,
        sys: {
          type: 1,
          id: 8394,
          country: "BR",
          sunrise: 1722332538,
          sunset: 1722372206,
        },
        timezone: -10800,
        id: 3448439,
        name: "São Paulo",
        cod: 200,
      }),
  });
});

describe("useFetchWeather", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with corret default state", () => {
    const { result } = renderHook(() => useFetchWeather("London"));

    expect(result.current.currentWeatherData).toBeNull();
    expect(result.current.forecastWeatherData).toEqual([]);
    expect(result.current.error).toBeNull();
    expect(result.current.unit).toBe("C");
    expect(result.current.isLoading).toBe(true);
  });

  it("should handle successful fetch for current weather", async () => {
    const mockCurrentWeather = {
      name: "London",
      main: { temp: 15, humidity: 80, pressure: 1012 },
      weather: [{ main: "Clear", icon: "01d" }],
      wind: { speed: 5 },
      visibility: 10000,
    };

    const mockForecast = { list: [] };

    //config mocks
    vi.mocked(mapCurrentWeatherData).mockReturnValue(mockCurrentWeather);
    vi.mocked(mapForecastData).mockReturnValue([]);

    globalThis.fetch.mockImplementation((url) => {
      if (url.includes("./weather")) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCurrentWeather),
        });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockForecast),
      });
    });

    const { result } = renderHook(() => useFetchWeather("London"));

    await act(async () => {
      await waitFor(() => expect(result.current.isLoading).toBe(true));
    });

    expect(result.current.currentWeatherData).toEqual(mockCurrentWeather);
    expect(result.current.forecastWeatherData).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it("should handle fetch errors", async () => {
    globalThis.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Not Found",
      })
    );

    const { result } = renderHook(() => useFetchWeather("London"));

    await act(async () => {
      await waitFor(() => expect(result.current.isLoading).toBe(true));
    });

    expect(result.current.error).toBe("City not found");
  });

  it("should call fetchWeatherForLocation on initial render", async () => {
    renderHook(() => useFetchWeather("London"));

    await act(async () => {
      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });
    });
  });
});
