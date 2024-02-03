import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test and expect is from jest therefore not imported.
test("renders learn react link", () => {
  render(<App />); //Virtual DOM creation using render
  const linkElement = screen.getByText(/learn react/i); // screen.getByText is a query
  expect(linkElement).toBeInTheDocument();
});
