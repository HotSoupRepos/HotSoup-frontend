import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SoupKitchenModel } from "@store";
import ListItem from "./ListItem";

interface LocationListProps {
  locations: SoupKitchenModel[];
}

export default function LocationList({ locations }: LocationListProps) {
  //TODO - Once ListItem component is finished, refactor this to use FlatList
  const listItems = locations.map((location, index) => (
    <ListItem key={index} locationName={location['name']} />
  ));

  return (
    <View style={styles.container}>
      {listItems}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});