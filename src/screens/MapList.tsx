import { LocationList, MapWidget } from "@components";
import { selectLocations, useAppSelector } from "@store";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapListLocationButton from "../components/MapListLocationButton";
import MapListSearchButton from "../components/MapListSearchButton";
import SearchBar from "../components/SearchBar";

export default function MapList() {
  const { loading, locations, error } = useAppSelector(selectLocations);

  const [searchText, setSearchText] = useState("");

  const onSearchSubmit = () => {
    alert(searchText);
  };

  const onLocationSubmit = () => {
    alert("Submitting Location");
  };

  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText.replace(/[^0-9]/g, ""));
  };

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} animating />
      </View>
    );

  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.searchBox}>
        <View style={styles.searchInputContainer}>
          <SearchBar
            searchText={searchText}
            onSearchChange={(newSearchText) =>
              handleSearchChange(newSearchText)
            }
          />
        </View>
        <MapListSearchButton
          searchText={searchText}
          onSearchSubmit={onSearchSubmit}
        />
        <MapListLocationButton onLocationSubmit={onLocationSubmit} />
      </View>

      {error && <Text>{error}</Text>}
      {!error && <MapWidget locations={locations} />}
      {!error && <LocationList locations={locations}></LocationList>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    paddingVertical: 18,
  },
  searchInputContainer: {
    flex: 3.5,
  },
});
