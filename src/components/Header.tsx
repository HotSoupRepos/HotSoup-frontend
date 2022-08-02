import { 
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
 } from "react-native";
 import BackButton from "./BackButton";
 import SearchBar from "./SearchBar";

 interface RegionProps {
    latitude: number;
    longitude: number;
    moveRegion: (latitude: number, longitude: number) => any;
 }

const Header: React.FC<RegionProps> = ({latitude, longitude, moveRegion}) => {


    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerTopContainer}>
                <View style={styles.backButtonContainer}>
                    <BackButton />
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}> HotSoup </Text>
                </View>
            </View>
            <View style={styles.headerBottomContainer}>
                <View style={styles.searchContainer}>
                {/* <View style={styles.greySearchContainer}> */}
                <Image style={styles.greySearchImage} source={require('../icons/search-grey2.png')} />
                {/* </View> */}
                <SearchBar latitude={latitude} longitude={longitude} moveRegion={moveRegion} />
                </View>
                {/* <Pressable> */}
                <View>
                <Image style={styles.searchImage} source={require('../icons/search.png')} />
                </View>
                <View>
                {/* </Pressable> */}
                <Image style={styles.targetImage} source={require('../icons/target.png')} />
                </View>
            </View>

        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerText: {
        color: '#FEB74C',
        fontWeight: "normal",
        fontSize: 24,
        backgroundColor: '#000000',
        paddingTop: 5,
    },
    headerContainer: {
        // alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 8,
        flexDirection: 'column',

    },
    headerTopContainer: {
        flexDirection: 'row',
    },
    headerTextContainer: {
        flex: 2,
    },
    backButtonContainer: {
        flex: 1,
        paddingTop: 10,
    },
    headerBottomContainer: {
        flexDirection: 'row',

        paddingVertical: 18,
    },
    searchContainer: {
        // paddingHorizontal: 8,
        flex: 3.5,
        flexDirection: 'row',

    },
    yellowSearchIcon: {

    },
    searchImage: {
        borderRadius: 8,
        marginHorizontal: 7,
        paddingVertical: 18,
        height: 45,
        width: 42,
        // paddingHorizontal: 10,
        // flex: 0.5,
    },
    greySearchContainer: {
        backgroundColor: '#040404',
        paddingVertical: 4,
    },
    greySearchImage: {
        padding: 24.5,

    },

    targetImage: {
        borderWidth: 2,
        borderColor: '#FEB74C',
        borderRadius: 8,
        paddingVertical: 18,
        height: 45,
        width: 42,
        // flex: 0.5,
    },

})
