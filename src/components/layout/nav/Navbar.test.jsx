import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

it("renders correctly", () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
