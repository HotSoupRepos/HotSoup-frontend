import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";
import { Home, MapList } from "@screens";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShown: false,
          headerShown: false,
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
            }
            return <FontAwesome5 name={iconName} size={26} color={color} />;
          },
          tabBarActiveTintColor: "#feb74c",
          tabBarInactiveTintColor: "#d9d9d9",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MapList" component={MapListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
