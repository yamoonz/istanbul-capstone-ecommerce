import React from "react";
import renderer from "react-test-renderer";
import Login from "./Login";
import { auth } from "../../config/firebaseConfig";
import db from "../../config/firebaseConfig";
import AddProducts from "../../addProductsForm/AddProducts";
import GoogleAndFacebookLogIn from "./GoogleAndFacebookLogIn";

it("renders correctly", () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
