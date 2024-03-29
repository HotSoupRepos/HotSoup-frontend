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
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <Feather name="search" style={styles.icon} />
      
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search Zip Code/Address"
            style={styles.input}
            value={searchText}
            onChangeText={onSearchChange}
        />
      </View>
      <View style={styles.btnContainer}> 
        <Pressable
              onPress={onSearchSubmit}
          >
              <Text style={styles.text}>Search</Text>
          </Pressable>
      </View>
        
    </View>
  );
};

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
    alignSelf: 'center',
    color: 'white',
    padding: 15
  },
  btnContainer: {
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "#ffc40c",
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 60
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#F0EEEE",
    }
});

export default SearchBar;