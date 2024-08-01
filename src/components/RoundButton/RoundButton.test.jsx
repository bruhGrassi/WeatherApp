import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RoundButton from "./RoundButton";

const renderRoundButton = (props = {}) => {
  const defaultProps = {
    variant: "primary",
    isActive: true,
    onClick: () => {},
  };
  return render(
    <RoundButton {...defaultProps} {...props}>
      Button Text
    </RoundButton>
  );
};

describe("<RoundButton />", () => {
  it("renders the button", () => {
    renderRoundButton();

    expect(screen.getByText("Button Text")).toBeInTheDocument();
  });

  it("call onClick when clicked", () => {
    const handleClick = vi.fn();
    renderRoundButton({ onClick: handleClick });

    fireEvent.click(screen.getByText("Button Text"));

    expect(handleClick).toHaveBeenCalled();
  });
});
