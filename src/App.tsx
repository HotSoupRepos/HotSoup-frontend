import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { Home, MapList, MapPage, } from "@screens";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  MapList: undefined;
  MapPage: undefined;
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

const MapPageScreen = () => {
  return <MapPage></MapPage>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapList" component={MapListScreen} />
        <Stack.Screen name="MapPage" component={MapPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
