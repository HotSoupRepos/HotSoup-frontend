import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function LocationList() {

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {

      fetch("http://192.168.1.5:8000/locations", {
        method: "GET",
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        }})
        .then(response => response.json())
        .then(data =>  
          setLocations(data["connecticut"])
        )
        .then(() =>
          setLoading(false)
        )


    },[]);

    const places = locations.map((location) =>
    <Text key={location["name"]}>{location["address"]}</Text>
  );
    
    return (
      <View style={styles.container}>
        <Text>LocationList</Text>
        <View>{loading ? <Text>Still loading...</Text> : places}</View>
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