import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../components/Register";

test("renders Register form", () => {
  render(<BrowserRouter><Register /></BrowserRouter>);
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
});

test("submits form", () => {
  render(<BrowserRouter><Register /></BrowserRouter>);
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: "test@example.com" } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: "123456" } });
  fireEvent.click(screen.getByText(/Register/i));
});
