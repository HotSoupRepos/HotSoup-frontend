import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HomePageSearchButton from "../components/HomePageSearchButton";
import SearchBar from "../components/SearchBar";

type Nav = {
  navigate: (value: string) => void;
};

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const navigation = useNavigation<Nav>();

  const handleSearchSubmit = () => {
    if (!searchText.trim() || !checkValid(searchText)) {
      setIsValid(false);
    } else {
      if (checkValid(searchText)) {
        alert(`ZipCode ${searchText} is valid!`);
      }
      setIsValid(true);
      setSearchText("");
    }
  };

  // Check if zipcode is valid
  const checkValid = (searchText: string) => {
    const validZipCode = /^\d{5}(?:[- ]?\d{4})?$/;
    return validZipCode.test(searchText);
  };

  // Restrict users to enter only numbers and dashes
  const handleSearchChange = (newSearchText: string) => {
    setSearchText(newSearchText.replace(/[^0-9\-]/g, ""));
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
        validText={isValid}
        onSearchChange={(newSearchText) => handleSearchChange(newSearchText)}
      />
      <HomePageSearchButton onSearchSubmit={handleSearchSubmit} />
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
