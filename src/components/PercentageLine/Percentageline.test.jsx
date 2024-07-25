import { render, screen } from "@testing-library/react";
import PercentageLine from "./PercentageLine";
import { describe, it, expect } from "vitest";

describe("<PercentageLine />", () => {
  it("should render the progress bar", () => {
    render(<PercentageLine percentage={50} />);

    const progressElement = screen.getByRole("progressbar");

    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveAttribute("value", "50");
  });
});
