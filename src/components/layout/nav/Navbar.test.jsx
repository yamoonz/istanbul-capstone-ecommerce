import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

it("renders correctly", () => {
  const tree = render(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
