import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "./SearchBar";
import HomePageSearchButton from "./HomePageSearchButton";
import MapListSearchButton from "./MapListSearchButton";

interface SearchWidgetProps {
  location: string;
}

const SearchWidget = ({ location }: SearchWidgetProps) => {
  const [searchText, setSearchText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [clicked, setClicked] = useState(false);

  // Searching only valid zipcode
  const handleSearchSubmit = () => {
    if (!searchText.trim() || !checkValid(searchText)) {
      setIsValid(false);
    } else {
      console.log(`Zip code is valid! Searching ${searchText}`);
      setSearchText("");
      setClicked(false);
      setIsValid(true);
    }
  };

  // Check if zipcode is valid
  const checkValid = (searchText: string) => {
    const validZipCode = /^\d{5}(?:[- ]?\d{4})?$/;
    return validZipCode.test(searchText);
  };

  // Restrict users to enter only numbers and dashes
  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText.replace(/[^0-9]/g, ""));
    checkValid(newSearchText) ? setIsValid(true) : setIsValid(false);
  };

  return (
    <View
      style={
        location === "Home"
          ? { flexDirection: "column" }
          : { flexDirection: "row", flex: 3.5 }
      }
    >
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        validText={isValid}
        clicked={clicked}
        setClicked={setClicked}
        onSearchChange={(newSearchText) => handleSearchChange(newSearchText)}
        location={location}
      />
      {location === "Home" ? (
        <HomePageSearchButton onSearchSubmit={handleSearchSubmit} />
      ) : (
        <MapListSearchButton onSearchSubmit={handleSearchSubmit} />
      )}
    </View>
  );
};

export default SearchWidget;
