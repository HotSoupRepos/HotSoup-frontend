// import { useState } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Button,
} from "react-native"

import MapView, { Marker, Callout } from "react-native-maps";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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


// const MapWidget: React.FC<LocationListProps> = ({locations}) => {
  function MapWidget({locations}: LocationListProps) {

    const markers = locations.map((location) => {
      return (
        
        <Marker 
        coordinate={{ latitude: parseInt(location['lat']), longitude: parseInt(location['long']) }}
        
        >
        <Callout>
          <Text> Current Location </Text>
        </Callout>
        </Marker>
      )
    })
    

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

            <Marker 
              coordinate={ { latitude: 37.78825, longitude: -122.4324 }} 
              // draggable={true}
              // onDragStart={(e) => {
              //   console.log("Drag start", e.nativeEvent.coordinate);
              // }}
              // onDragEnd={(e) => movePin(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude) }
            >
              <Callout>
                <Text> Current Location </Text>
              </Callout>
            </Marker>

            {markers}




            </MapView>
        </View>
    );
};

export default MapWidget;

const styles = StyleSheet.create({
    mapContainer: {
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
  });