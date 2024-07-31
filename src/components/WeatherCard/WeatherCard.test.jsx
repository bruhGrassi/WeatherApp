import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("<WeatherCard />", () => {
  const props = {
    date: "Tomorrow",
    image: "01d",
    max_temp: 29,
    min_temp: 11,
    unit: "C",
  };

  it("renders WeatherCrad component", () => {
    render(<WeatherCard {...props} />);

    expect(screen.getByText("Tomorrow")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/29°/)).toBeInTheDocument();
    expect(screen.getByText(/11°/)).toBeInTheDocument();
  });
});
