import { screen, render, fireEvent } from "@testing-library/react";

import TogglePanel from "./TogglePanel";

describe("TogglePanel component", () => {
  it("should render show panel and not display and not display panel content by default", () => {
    render(<TogglePanel />);
    const showMessage = screen.getByRole("button", { name: "Show Panel" });
    const hiddenMessage = screen.queryByText("Panel Content");
    expect(showMessage).toBeInTheDocument();
    expect(hiddenMessage).not.toBeInTheDocument();
  });

  it("should render Hide panel as button text and display panel content message when click in the button", () => {
    render(<TogglePanel />);
    const defaultButton = screen.getByRole("button", { name: "Show Panel" });
    fireEvent.click(defaultButton);

    const newButtonText = screen.getByRole("button", { name: "Hide Panel" });
    const message = screen.getByText("Panel Content");

    expect(newButtonText).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Show Panel" })
    ).not.toBeInTheDocument();
  });
});
