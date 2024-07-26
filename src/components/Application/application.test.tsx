import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // Title
    const pageHeading = screen.getByRole("heading", {
      name: "Application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // Subtitle
    const sectionHeading = screen.getByRole("heading", {
      name: "Enter your data",
      level: 3,
    });
    expect(sectionHeading).toBeInTheDocument();

    // Paragraph
    const paragraph_1 = screen.getByText(
      /it will be used for testing purposes only/i
    );
    const paragraph_2 = screen.getByTestId("custom-element");
    expect(paragraph_1).toBeInTheDocument();
    expect(paragraph_2).toBeInTheDocument();

    // Image 
    const image_1 = screen.getByAltText("placeholder text");
    const image_2 = screen.getByTitle("title text");
    expect(image_1).toBeInTheDocument();
    expect(image_2).toBeInTheDocument();

    // Name Input
    const nameInput_1 = screen.getByRole("textbox", {
      name: "Name",
    });
    const nameInput_2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameInput_1).toBeInTheDocument();
    expect(nameInput_2).toBeInTheDocument();

    // Bio Input
    const bioInput_1 = screen.getByRole("textbox", {
      name: "Bio",
    });
    const bioInput_2 = screen.getByPlaceholderText("Enter Bio");
    expect(bioInput_1).toBeInTheDocument();
    expect(bioInput_2).toBeInTheDocument();

    // Location Input
    const locationInput_1 = screen.getByRole("combobox", {
      name: "Location",
    });
    const locationInput_2 = screen.getByDisplayValue("New York");
    expect(locationInput_1).toBeInTheDocument();
    expect(locationInput_2).toBeInTheDocument();

    // Terms Input
    const termsInput = screen.getByRole("checkbox", {
      name: "Terms",
    });
    expect(termsInput).toBeInTheDocument();

    // Submit Button
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
