import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Header, MapWidget } from "@app/components";

export interface Region {
  rLatitude: number;
  rLongitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const MapPage: React.FC = () => {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [region, setRegion] = useState<Region>({
    rLatitude: 37.78825,
    rLongitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  function handlePinPlacement(latitude: number, longitude: number): void {
    setPin({
      latitude: latitude,
      longitude: longitude,
    });
  }

  function handleRegionChange(latitude: number, longitude: number) {
    setRegion({
      rLatitude: latitude,
      rLongitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  return (
    <SafeAreaView style={styles.MapPageContainer}>
      <View style={styles.headerContainer}>
        <Header {...region} moveRegion={handleRegionChange} />
      </View>
      <View style={styles.widgetContainer}>
        <MapWidget {...pin} movePin={handlePinPlacement} />
      </View>
    </SafeAreaView>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  MapPageContainer: {
    backgroundColor: "black",
    flex: 1,
    zIndex: 1,
  },
  headerContainer: {
    zIndex: 3,
  },
  widgetContainer: {
    zIndex: 2,
  },
});
