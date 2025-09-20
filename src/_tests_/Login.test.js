import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";

test("renders Login form", () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test("handles invalid login", () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: "wrong@example.com" } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: "wrong" } });
  fireEvent.click(screen.getByText(/Login/i));
});
