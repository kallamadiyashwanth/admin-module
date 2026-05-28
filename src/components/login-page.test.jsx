import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./login-page.jsx";

// Mock react-router-dom
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

// Mock redux
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

// Mock actions
jest.mock("../redux/actions/userActions", () => ({
  fetchUsersRequest: jest.fn(() => ({
    type: "FETCH_USERS_REQUEST",
  })),
  setCurrentUser: jest.fn((user) => ({
    type: "SET_CURRENT_USER",
    payload: user,
  })),
  setIsAdmin: jest.fn((value) => ({
    type: "SET_IS_ADMIN",
    payload: value,
  })),
  logoutUser: jest.fn(() => ({
    type: "LOGOUT_USER",
  })),
}));

import { useSelector } from "react-redux";
import {
  fetchUsersRequest,
  setCurrentUser,
  setIsAdmin,
  logoutUser,
} from "../redux/actions/userActions";

describe("Login Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((callback) =>
      callback({
        user: {
          users: [
            {
              username: "john",
              password: "1234",
            },
          ],
        },
      })
    );

    window.alert = jest.fn();
    window.prompt = jest.fn();
  });

  test("renders login form", () => {
    render(<Login />);

    expect(screen.getByText("User Login")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Username")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Password")
    ).toBeInTheDocument();
  });

  test("dispatches fetchUsersRequest on mount if users empty", () => {
    useSelector.mockImplementation((callback) =>
      callback({
        user: {
          users: [],
        },
      })
    );

    render(<Login />);

    expect(fetchUsersRequest).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalled();
  });

  test("login as admin", () => {
    render(<Login />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter Username"),
      {
        target: { value: "admin" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter Password"),
      {
        target: { value: "admin324" },
      }
    );

    fireEvent.click(screen.getByText("LOGIN"));

    expect(setIsAdmin).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith(
      "/dashboard"
    );
    expect(window.alert).toHaveBeenCalledWith(
      "Logged in as Admin!"
    );
  });

  test("successful user login", () => {
    render(<Login />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter Username"),
      {
        target: { value: "john" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter Password"),
      {
        target: { value: "1234" },
      }
    );

    fireEvent.click(screen.getByText("LOGIN"));

    expect(setCurrentUser).toHaveBeenCalledWith({
      username: "john",
      password: "1234",
    });

    expect(setIsAdmin).toHaveBeenCalledWith(
      false
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/dashboard"
    );
  });

  test("shows alert for invalid login", () => {
    render(<Login />);

    fireEvent.change(
      screen.getByPlaceholderText("Enter Username"),
      {
        target: { value: "wrongUser" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Enter Password"),
      {
        target: { value: "wrongPass" },
      }
    );

    fireEvent.click(screen.getByText("LOGIN"));

    expect(window.alert).toHaveBeenCalledWith(
      "Invalid username or password"
    );
  });

  test("toggles password visibility", () => {
    render(<Login />);

    const passwordInput =
      screen.getByPlaceholderText(
        "Enter Password"
      );

    expect(passwordInput).toHaveAttribute(
      "type",
      "password"
    );

    const eyeIcon =
      document.querySelector(".eye-icon");

    fireEvent.click(eyeIcon);

    expect(passwordInput).toHaveAttribute(
      "type",
      "text"
    );
  });

  test("forgot password success flow", () => {
    window.prompt.mockReturnValue(
      "test@gmail.com"
    );

    render(<Login />);

    fireEvent.click(
      screen.getByText("Forgot Password?")
    );

    expect(window.prompt).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith(
      "Password reset link has been sent to your email!"
    );
  });

  test("forgot password without email", () => {
    window.prompt.mockReturnValue("");

    render(<Login />);

    fireEvent.click(
      screen.getByText("Forgot Password?")
    );

    expect(window.alert).toHaveBeenCalledWith(
      "Email address is required to reset password."
    );
  });

  test("guest login", () => {
    render(<Login />);

    fireEvent.click(
      screen.getByText("Login as Guest")
    );

    expect(logoutUser).toHaveBeenCalled();

    expect(mockNavigate).toHaveBeenCalledWith(
      "/dashboard"
    );
  });

  test("signup alert", () => {
    render(<Login />);

    fireEvent.click(
      screen.getByText(
        "Don't have an account?"
      )
    );

    expect(window.alert).toHaveBeenCalledWith(
      "Sign up functionality is currently unavailable. Please contact support for assistance."
    );
  });
});