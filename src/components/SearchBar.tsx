import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  searchText: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({
  searchText,
  onSearchChange,
}: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <Feather name="search" style={styles.icon} />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search Zip Code/Address"
          style={styles.input}
          value={searchText}
          keyboardType="numeric"
          maxLength={9}
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: 300,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "rgba(255,255,255, 0.3)",
    height: 60,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    padding: 15,
  },
});
