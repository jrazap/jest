import { render, screen } from "@testing-library/react";
import Great from "./greet";

test("Greet rendered successfully", () => {
  render(<Great />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet (name) rendered successfully", () => {
  render(<Great name="Mohamed" />);
  const textElement = screen.getByText("Hello Mohamed");
  expect(textElement).toBeInTheDocument();
});