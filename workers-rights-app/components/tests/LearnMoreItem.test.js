import React from "react";
import ImportedData from "../../data/FetchRightsData";
import LearnMoreItem from "../LearnMoreItem";
import learnMore from "../../models/learnMore";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("../../data/FetchRightsData");

describe("<LearnMoreItem /> Tests", () => {
  it("should match snapshot", () => {
    const mockPressFunction = jest.fn();
    const mockGetLearnMores = jest.fn();
    const mockLearnMore = new learnMore("DummyID", "Dummy Title", [
      { header: "Dummy Header", body: "Dummy Body" },
    ]);
    mockGetLearnMores.mockReturnValue([mockLearnMore]);

    ImportedData.getLearnMores = mockGetLearnMores;
    const rendered = render(
      <LearnMoreItem id="DummyID" onPress={mockPressFunction} />
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("onPress should be called", () => {
    const mockPressFunction = jest.fn();
    const mockGetLearnMores = jest.fn();
    const mockLearnMore = new learnMore("DummyID", "Dummy Title", [
      { header: "Dummy Header", body: "Dummy Body" },
    ]);
    mockGetLearnMores.mockReturnValue([mockLearnMore]);

    ImportedData.getLearnMores = mockGetLearnMores;
    const rendered = render(
      <LearnMoreItem id="DummyID" onPress={mockPressFunction} />
    );

    const learnMoreItem = rendered.getByTestId("learnMore");
    fireEvent(learnMoreItem, "press");
    expect(mockPressFunction).toHaveBeenCalled();
  });

  it("text should be displayed properly", () => {
    const mockPressFunction = jest.fn();
    const mockGetLearnMores = jest.fn();
    const mockLearnMore = new learnMore("DummyID", "Dummy Title", [
      { header: "Dummy Header", body: "Dummy Body" },
    ]);
    mockGetLearnMores.mockReturnValue([mockLearnMore]);

    ImportedData.getLearnMores = mockGetLearnMores;
    const rendered = render(
      <LearnMoreItem id="DummyID" onPress={mockPressFunction} />
    );

    const textComponent = rendered.getByTestId("text");
    expect(textComponent.props.children).toEqual("Dummy Title");
  });
});
