import React, { FC } from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { Home, MapList } from "@screens";
import { View, Text, Button, StyleSheet} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  MapList: undefined;
  About: undefined;
};

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "Home"
// >;

const AboutScreen = () => {
  return <View style={styles.container}><Text>About page</Text></View>;
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackScreen:FC<RootStackParamList> =() => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MapList" component={MapList} />
    </HomeStack.Navigator>
  );
}

const MapListStack = createNativeStackNavigator<RootStackParamList>();

const MapListStackScreen:FC<RootStackParamList> = () => {
  return (
    <MapListStack.Navigator>
      <MapListStack.Screen name="MapList" component={MapList} />
      <MapListStack.Screen name="About" component={AboutScreen} />
    </MapListStack.Navigator>
  );
}

const AboutStack = createNativeStackNavigator<RootStackParamList>();

const AboutStackScreen:FC<RootStackParamList> = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="MapList" component={MapListStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default registerRootComponent(App);
