import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchWidget/SearchBar";
import HomePageSearchButton from "../components/SearchWidget/HomePageSearchButton";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { SearchWidget } from "@components";

describe("Testing : <SearchWidget />", () => {
  it("search bar renders correctly", () => {
    const { getAllByPlaceholderText } = render(<SearchWidget />);

    expect(getAllByPlaceholderText("Search Zip Code").length).toBe(1);
  });

  it("fire on search change text event", () => {
    const onSearchChangeMock = jest.fn();

    render(<SearchBar onSearchChange={onSearchChangeMock} />);

    fireEvent(
      screen.getByPlaceholderText("Search Zip Code"),
      "onChangeText",
      "ab"
    );
    expect(onSearchChangeMock).toHaveBeenCalledWith("ab");
  });

  it("user can enter the zip code in search bar", () => {
    const onChangeTextMock = jest.fn();
    const CHANGE_TEXT = "951111234";

    render(
      <View>
        <TextInput
          placeholder="Search Zip Code"
          onChangeText={onChangeTextMock}
        />
      </View>
    );

    fireEvent.changeText(
      screen.getByPlaceholderText("Search Zip Code"),
      CHANGE_TEXT
    );
  });

  it("shows invalid input message when zip code is invalid", () => {
    const { getByTestId, getByText } = render(<SearchBar />);

    fireEvent.changeText(getByTestId("ZipCode.Input"), "1234");

    getByText("Please enter a valid zip code");
  });

  it("shows invalid input message when zip code is invalid", () => {
    const { getByTestId, getByText } = render(<SearchBar />);

    fireEvent.changeText(getByTestId("ZipCode.Input"), "1234");

    getByText("Please enter a valid zip code");
  });

  it("fire on search submit event", () => {
    const onSearchSubmitMock = jest.fn();
    const eventData = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };

    render(
      <View>
        <Pressable onPress={onSearchSubmitMock}>
          <Text>Search</Text>
        </Pressable>
      </View>
    );

    fireEvent.press(screen.getByText("Search"), eventData);
    expect(onSearchSubmitMock).toHaveBeenCalledWith(eventData);
  });

  it("handles valid input submission", () => {
    const { getByTestId } = render(<SearchWidget />);

    fireEvent.changeText(getByTestId("ZipCode.Input"), "12345");
    fireEvent.press(getByTestId("Search.Pressable"));
  });
});
