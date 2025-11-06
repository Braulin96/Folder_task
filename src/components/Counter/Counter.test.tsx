import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter component", () => {
  it("should render count", () => {
    render(<Counter />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("should increment when click in increment button", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const count = screen.getByText("Count: 1");
    expect(count).toBeInTheDocument();
  });

  it("should decrement when click on decrement button", () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    const newCount = screen.getByText("Count: -1");
    const oldCount = screen.queryByText("Count: 0");
    expect(newCount).toBeInTheDocument();
    expect(oldCount).not.toBeInTheDocument();
  });
});
