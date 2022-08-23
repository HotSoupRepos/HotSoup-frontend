import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface MapListSearchButtonProps {
  searchText: string;
  onSearchSubmit: () => void;
}

function MapListSearchButton({
  searchText,
  onSearchSubmit,
}: MapListSearchButtonProps) {
  return (
    <Pressable
      disabled={!searchText}
      style={styles.searchBtn}
      onPress={onSearchSubmit}
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
    flex: 0.5,
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
