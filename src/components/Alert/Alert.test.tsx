import { screen, render } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert component", () => {
  it("should render message", () => {
    render(<Alert message="hello" type="success" />);
    const message = screen.getByText(/hello/i);
    expect(message).toBeInTheDocument();
  });

  it("should display green color for success type", () => {
    render(<Alert message="hello" type="success" />);
    const message = screen.getByText(/hello/i);
    expect(message).toHaveClass("text-green-600");
  });

  it("should display red color for error type", () => {
    render(<Alert message="hello" type="error" />);
    const message = screen.getByText(/hello/i);
    expect(message).toHaveClass("text-red-600");
  });

  it("should display warning color for error type", () => {
    render(<Alert message="hello" type="warning" />);
    const message = screen.getByText(/hello/i);
    expect(message).toHaveClass("text-yellow-600");
  });
});
