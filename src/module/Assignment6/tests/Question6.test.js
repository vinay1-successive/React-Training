import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../helper/Modal";

describe("Modal Component", () => {
  it("redner close modal by default", () => {
    render(<Modal isOpen={false} />);

    expect(screen.queryByTestId("modal")).toBeNull();
  });
  it("redner open modal when true", () => {
    render(<Modal isOpen={true} />);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
  it("call onClose when the close button is clicked", () => {
    render(<Modal isOpen={true} />);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByText("Modal Open")).not.toBeInTheDocument();
  });
});