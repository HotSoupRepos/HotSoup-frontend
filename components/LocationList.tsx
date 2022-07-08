import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Location {
  name: string;
  address: string;
  phone: string;
  lat: string;
  long: string;
}

interface LocationListProps {
  locations: Location[];
}

export default function LocationList({locations}: LocationListProps) {
    
    //TODO - Once ListItem component is finished, refactor this to use FlatList
    const listItems = locations.map((location) =>
    <Text key={location["name"]}>{location["address"]}</Text>
  );
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>LocationList</Text>
        {listItems}
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
    text:
    {
      fontSize: 30
    }
    
  });
  