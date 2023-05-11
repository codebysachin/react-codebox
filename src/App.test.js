import { render, screen } from "@testing-library/react";
import App from "./App";

test("reads the text from the h1", () => {
  render(<App />);
  const h1Element = screen.getByText(/Welcome to React/i);
  expect(h1Element).toBeInTheDocument();
});
