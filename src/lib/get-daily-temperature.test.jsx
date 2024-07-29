import { describe, it, expect } from "vitest";
import { getDailyTemperature } from "./get-daily-temperature";

const fixedTodayDate = "Monday";
const forecast = [
  {
    date: new Date("2024-01-07"),
    dayOfWeek: fixedTodayDate,
    temp_min: 10,
    temp_max: 15,
    image: "01d",
  },
  {
    date: new Date("2024-01-07"),
    dayOfWeek: fixedTodayDate,
    temp_min: 12,
    temp_max: 18,
    image: "01d",
  },
  {
    date: new Date("2024-01-08"),
    dayOfWeek: "Tuesday",
    temp_min: 8,
    temp_max: 14,
    image: "02d",
  },
  {
    date: new Date("2024-01-08"),
    dayOfWeek: "Tuesday",
    temp_min: 9,
    temp_max: 15,
    image: "02d",
  },
  {
    date: new Date("2024-01-09"),
    dayOfWeek: "Wednesday",
    temp_min: 6,
    temp_max: 12,
    image: "03d",
  },
];

describe("getDailyTemperature", () => {
  it("should return daily temperatures with min and max values", () => {
    const result = getDailyTemperature(forecast);

    expect(result).toEqual([
      { date: "Tuesday", temp_min: 8, temp_max: 15, image: "02d" },
      { date: "Wednesday", temp_min: 6, temp_max: 12, image: "03d" },
    ]);
  });
});
