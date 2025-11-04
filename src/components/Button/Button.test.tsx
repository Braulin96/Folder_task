import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button Component", () => {
  it("should render the button with text", () => {
    render(<Button text="Click Me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render the icon when provided", () => {
    render(<Button text="Click Me" icon="filter-icon.svg" />);
    const iconElement = screen.getByAltText(/filter/i);
    expect(iconElement).toBeInTheDocument();
  });
});
