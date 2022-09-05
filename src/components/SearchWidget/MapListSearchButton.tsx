import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface MapListSearchButtonProps {
  onSearchSubmit: () => void;
}

function MapListSearchButton({ onSearchSubmit }: MapListSearchButtonProps) {
  return (
    <Pressable
      style={styles.searchBtn}
      onPress={onSearchSubmit}
      testID="Search.Pressable"
    >
      <Feather name="search" style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchBtn: {
    backgroundColor: "#ffc40c",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  icon: {
    fontSize: 25,
    alignSelf: "center",
    color: "black",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});

export default MapListSearchButton;
