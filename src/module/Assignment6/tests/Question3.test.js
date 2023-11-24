import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Question3 from "../components/Question3";

test("Clicking increment button increases the value", () => {
  render(<Question3 />);
  const incrementButton = screen.getByText("inc");

  fireEvent.click(incrementButton);

  const currValue = screen.getByTestId("num");

  expect(currValue).toHaveTextContent("1");
});

test("Clicking decrement button decreses the value", () => {
  render(<Question3 />);
  const decrementButton = screen.getByText("dec");

  fireEvent.click(decrementButton);

  const currValue = screen.getByTestId("num");

  expect(currValue).toHaveTextContent("-1");
});
