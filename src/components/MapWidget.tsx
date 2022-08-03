
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Button,
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


const MapWidget: React.FC<LocationListProps> = ({locations}) => {

    const markers = locations.map((location, index) => {
      return (
        <Marker 
        key={index}
        coordinate={{ latitude: parseInt(location['lat']), longitude: parseInt(location['long']) }}
        draggable={true}
        >
        <Callout>
          <Text> {location['address']} </Text>
          <Text> {location['phone']}  </Text>
          <Text> {location['lat']}  </Text>
          <Text> {location['long']}  </Text>
        </Callout>
        </Marker>
      )
    })
    

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                initialRegion={{
                  latitude: 40.7128,
                  longitude: 	-74.0060,
                  latitudeDelta: 2,
                  longitudeDelta: 0.0421,
                }}   
                provider="google"
            >

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