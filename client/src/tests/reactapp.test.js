import React from "react";
import List from "../components/List";
import App from "../App";
import renderer from "react-test-renderer";

test("list compiles correctly", () => {
  const tree = renderer.create(<List></List>).toJSON();

  expect(tree).toMatchSnapshot();
});

test("snapshot test of app", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
