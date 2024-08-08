import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HighlightCard from "./HighlightCard";

const renderHighlightCard = (props = {}) => {
  const defaultProps = {
    title: "Visibility",
    data: "10000",
    unit: "miles",
    other: false,
    range: 80,
  };
  return render(<HighlightCard {...defaultProps} {...props} />);
};

describe("<HighlightCard />", () => {
  it("renders default props", () => {
    renderHighlightCard();
    expect(screen.getByText("Visibility")).toBeInTheDocument();
    expect(screen.getByText("10000")).toBeInTheDocument();
    expect(screen.getByText("miles")).toBeInTheDocument();
  });

  it("doesn't renders the element when other is false", () => {
    renderHighlightCard({ other: false });
    expect(screen.queryByText("WSW")).toBeNull();
  });

  it("renders the element when other is true", () => {
    renderHighlightCard({ other: true });
    expect(screen.getByText("WSW")).toBeInTheDocument();
  });

  it("renders PercentageLine when range is provided", () => {
    renderHighlightCard({ range: 88 });
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("value", "88");
  });

  it("does not render PercentageLine when range is not provided", () => {
    renderHighlightCard({ range: undefined });
    expect(screen.queryByRole("progressbar")).toBeNull();
  });
});
