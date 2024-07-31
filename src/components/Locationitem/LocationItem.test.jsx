import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LocationItem from "./LocationItem";

describe("<LocationItem />", () => {
  it("renders the location name", () => {
    render(<LocationItem text="New York" />);
    expect(screen.getByText("New York")).toBeInTheDocument();
  });

  it("calls handleLocation when clicked", () => {
    //creates a mock function
    const handleLocation = vi.fn();
    render(<LocationItem text="New York" handleLocation={handleLocation} />);

    //simulates a click on the item
    fireEvent.click(screen.getByText("New York"));

    expect(handleLocation).toHaveBeenCalledTimes(1);
  });
});
