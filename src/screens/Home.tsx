import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';

type Nav = {
  navigate: (value: string) => void;
}
  
export default function Home() {

    const [searchText, setSearchText] = useState('');

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
            <SearchBar searchText={searchText} onSearchChange={newSearchText => setSearchText(newSearchText)} onSearchSubmit={() => alert(searchText)} />
            <StatusBar style="auto" />
          </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 40
    },
  });
  