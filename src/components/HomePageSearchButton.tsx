import { Pressable, StyleSheet, Text, View } from "react-native";

interface HomePageSearchButtonProps {
  onSearchSubmit: () => void;
}

function HomePageSearchButton({ onSearchSubmit }: HomePageSearchButtonProps) {
  return (
    <View>
      <Pressable style={styles.btnContainerSearch} onPress={onSearchSubmit}>
        <Text style={styles.textSearch}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default HomePageSearchButton;
