import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { Home, MapList, Info } from "@screens";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  MapList: undefined;
  Info: undefined;
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


const InfoScreen = () => {
  return <Info></Info>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapList" component={MapListScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
