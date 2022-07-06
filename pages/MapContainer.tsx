import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import LocationList from '../components/LocationList';


export default function MapContainer() {

    return (
      <View style={styles.container}>
        <Text>MapScreen</Text>
        <LocationList></LocationList>
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