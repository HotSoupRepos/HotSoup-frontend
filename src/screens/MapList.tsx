import { LocationList, MapWidget } from "@components";
import {
  getLocationsAsync,
  selectLocations,
  useAppSelector,
  useAppDispatch,
} from "@store";
import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapListLocationButton from "../components/MapListLocationButton";
import MapListSearchButton from "../components/MapListSearchButton";
import SearchBar from "../components/SearchBar";

export default function MapList() {
  const dispatch = useAppDispatch();
  const { loading, locations, error } = useAppSelector(selectLocations);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getLocationsAsync());
    if (loading || error) {
      dispatch(getLocationsAsync());
    }
  }, []);

  const onSearchSubmit = () => {
    alert(searchText);
  };

  const onLocationSubmit = () => {
    alert("Submitting Location");
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
            onSearchChange={(newSearchText) => setSearchText(newSearchText)}
          />
        </View>
        <MapListSearchButton onSearchSubmit={onSearchSubmit} />
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
