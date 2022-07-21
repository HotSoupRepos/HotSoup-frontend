import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function About() {
    return (
        <View>About Us</View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 40
    },
  });