import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> About HotSoup</Text>
      <Text style={styles.text}>
        HotSoup is an OpenSource project started by Robin Weitzman. It 
        is an entirely volunteer-based, co-op project to build a free
        app those in need of a free meal. {"\n"}
        This current version is the first iteration of this project so there may be some errors. If you'd like 
        to know more about this project or report any errors, contact robin@hotsoup.com.
        We appreciate your patience and assistance as we build further versions of this app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fcb36a',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 100,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  header: {
    color: "#61dafb",
    fontSize: 30,
    marginBottom: 36
  }
});



