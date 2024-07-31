import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TodayWeather from "./TodayWeather";

describe("<TodayWeather />", () => {
  const props = {
    temperature: 25,
    description: "Sunny",
    image: "01d",
    unit: "C",
    cityName: "New York",
  };

  it("renders TodayWeather component", () => {
    render(<TodayWeather {...props} />);

    expect(screen.getByText("Search for places")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(25)).toBeInTheDocument();
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("Sunny")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
  });
});
