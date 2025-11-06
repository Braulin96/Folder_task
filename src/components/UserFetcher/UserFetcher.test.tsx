import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";

import UserFetcher from "./UserFetcher";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserFetcher component", () => {
  it("should display default loading users button", () => {
    render(<UserFetcher />);
    const button = screen.getByRole("button", { name: "Load Users" });
    expect(button).toBeInTheDocument();
  });

  it("should call the api when click in load user button", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: "Paul" },
        { id: 2, name: "John" },
      ],
    });

    render(<UserFetcher />);
    const button = screen.getByRole("button", { name: "Load Users" });
    fireEvent.click(button);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    const Paul = await screen.findByText(/Paul/i);
    const John = await screen.findByText(/John/i);

    expect(Paul).toBeInTheDocument();
    expect(John).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
