import { render, screen } from "@testing-library/react";
import HighlightCard from "./HighlightCard";
import { describe, it, expect } from "vitest";

describe("<HighlightCard />", () => {
  it("renders the tile prop", () => {
    render(
      <HighlightCard
        title="Visibility"
        data="10000"
        unit="miles"
        other={false}
        range={80}
      />
    );
    expect(screen.getByText("Visibility")).toBeInTheDocument();
  });

  it("renders the data prop", () => {
    render(
      <HighlightCard
        title="Visibility"
        data="10000"
        unit="miles"
        other={false}
        range={80}
      />
    );
    expect(screen.getByText("10000")).toBeInTheDocument();
  });

  it("renders the unit prop", () => {
    render(<HighlightCard title="Visibility" data="10000" unit="miles" />);
    expect(screen.getByText("miles")).toBeInTheDocument();
  });

  it("doesn't renders the element when other is false", () => {
    render(
      <HighlightCard
        title="Visibility"
        data="10000"
        unit="miles"
        other={false}
      />
    );
    expect(screen.queryByText("WSW")).toBeNull();
  });

  it("renders the element when other is true", () => {
    render(
      <HighlightCard
        title="Visibility"
        data="10000"
        unit="miles"
        other={true}
      />
    );
    expect(screen.getByText("WSW")).toBeInTheDocument();
  });

  it("renders PercentageLine when range is provided", () => {
    render(
      <HighlightCard title="Visibility" data="10000" unit="miles" range={88} />
    );

    const progressElement = screen.getByRole("progressbar");
    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveAttribute("value", "88");
  });

  it("does not render PercentageLine when range is not provided", () => {
    render(<HighlightCard title="Visibility" data="10000" unit="miles" />);

    const progressElement = screen.queryByRole("progressbar");
    expect(progressElement).toBeNull();
  });
});
