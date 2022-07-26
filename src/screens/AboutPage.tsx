import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ScrollView>
        <Text style={styles.header}> About HotSoup</Text>
        <Text style={styles.text}>
          HotSoup is an OpenSource project started by Robin Weitzman. It 
          is an entirely volunteer-based, co-op project to build a free
          app those in need of a free meal. {"\n"}{"\n"}
          This current version is the first iteration of this project so there may be some errors. If you'd like 
          to know more about this project or report any errors, contact robin@hotsoup.com.
          We appreciate your patience and assistance as we build further versions of this app!{"\n"}
        </Text>
        </ScrollView>
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
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.3)'
  },
  textContainer: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    marginBottom: 36
  }
});



