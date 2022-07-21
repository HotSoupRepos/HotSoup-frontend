import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text>
        HotSoup is an OpenSource project started by Robin Weitzman. It 
        is an entirely volunteer-based, co-op project to build a free
        app those in need of a free meal.
      </Text>
      <Text>
        This current version is the first iteration of this project so there may be some errors. If you'd like 
        to know more about this project or report any errors, contact robin@hotsoup.com.
        We appreciate your patience and assistance as we build further versions of this app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcb36a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
});