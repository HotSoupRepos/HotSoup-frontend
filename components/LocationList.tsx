import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function LocationList() {

    const [locations, setLocations] = useState([]);
    
    return (
      <View style={styles.container}>
        <Text>LocationList</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });