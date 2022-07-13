import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MapPage from './screens/MapPage';

export default function App() {
  return (
    <View style={styles.container}>
      <MapPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
});
