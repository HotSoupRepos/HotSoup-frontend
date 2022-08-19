import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";

type Nav = {
  navigate: (value: string) => void;
};

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation<Nav>();

  const onSearchSubmit = () => {
    alert(searchText);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Info")}>
        <Text style={styles.title}>HotSoup</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigate("MapList")}
      >
        <Text style={styles.btnText}>See Meals Nearby</Text>
      </Pressable>
      <Text style={styles.text}>or</Text>

      <SearchBar
        searchText={searchText}
        onSearchChange={(newSearchText) => setSearchText(newSearchText)}
      />
      <View style={styles.btnContainerSearch}>
        <Pressable onPress={onSearchSubmit}>
          <Text style={styles.textSearch}>Search</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffc40c",
  },
  btnContainer: {
    width: 300,
    marginTop: 30,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: "#ffc40c",
  },
  btnText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  text: {
    padding: 50,
    fontSize: 20,
  },
  btnContainerSearch: {
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "#ffc40c",
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 60,
    width: 300,
  },
  textSearch: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F0EEEE",
  },
});
