import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocationList } from "@components";

export default function MapList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.5:8000/locations", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setLocations(data["connecticut"]));
  }, []);

  return (
    <View style={styles.container}>
      <LocationList locations={locations}></LocationList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
