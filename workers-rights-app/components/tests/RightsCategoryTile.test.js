import React from "react";
import RightsCategoryTile from "../RightsCategoryTile";
import { render, fireEvent } from "@testing-library/react-native";

describe("<RightsCategoryTile /> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <RightsCategoryTile
        title="Test Title"
        onSelect={mockPressFunction}
        image={1}
      />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should display text properly", () => {
    const mockPressFunction = jest.fn();
    const rendered = render(
      <RightsCategoryTile
        title="Test Title"
        onSelect={mockPressFunction}
        image={1}
      />
    );
    const textComponent = rendered.getByTestId("text");
    expect(textComponent.props.children).toEqual("Test Title");
  });

  it("should fire onPress events", () => {
    const onSelect = jest.fn();
    const rendered = render(
      <RightsCategoryTile title="Test Title" onSelect={onSelect} image={1} />
    );
    const buttonComponent = rendered.getByTestId("tile");
    fireEvent(buttonComponent, "press");
    expect(onSelect).toHaveBeenCalled();
  });
});
