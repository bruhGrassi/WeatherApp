import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PercentageLine from "./PercentageLine";

describe("<PercentageLine />", () => {
  it("should render the progress bar", () => {
    render(<PercentageLine percentage={50} />);

    expect(screen.getByRole("progressbar")).toHaveAttribute("value", "50");
  });
});
