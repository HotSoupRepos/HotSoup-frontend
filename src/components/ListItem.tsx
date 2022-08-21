import React from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type props = {
  locationName: string,
};

let {width: screenWidth, height: screenHeight} = Dimensions.get('window')

export default function ListItem({ locationName }: props) {
  const handlePress = () => {
    console.log("Info button cliked!");
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          {locationName}
        </Text>
      </View>
      <View style={styles.distanceContainer}>
        {/* Currently distance is hard coded beacuse there's no distance data from an API*/}
        <Text style={styles.distanceText}>0.2 mi</Text>
      </View>
      <Pressable onPress={handlePress} style={styles.infoBtn}>
        <View>
          <Ionicons name="information-circle-outline" size={30} color="white" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: screenWidth,
    height: 'auto',
    marginBottom: "0.5%",
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    backgroundColor: "#232323",
    flex: 0.75,
    marginLeft: "2%",
    marginTop: "5%",
    marginBottom: "5%",
    height: "50%",
  },
  locationText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
    paddingRight: "0.5%",
  },
  distanceContainer: {
    flex: 0.14,
    backgroundColor: "#4F4F4F",
    borderRadius: 5,
    marginLeft: "0.5%",
    marginTop: "5%",
    marginBottom: "5%",
    height: "40%",
  },
  distanceText: {
    color: "#B2FFC3",
    marginLeft: "10%",
    marginTop: "10%",
    marginBottom: "10%",
    marginRight: "10%",
  },
  infoBtn: {
    flex: 0.1,
    marginLeft: "1.5%",
    marginTop: "5%",
    marginRight: "0.5%",
    marginBottom: "5%",
  },
});