import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.header}> About HotSoup</Text>
        <Text style={styles.text}>
          HotSoup is an OpenSource project started by Robin Weitzman. It 
          is an entirely volunteer-based, co-op project to build a free
          app those in need of a free meal. {"\n"}{"\n"}
          This current version is the first iteration of this project so there may be some errors. If you'd like 
          to know more about this project or report any errors, contact robin@hotsoup.com.
          We appreciate your patience and assistance as we build further versions of this app!{"\n"}
        </Text>
        <StatusBar style="auto" />
      </View> 
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
    alignItems: "center",
    backgroundColor: "#fcb36a"
  },
  textBlock: {
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    transparency: "50%"
  },
  text: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold"
  },
  header: {
    color: "#fff",
    fontSize: 42,
    marginBottom: 36
  }
});



