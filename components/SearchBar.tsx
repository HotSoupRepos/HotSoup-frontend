
import { 
    StyleSheet, 
    View,
    TextInput,

} from "react-native";


function SearchBar() {
    return (
        <View style={styles.searchContainer}>
            <TextInput 
            style={styles.searchText} 
            value="Search Zip/Address"

            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#404040',
    },
    searchText: {
        color: 'white',
        height: 50,
        width: 200,
    },
})

