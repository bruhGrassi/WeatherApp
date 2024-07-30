import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { getDailyTemperature } from "./get-daily-temperature";

const forecast = [
  {
    date: new Date("2024-01-08"),
    dayOfWeek: "Monday",
    temp_min: 10,
    temp_max: 15,
    image: "01d",
  },
  {
    date: new Date("2024-01-08"),
    dayOfWeek: "Monday",
    temp_min: 12,
    temp_max: 18,
    image: "01d",
  },
  {
    date: new Date("2024-01-09"),
    dayOfWeek: "Tuesday",
    temp_min: 8,
    temp_max: 14,
    image: "02d",
  },
  {
    date: new Date("2024-01-09"),
    dayOfWeek: "Tuesday",
    temp_min: 9,
    temp_max: 15,
    image: "02d",
  },
  {
    date: new Date("2024-01-10"),
    dayOfWeek: "Wednesday",
    temp_min: 6,
    temp_max: 12,
    image: "03d",
  },
];

describe("getDailyTemperature", () => {
  beforeEach(() => {
    vi.setSystemTime(new Date("2024-01-08"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return daily temperatures with min and max values", () => {
    const result = getDailyTemperature(forecast);

    expect(result).toEqual([
      { date: "Monday", temp_min: 10, temp_max: 18, image: "01d" },
      { date: "Tuesday", temp_min: 8, temp_max: 15, image: "02d" },
      { date: "Wednesday", temp_min: 6, temp_max: 12, image: "03d" },
    ]);
  });
});
