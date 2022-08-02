import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Example from '../components/Example';

type Nav = {
  navigate: (value: string) => void;
}
  
export default function Home() {
    const navigation = useNavigation<Nav>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HotSoup</Text>
            <Pressable
                style={{
                    backgroundColor: "green",
                    zIndex: 0.5
                }}
                onPress={() => navigation.navigate('MapList')}>
                <Text style={styles.text}>See Meals Nearby</Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "green",
                zIndex: 0.5
              }}
              onPress={() => navigation.navigate('MapPage')}>
              <Text style={styles.text}> MapWidget </Text>

            </Pressable>

              <Example />
            
            <StatusBar style="auto" />
          </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 40
    },
  });
  