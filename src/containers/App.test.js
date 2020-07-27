import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders correctly whithout crash", () => {
  const { getByText } = render(<App />);
  const text = getByText("hello");
  expect(text).toMatchSnapshot();
});
