import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("component rendered", () => {
    render(<Application />);
    const nameInput = screen.getByRole('textbox')
    expect(nameInput).toBeInTheDocument();
  });
});
