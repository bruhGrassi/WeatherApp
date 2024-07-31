import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("<ErrorMessage />", () => {
  it("renders the error message", () => {
    render(<ErrorMessage error="some error here" />);
    expect(screen.getByText("some error here")).toBeInTheDocument();
  });
});
