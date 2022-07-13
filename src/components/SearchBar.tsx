import React from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
    searchText: string,
    onSearchChange: (query: string) => void,
    onSearchSubmit: () => void,
}

function SearchBar ({ searchText, onSearchChange, onSearchSubmit}: SearchBarProps) {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search Zip Code/Address"
            style={styles.inputStyle}
            value={searchText}
            onChangeText={onSearchChange}
        />
      
        <Pressable
            onPress={onSearchSubmit}
            style={styles.buttonStyle}
        >
            <Text style={styles.text}>Search</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 16,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "column",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center',
    color: 'white',
    padding: 15
  },
  buttonStyle: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#e8e11a",
    borderRadius: 6,
    backgroundColor: "transparent",
    padding: 15,
    height: 50

  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F0EEEE",
    }
});

export default SearchBar;