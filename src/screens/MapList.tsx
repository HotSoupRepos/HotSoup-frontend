import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Pressable,
} from "react-native";
import { LocationList } from "@components";
import { useAppSelector, selectLocations } from "@store";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

export default function MapList() {
  const { loading, locations, error } = useAppSelector(selectLocations);

  const [searchText, setSearchText] = useState("");

  const onSearchSubmit = () => {
    alert(searchText);
  };

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={50} animating />
      </View>
    );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.searchBox}>
          <View style={styles.searchInputContainer}>
            <SearchBar
              searchText={searchText}
              onSearchChange={(newSearchText) => setSearchText(newSearchText)}
            />
          </View>

          <Pressable style={styles.searchBtn} onPress={onSearchSubmit}>
            <Feather name="search" style={styles.icon} />
          </Pressable>
          <Pressable style={styles.locationBtn} onPress={() => {}}>
            <MaterialIcons name="my-location" size={25} color="black" />
          </Pressable>
        </View>
      </View>

      {error && <Text>{error}</Text>}
      {!error && <LocationList locations={locations}></LocationList>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0)",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 3,
    gap: 2,
    flex: 1,
    justifyContent: "space-around",
  },
  searchInputContainer: {
    flex: 2,
  },
  searchBtn: {
    backgroundColor: "#ffc40c",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    flex: 0.5,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "black",
    padding: 10,
  },
  locationBtn: {
    backgroundColor: "#ffc40c",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    flex: 0.5,
  },
  iconLocation: {
    alignItems: "center",
    padding: 10,
  },
});
