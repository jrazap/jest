import { render, screen } from "@testing-library/react";
import Great from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Great />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("prop (name) passed", () => {
      render(<Great name="Mohamed" />);
      const textElement = screen.getByText("Hello Mohamed");
      expect(textElement).toBeInTheDocument();
    });
  });
});
