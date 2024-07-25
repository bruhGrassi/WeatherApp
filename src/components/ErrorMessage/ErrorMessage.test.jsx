import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
import { describe, it, expect } from "vitest";

describe("<ErrorMessage />", () => {
  it("renders the error message", () => {
    render(<ErrorMessage error="some error here" />);
    expect(screen.getByText("some error here")).toBeInTheDocument();
  });
});
