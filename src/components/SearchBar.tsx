
import { 
    StyleSheet, 
    View,
    TextInput,

} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface RegionProps {
    latitude: number;
    longitude: number;
    moveRegion: (latitude: number, longitude: number) => any;
}


const SearchBar: React.FC<RegionProps> = ({latitude, longitude, moveRegion}) => {
    console.log(latitude);
    return (
        <View style={styles.searchContainer}>
            {/* <TextInput 
            style={styles.searchText} 
            placeholder="Search Zip/Address"
            /> */}
            <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            GooglePlacesSearchQuery={{
                rankby: "distance",
            }}
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            moveRegion(details?.geometry.location.lat, details?.geometry.location.lng)
            // console.log(typeof details?.geometry.location.lat )
            }}
            query={{
    
            language: 'en',
            components: 'country:us',
            types: 'establishment',
            radius: 3000,
            location: `${latitude}, ${longitude}`
            }}
            styles={{
            container: { flex: 0, width: '100%', backgroundColor: '#404040', zIndex: 2},
            listView: { backgroundColor: 'white',},
            textInput: { backgroundColor: '#404040', color: 'white', paddingTop: 13, }
            }}
            />

        </View>
    );
};

export default SearchBar;

// position: 'relative', zIndex: 2

const styles = StyleSheet.create({
    searchContainer: {
        width: "80%",
        // paddingVertical: 15,
    },
})

