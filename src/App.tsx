import React from "react";
import "react-native-gesture-handler";
import { Text, View } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { Home, MapList, InfoScreen } from "@screens";
import { Provider } from "react-redux";
import { store, persistor } from "@store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@theme";
import { Inder_400Regular } from "@expo-google-fonts/inder";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  MapList: undefined;
  InfoScreen: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen = () => {
  return <Home></Home>;
};

const MapListScreen = () => {
  return <MapList></MapList>;
};

const InfoScreenPage = () => {
  return <InfoScreen></InfoScreen>;
};

// If the focused route is not found, we need to assume it's the initial screen
// This can happen during if there hasn't been any navigation inside the screen
// In our case, it's "Home" as that's the first screen inside the navigator
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Map":
      return "MapList";
    case "Info":
      return "Info";
  }
};

const Tabs = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000000" },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === "Map") {
            return <Ionicons name="map" size={size} color={color} />;
          } else if (route.name === "Info") {
            return (
              <Ionicons
                name="information-circle-outline"
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarActiveTintColor: "#ffc529",
        tabBarInactiveTintColor: "#ffffff",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapListScreen} />
      <Tab.Screen name="InfoScreen" component={InfoScreenPage} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [inderLoaded] = useFonts({
    Inder_400Regular,
  });

  const [avenirBlackLoaded] = useFonts({
    AvenirBlack: require("../assets/fonts/avenir-black.ttf"),
  });

  const [avenirMediumLoaded] = useFonts({
    AvenirMedium: require("../assets/fonts/avenir-medium.ttf"),
  });
  const [avenirRomanLoaded] = useFonts({
    AvenirRoman: require("../assets/fonts/avenir-roman.ttf"),
  });

  if (
    !inderLoaded ||
    !avenirBlackLoaded ||
    !avenirMediumLoaded ||
    !avenirRomanLoaded
  ) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="MapList" component={MapListScreen} />
              <Stack.Screen name="InfoScreen" component={InfoScreenPage} />
              <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default registerRootComponent(App);
