import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders the App component", async () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
