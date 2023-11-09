import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Question3 from "../components/Question3";

test("Clicking increment button increases the value", () => {
  render(<Question3 />);
  const incrementButton = screen.getByText("inc");

  for (let counter = 0; counter < 10; counter++) {
    fireEvent.click(incrementButton);
  }

  expect(screen.getByText("10")).toBeInTheDocument();
});

test("Clicking decrement button decreses the value", () => {
  render(<Question3 />);
  const decrementButton = screen.getByText("dec");

  for (let counter = 0; counter < 10; counter++) {
    fireEvent.click(decrementButton);
  }

  expect(screen.getByText("-10")).toBeInTheDocument();
});
