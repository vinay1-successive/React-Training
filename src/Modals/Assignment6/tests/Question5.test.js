import React from "react";
import { render, screen } from "@testing-library/react";
import Question5 from "../components/Question5";
describe("Question5 Component", () => {
  it("should display user data correctly", () => {
    const userData = {
      name: "Vinay",
      email: "vinay@gnail.com",
      phone: "1234567890",
    };

    render(<Question5 value={userData} />);

    expect(screen.getByText("Vinay")).toBeInTheDocument();
    expect(screen.getByText("vinay@gnail.com")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
  });
});
