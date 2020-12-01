import React from "react";
import ButtonTemplate from "../ButtonTemplate";
import { render, fireEvent } from "@testing-library/react-native";

describe("<ButtonTemplate /> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <ButtonTemplate title="Test Title" onPress={mockPressFunction} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should display text properly", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <ButtonTemplate title="Test Title" onPress={mockPressFunction} />
    );
    const textComponent = rendered.getByTestId("text");
    expect(textComponent.props.children).toEqual("Test Title");
  });

  it("should fire onPress events", () => {
    const onPress = jest.fn();
    const rendered = render(
      <ButtonTemplate title="Test Title" onPress={onPress} />
    );
    const buttonComponent = rendered.getByTestId("button");
    fireEvent(buttonComponent, "press");
    expect(onPress).toHaveBeenCalled();
  });
});
