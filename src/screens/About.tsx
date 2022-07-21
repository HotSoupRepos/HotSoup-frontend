import { View, Text, StyleSheet } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default About;
