import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("<Navbar />", () => {
  render(
    <MemoryRouter>
      <Navbar></Navbar>
    </MemoryRouter>
  );

  test("search pokemon", () => {
    const input = screen.getByTestId("input-navbar");
    console.log(input);
  });
});
