import React from "react";
import LearnMoreItem from "../LearnMoreItem";
import { render } from "@testing-library/react-native";

describe("<LearnMoreItem /> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <LearnMoreItem id="DummyID" onPress={mockPressFunction} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
