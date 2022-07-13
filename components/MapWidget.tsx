import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native"
import MapView, { Marker } from "react-native-maps";


function MapWidget() {
    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                  latitude: 40.790886,
                  longitude: 	-73.974709,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
            >
            <Marker 
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            />
            <Marker 
              coordinate={{
                latitude: 40.790886,
                longitude: 	-73.974709,
            }}
            />


            </MapView>
        </View>
    );
};

export default MapWidget;

const styles = StyleSheet.create({
    mapContainer: {
      // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
    },
    map: {
      width: 400,
      height: 300,
    },
  });