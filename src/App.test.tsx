import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App", () => {
  render(<App />);
  expect(screen.getByText("App Template")).toBeInTheDocument();
});
