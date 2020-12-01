import React from "react";
import renderer from "react-test-renderer";
import ButtonTemplate from "../ButtonTemplate";

test("renders correctly", () => {
  const mockPressFunction = jest.fn();
  const tree = renderer
    .create(<ButtonTemplate title="Test Title" onPress={mockPressFunction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
