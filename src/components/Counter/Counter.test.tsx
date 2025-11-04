import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter component", () => {
  it("should increment the value when click the increment button", () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const count = screen.getByText("Count: 1");
    expect(count).toBeInTheDocument();
  });

  it("should decrement the value when click in decrement button", () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const count = screen.getByText("Count: -1");
    expect(count).toBeInTheDocument();
  });

  it("should reset when click in reset button", () => {
    render(<Counter />);
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    const count = screen.getByText("Count: 0");
    expect(count).toBeInTheDocument();
  });
});
