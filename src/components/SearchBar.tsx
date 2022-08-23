import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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

        <GooglePlacesAutocomplete
          placeholder="Search Zip Code/Address"
          minLength={2}
          autoFocus={false}
          returnKeyType={"search"}
          listViewDisplayed="auto"
          fetchDetails={true}
          renderDescription={(row) => row.description}
          styles={{
            textInputContainer: {
              width: "100%",
            },
            textInput: {
              color: "#5d5d5d",
              fontSize: 16,
              backgroundColor: "transparent",
              marginTop: 8,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
            description: {
              fontWeight: "bold",
            },
          }}
          onPress={(data, details = null) => {
            console.log("data", data);
            console.log("details", details);
          }}
          getDefaultValue={() => {
            return "";
          }}
          query={{
            key: "YOUR_API_KEY",
            language: "en",
            types: "establishment",
          }}
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch"
          GoogleReverseGeocodingQuery={{}}
          GooglePlacesSearchQuery={{
            rankby: "distance",
            type: "meal_takeaway",
          }}
          GooglePlacesDetailsQuery={{
            fields: "formatted_address",
          }}
          debounce={200}
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
