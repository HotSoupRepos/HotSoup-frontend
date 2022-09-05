import { Feather, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface SearchBarProps {
  searchText: string;
  setSearchText: (query: string) => void;
  onSearchChange: (query: string) => void;
  validText: boolean;
  clicked: boolean;
  setClicked: (query: boolean) => void;
  location: string;
}

function SearchBar({
  searchText,
  setSearchText,
  onSearchChange,
  validText,
  clicked,
  setClicked,
  location,
}: SearchBarProps) {
  return (
    <View style={location === "MapList" ? { flex: 5 } : {}}>
      <View style={styles.searchContainer}>
        <View
          style={
            clicked && !validText
              ? [styles.searchBar__clicked, { border: "2px solid red" }]
              : clicked && validText
              ? [styles.searchBar__clicked, { border: "2px solid orange" }]
              : styles.searchBar__unclicked
          }
        >
          {clicked && searchText && validText ? (
            <AntDesign
              name="checkcircleo"
              style={[styles.icon, { color: "green" }]}
            />
          ) : clicked && !validText ? (
            <MaterialIcons
              name="error-outline"
              style={[styles.icon, { color: "red" }]}
            />
          ) : (
            <Feather name="search" style={styles.icon} />
          )}

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search Zip Code"
            style={styles.input}
            value={searchText}
            keyboardType="numeric"
            maxLength={9}
            onChangeText={onSearchChange}
            onFocus={() => setClicked(true)}
            testID="ZipCode.Input"
          />
          {clicked && validText && (
            <View style={[styles.crossIcon, { backgroundColor: "white" }]}>
              <Entypo
                name="cross"
                size={20}
                color={"black"}
                onPress={() => {
                  setSearchText("");
                }}
              />
            </View>
          )}
          {clicked && !validText && (
            <View style={[styles.crossIcon, { backgroundColor: "red" }]}>
              <Entypo
                name="cross"
                size={20}
                color={"white"}
                onPress={() => {
                  setSearchText("");
                }}
              />
            </View>
          )}
        </View>
      </View>
      <View>
        {!validText ? (
          <Text testID="Error.Text" style={styles.errorMessage}>
            Please enter a valid zip code
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "rgba(255,255,255, 0.3)",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginHorizontal: 15,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "rgba(255,255,255, 0.3)",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 60,
    marginHorizontal: 15,
  },
  input: {
    fontSize: 20,
    width: "80%",
    marginLeft: 10,
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    color: "white",
  },
  errorMessage: {
    marginHorizontal: 25,
    fontSize: 20,
    color: "red",
  },
  crossIcon: {
    padding: 5,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default SearchBar;
