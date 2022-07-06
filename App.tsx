import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import MapContainer from './pages/MapContainer';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Map: undefined; 
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};


const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
        <Text>HotSoup</Text>
        <Button
          title="See Meals Nearby"
          onPress={
            () => navigation.navigate('Map')
          }
    />
        <StatusBar style="auto" />
      </View>
  )
}

const MapContainerScreen = ({ navigation }: Props) => {
  return <MapContainer></MapContainer>;
};

export default function App({ navigation }: Props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapContainerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
