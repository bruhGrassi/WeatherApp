import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("<Skeleton />", () => {
  it("renders the Skeleton component", () => {
    render(<Skeleton />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
