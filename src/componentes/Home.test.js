import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("render Home", () => {
  render(<Home></Home>);
  screen.getByTestId("home");
});
