import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { Button, useTheme } from "react-native-paper";
import { CustomTheme } from "@theme";

type Nav = {
  navigate: (value: string) => void;
};

const CustomButton = styled(Button)``;

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation<Nav>();

  const theme = useTheme();

  console.log(theme);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Info")}>
        <Text style={styles.title}>HotSoup</Text>
      </Pressable>
      <Pressable
        style={styles.btnContainer}
        onPress={() => navigation.navigate("MapList")}
      >
        <CustomButton>See Meals Nearby</CustomButton>
      </Pressable>
      <Text style={styles.text}>or</Text>
      <SearchBar
        searchText={searchText}
        onSearchChange={(newSearchText) => setSearchText(newSearchText)}
        onSearchSubmit={() => alert(searchText)}
      />
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
});
