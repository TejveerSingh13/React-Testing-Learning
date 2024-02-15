import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />);

    const pageHeadding = screen.getByRole("heading", { level: 1 });
    expect(pageHeadding).toBeInTheDocument();

    const sectionHeadding = screen.getByRole("heading", { level: 2 });
    expect(sectionHeadding).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText(/fullname/i);
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue(/Tejveer/i);
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: /bio/i });
    expect(bioElement).toBeInTheDocument();

    const jobLocationelement = screen.getByRole("combobox");
    expect(jobLocationelement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customeElement = screen.getByTestId("custom-element");
    expect(customeElement).toBeInTheDocument();
  });
});
