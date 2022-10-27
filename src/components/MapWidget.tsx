import { View, StyleSheet, Dimensions, Text } from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";

interface Location {
  name: string;
  address: string;
  phone: string;
  lat: string;
  lng: string;
}

interface LocationListProps {
  locations: Location[];
}

const initialRegionParams = {
  latitude: 41.1828,
  longitude: -73.218,
  latitudeDelta: 0.02,
  longitudeDelta: 0.0421,
};

const MapWidget: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={initialRegionParams}
        provider="google"
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(location["lat"]),
              longitude: parseFloat(location["lng"]),
            }}
          >
            <Callout>
              <Text> {location["address"]} </Text>
              <Text> {location["phone"]} </Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MapWidget;

const styles = StyleSheet.create({
  mapContainer: {
    height: "35%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
