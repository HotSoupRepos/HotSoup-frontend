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
import { Feather } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";

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
          <SearchBar
            searchText={searchText}
            onSearchChange={(newSearchText) => setSearchText(newSearchText)}
          />

          <Pressable style={styles.searchBtn} onPress={onSearchSubmit}>
            <Feather name="search" style={styles.icon} />
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
    gap: 10,
  },
  searchBtn: {
    backgroundColor: "#ffc40c",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "black",
    padding: 15,
  },
});
