import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // using this to make sure tobeInTheDocument works
import Modal from "../helper/Modal";

describe("Modal Component", () => {
  it("renders close modal by default", () => {
    render(<Modal isOpen={false} />);

    expect(screen.queryByTestId("modal")).toBeNull();
  });

  it("renders open modal when true", () => {
    render(<Modal isOpen={true} />);

    expect(screen.queryByTestId("modal")).toBeInTheDocument();
    expect(screen.queryByText("Close")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(<Modal isOpen={true} />);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByText("Modal Open")).not.toBeInTheDocument();
  });
});
