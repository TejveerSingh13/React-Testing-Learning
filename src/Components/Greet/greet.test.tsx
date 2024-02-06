import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// Basic structure , test name, arrow function with virtual DOM and assertion
test("Greet renders Correctly!", () => {
  render(<Greet />); // Means the Greet component should render
  const textELement = screen.getByText(/Greet/i); // And the resulting DOM should have a text greet
  expect(textELement).toBeInTheDocument();
});

// Approch for a TDD
/**
 * We start with defining the test case
 * Greet should render the text greet and if a name is passed into the component
 * It should render hello followed by the name.
 */

// Here we just wrote the test and then created the component
/**
 * Group tests with describe
 * name, fucntion contaning tests
 * describe can be nested.
 */
describe("Greet", () => {
  test("Renders Correctly - TDD", () => {
    render(<Greet />);
    const textELement = screen.getByText(/Greet/i);
    expect(textELement).toBeInTheDocument();
  });

  // test.only to run specific test and skip rest
  // OR test.skip to skip a specific test and run rest

  // we can use it instead of test, fit == test.only; xit == test.skip

  it("Renders with a name Correctly - TDD", () => {
    render(<Greet name="Tejveer" />);
    const textELement = screen.getByText(/Greet Tejveer/i);
    expect(textELement).toBeInTheDocument();
  });
});
