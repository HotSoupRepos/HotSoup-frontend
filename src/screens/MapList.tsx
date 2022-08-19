import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { LocationList, ListItem } from "@components";
import {
  useAppDispatch,
  getLocationsAsync,
  useAppSelector,
  selectLocations,
} from "@store";

export default function MapList() {
  const dispatch = useAppDispatch();
  const { loading, locations, error } = useAppSelector(selectLocations);

  useFocusEffect(
    useCallback(() => {
      dispatch(getLocationsAsync());
    }, [dispatch, getLocationsAsync])
  );

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} animating />
      </View>
    );

  return (
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
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
