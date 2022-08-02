import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Button,
} from "react-native"
import MapView, { Callout, Marker } from "react-native-maps";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import GOOGLE_PLACES_API_KEY from 

interface LocationProps {
  latitude: number;
  longitude: number;
  rLatitude: number;
  rLongitude: number;
  movePin: (latitude: number, longitude: number) => void;
}


const MapWidget: React.FC<LocationProps> = ({latitude, longitude, rLatitude, rLongitude, movePin}) => {

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: 	-122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                provider="google"
            >

            {/* <Marker 
              coordinate={ { latitude:  }} */}
            <Marker 
              coordinate={ { latitude: latitude, longitude: longitude }} 
              draggable={true}
              onDragStart={(e) => {
                console.log("Drag start", e.nativeEvent.coordinate);
              }}
              onDragEnd={(e) => movePin(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude) }
            >
              <Callout>
                <Text> Current Location </Text>
              </Callout>
            </Marker>


            </MapView>
        </View>
    );
};

export default MapWidget;

const styles = StyleSheet.create({
    mapContainer: {
      // position: 'relative',
      // zIndex: 0,
      // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      // marginTop: 250,
    },
    map: {
      width: 400,
      height: 300,
    },
    placesContainer: {
      flex: 1,
      width: '80%',

    },
    listView: {
      backgroundColor: 'white',
    }
  });