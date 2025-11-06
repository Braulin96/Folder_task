import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UserList component", () => {
  it("should show loading and then render users after fetch", async () => {
    // Mock resolved data
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: "Paul" },
        { id: 2, name: "John" },
      ],
    });

    render(<UserList />);

    const button = screen.getByRole("button", { name: /Load Users/i });
    fireEvent.click(button);

    // Expect loading to appear
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for fake users to render
    const paul = await screen.findByText(/Paul/i);
    const john = await screen.findByText(/John/i);

    // Expect both users in the document
    expect(paul).toBeInTheDocument();
    expect(john).toBeInTheDocument();

    // Expect loading to disappear
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
