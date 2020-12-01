import React from "react";
import SubRightsItem from "../SubRightsItem";
import { render, fireEvent } from "@testing-library/react-native";

describe("<SubRightsItem /> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <SubRightsItem title="Test Title" onSelect={mockPressFunction} img={1} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should display text properly", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <SubRightsItem title="Test Title" onSelect={mockPressFunction} img={1} />
    );
    const textComponent = rendered.getByTestId("text");
    expect(textComponent.props.children).toEqual("Test Title");
  });

  it("should fire onPress events", () => {
    const onSelect = jest.fn();
    const rendered = render(
      <SubRightsItem title="Test Title" onSelect={onSelect} img={1} />
    );
    const buttonComponent = rendered.getByTestId("subItem");
    fireEvent(buttonComponent, "press");
    expect(onSelect).toHaveBeenCalled();
  });
});
