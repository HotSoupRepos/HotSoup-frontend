import { LocationList, MapWidget } from "@components";
import { selectLocations, useAppSelector } from "@store";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapListLocationButton from "../components/MapListLocationButton";
import SearchWidget from "../components/SearchWidget/SearchWidget";

export default function MapList() {
  const { loading, locations, error } = useAppSelector(selectLocations);

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
      <View style={styles.searchBox}>
        <SearchWidget location="MapList" />
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
    flex: 5,
  },
});
