import React, { useState } from "react";
import { 
    StyleSheet,
    SafeAreaView, 
    Text,
    View,
} from "react-native";
import Header from "../components/Header";
import MapWidget from "../components/MapWidget";


function MapPage() {
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
      })
    
      const [region, setRegion] = useState({
        rLatitude: 37.78825,
        rLongitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })

      function handlePinPlacement(latitude: number, longitude: number) {
        setPin({
            latitude: latitude,
            longitude: longitude
        })
      }

      function handleRegionChange(latitude: number, longitude: number) {
        setRegion({
            rLatitude: latitude,
            rLongitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
      }

    return (
        <SafeAreaView style={styles.MapPageContainer}>
            <View style={styles.headerContainer}>
            <Header {...region} moveRegion={handleRegionChange}  />
            </View>
            <View style={styles.widgetContainer}>
            <MapWidget {...pin} {...region} movePin={handlePinPlacement}  />
            </View>
        </SafeAreaView>
    );
};

export default MapPage;

const styles = StyleSheet.create({
    MapPageContainer: {
        backgroundColor: 'black',
        flex: 1,
        zIndex: 1
    },
    headerContainer: {
        zIndex: 3
    },
    widgetContainer: {
        zIndex: 2
    },
})