import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { LocationList, MapWidget } from "@components";
import { useAppSelector, selectLocations } from "@store";

export default function MapList() {
  const { loading, locations, error } = useAppSelector(selectLocations);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} animating />
      </View>
    );

  return (
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
      {!error && <MapWidget locations={locations}/>}
      {!error && <LocationList locations={locations}></LocationList>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
