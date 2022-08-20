import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

interface MapListLocationButtonProps {
  onLocationSubmit: () => void;
}

function MapListLocationButton({
  onLocationSubmit,
}: MapListLocationButtonProps) {
  return (
    <Pressable style={styles.locationBtn} onPress={onLocationSubmit}>
      <MaterialIcons style={styles.iconLocation} name="my-location" size={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  locationBtn: {
    backgroundColor: "transparent",
    borderRadius: 8,
    height: 60,
    marginTop: 16,
    marginBottom: 10,
    borderColor: "#ffc40c",
    borderWidth: 2,
    flex: 0.5,
    marginHorizontal: 5,
  },
  iconLocation: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "#ffc40c",
  },
});

export default MapListLocationButton;
