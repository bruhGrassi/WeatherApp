import { render, screen, fireEvent } from "@testing-library/react";
import RoundButton from "./RoundButton";
import { describe, it, expect, vi } from "vitest";

describe("<RoundButton />", () => {
  it("renders the button", () => {
    render(
      <RoundButton variant="primary" isActive={true} onClick={() => {}}>
        Button Text
      </RoundButton>
    );

    expect(screen.getByText("Button Text")).toBeInTheDocument();
  });

  it("call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <RoundButton variant="primary" isActive={true} onClick={handleClick}>
        Button Text
      </RoundButton>
    );

    fireEvent.click(screen.getByText("Button Text"));

    expect(handleClick).toHaveBeenCalled();
  });
});
