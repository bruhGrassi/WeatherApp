import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LocationSearch from "./LocationSearch";

describe("</ LocationSearch", () => {
  const renderLocationSearch = (props = {}) => {
    const defaultProps = {
      error: "",
      locations: ["New York", "São Paulo"],
      isLocationSearchOpen: true,
      handleLocationSearch: vi.fn(),
      handleLocationSearchVisibility: vi.fn(),
    };
    render(<LocationSearch {...defaultProps} {...props} />);
  };

  it("renders the error message", () => {
    renderLocationSearch({ error: "some error here" });
  });

  it("renders LocationSearch correctly", () => {
    renderLocationSearch();

    //Checks if the input field is render
    expect(screen.getByPlaceholderText("search location")).toBeInTheDocument();

    //Checks if the serach button is render
    expect(screen.getByText("Search")).toBeInTheDocument();

    //Checks if the location list is render
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
  });

  it("renders location search form based on isLocationSearchOpen prop", () => {
    renderLocationSearch({ isLocationSearchOpen: true });

    expect(screen.getByPlaceholderText("search location")).toBeVisible();
  });

  it("calls handleLocationSearch when submitting a valid search term", () => {
    const handleLocationSearch = vi.fn();
    renderLocationSearch({ handleLocationSearch: handleLocationSearch });

    // Simulates the change in the search field
    fireEvent.change(screen.getByPlaceholderText("search location"), {
      target: { value: "Paris" },
    });

    // Simulates the click on the button
    fireEvent.click(screen.getByText("Search"));

    // Checks if handleLocationSearch was called with the correct value
    expect(handleLocationSearch).toHaveBeenCalledWith("Paris");
  });
});
