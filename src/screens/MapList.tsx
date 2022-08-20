import { LocationList } from "@components";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { selectLocations, useAppSelector } from "@store";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
      <View></View>
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
          <MaterialIcons
            style={styles.iconLocation}
            name="my-location"
            size={25}
          />
        </Pressable>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 3,
    paddingVertical: 18,
  },
  searchInputContainer: {
    flex: 3.5,
  },
  searchBtn: {
    backgroundColor: "#ffc40c",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 10,
    flex: 0.5,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "black",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  locationBtn: {
    backgroundColor: "transparent",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    borderColor: "#ffc40c",
    borderWidth: 2,
    flex: 0.5,
    marginHorizontal: 5,
  },
  iconLocation: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#ffc40c",
  },
});
