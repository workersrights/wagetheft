import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonTemplate from "../ButtonTemplate";

describe("<ButtonTemplate/> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <ButtonTemplate title="Test Title" onPress={mockPressFunction} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should call onPress", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <ButtonTemplate title="Test Title" onPress={mockPressFunction} />
    );

    const buttonTemp = rendered.getByTestId("buttonTemp");
    fireEvent(buttonTemp, "press");
    expect(mockPressFunction).toHaveBeenCalled();
  });
});
