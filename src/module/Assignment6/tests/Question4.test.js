import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Question4 from "../components/Question4"; 

describe("Question4 Component", () => {

  it("should render the form elements", () => {
    render(<Question4 />);

    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should update input fields and display user data on form submission", () => {
    render(<Question4 />);

    const nameInput = screen.getByPlaceholderText("name");
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "Vinay" } });
    fireEvent.change(passwordInput, { target: { value: "12345" } });

    fireEvent.click(submitButton);

    expect(screen.getByText("Vinay 12345")).toBeInTheDocument();
  });

  it('should display "Incorrect" message for incorrect credentials', () => {
    render(<Question4 />);

    const nameInput = screen.getByPlaceholderText("name");
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(nameInput, { target: { value: "IncorrectUser" } });
    fireEvent.change(passwordInput, { target: { value: "IncorrectPassword" } });

    fireEvent.click(submitButton);

    expect(screen.getByText("Incorrect")).toBeInTheDocument();
  });
});
