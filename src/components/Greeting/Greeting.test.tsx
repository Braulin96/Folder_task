import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("should display default morning message and name", () => {
    render(<Greeting name="Paul" />);
    const name = screen.getByText(/paul/i);
    const defaultMessage = screen.getByText(/Good morning/i);
    expect(name).toBeInTheDocument();
    expect(defaultMessage).toBeInTheDocument();
  });

  it("should display evening message for morning false", () => {
    render(<Greeting name="Paul" isMorning={false} />);
    const eveningMessage = screen.getByText(/Good evening/i);
    expect(eveningMessage).toBeInTheDocument();
  });
});
