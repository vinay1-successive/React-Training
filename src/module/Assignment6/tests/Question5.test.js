import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Question5 from "../components/Question5";
describe("Question5 Component", () => {
  const userData = {
    name: "Vinay",
    email: "vinay@gnail.com",
    phone: "1234567890",
  };
  it("should display user data correctly", () => {
    render(<Question5 data={userData} />);

    expect(screen.getByTestId("name")).toHaveTextContent(userData.name);
    expect(screen.getByTestId("email")).toHaveTextContent(userData.email);
    expect(screen.getByTestId("phone")).toHaveTextContent(userData.phone);
  });
});
