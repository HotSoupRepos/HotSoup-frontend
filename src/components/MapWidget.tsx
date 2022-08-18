import {
  View,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native"

import MapView, { Marker, Callout } from "react-native-maps";


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


const MapWidget: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 40.7128,
          longitude: -74.0060,
          latitudeDelta: 2,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: parseFloat(location['lat']), longitude: parseFloat(location['long']) }}
          >
            <Callout>
              <Text> {location['address']} </Text>
              <Text> {location['phone']}  </Text>
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
    height: '35%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});