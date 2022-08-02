import { Feather } from "@expo/vector-icons";

import { 
    StyleSheet,
    View,
    TextInput,
    Image,
    Pressable,
    Text,
} from "react-native";


function Example() {
    return(
        <View style={styles.container}>
            <View style={styles.searchbar}>
            <View style={styles.iconContainer}>
            <Feather name='search' style={styles.icon}/>
            </View>
            <View style={styles.searchContainer}>
            <TextInput
            style={styles.inputStyles}
            placeholder=" Search Zip Code/Address"
            />
            </View>
            </View>

            <View style={styles.btn}>
            <Pressable>
                <View>
                    <Text style={styles.btnText}>Search</Text>
                </View>
            </Pressable>
            </View>
        </View>

    );
}

export default Example;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: 350,
        height: 150,
    },
    searchContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 15,


    },
    inputStyles: {
        fontSize: 18,
        paddingHorizontal: 8,
        color: 'white',
    },
    iconContainer: {
        height: 45,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        paddingRight: 8,
        paddingVertical: 15,
     
    },
    icon: {
        fontSize: 30,
        color: 'white',
    },
    searchbar: {
        flexDirection: 'row',
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 15,
        height: 60,
    },
    btn: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 5,
        borderColor: "yellow",
        borderRadius: 8,
        paddingHorizontal: 25,
        paddingVertical: 10,
        
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    }
})