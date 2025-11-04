import { render, screen, fireEvent } from "@testing-library/react";

import Filter from "./Filter";

describe("Filter component", () => {
  const filters = ["name", "date"];
  const setSelectedFilter = jest.fn();

  it("should render default text", () => {
    render(
      <Filter
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={null}
      />
    );
    const text = screen.getByText(/sort by/i);
    expect(text).toBeInTheDocument();
  });

  it("should open the filters when clicked", () => {
    render(
      <Filter
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={null}
      />
    );
    const button = screen.getByText(/sort by/i);
    fireEvent.click(button);
    const name = screen.getByText(/name/i);
    const date = screen.getByText(/date/i);
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it("should close when click in one of filters", () => {
    render(
      <Filter
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={null}
      />
    );
    const button = screen.getByText(/sort by/i);
    fireEvent.click(button);
    const name = screen.getByText(/name/i);
    fireEvent.click(name);
    expect(name).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should close menu when clicking outside", () => {
    render(
      <Filter
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={null}
      />
    );
    const button = screen.getByText(/sort by/i);
    fireEvent.click(button);
    const name = screen.queryByText(/name/i);
    fireEvent.mouseDown(document.body);
    expect(name).not.toBeInTheDocument();
  });
});
