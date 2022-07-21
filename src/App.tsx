import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";
import { Home, MapList, About } from "@screens";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Button } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  MapList: undefined;
};

type ProfileScreenNavigationProp = BottomTabNavigationProp<
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

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitleAlign: "center",
        headerRight: () => (
          <Button
            onPress={() => alert("This is a button!")}
            title="right"
            color="#f0f"
          />
        ),
        headerLeft: () => (
          <Button
            onPress={() => alert("This is a button!")}
            title="left"
            color="#cc0"
          />
        ),
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: "#000",
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "MapList") {
            iconName = "map";
          } else if (route.name === "About") {
            iconName = "info-circle";
          }
          return <FontAwesome5 name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: "#feb74c",
        tabBarInactiveTintColor: "#d9d9d9",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="MapList"
        component={MapListScreen}
        options={{ headerTitle: "Maps" }}
      />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
