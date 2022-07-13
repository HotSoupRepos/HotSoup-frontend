import { 
    StyleSheet,
    View,
    Text,
    Image,
 } from "react-native";
 import BackButton from "./BackButton";
 import SearchBar from "./SearchBar";

function Header() {
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
                <Image style={styles.greySearchImage} source={require('../assets/search-grey2.png')} />
                {/* </View> */}
                <SearchBar />
                </View>
                <Image style={styles.searchImage} source={require('../assets/search.png')} />
                <Image style={styles.targetImage} source={require('../assets/target.png')} />
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
        paddingHorizontal: 18,
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
    searchImage: {
        borderRadius: 8,
        marginHorizontal: 8,
        paddingVertical: 20,

        flex: 0.5,
    },
    greySearchContainer: {
        backgroundColor: '#040404',
        paddingVertical: 5,
    },
    greySearchImage: {
        padding: 25,

    },
    targetImage: {
        borderWidth: 2,
        borderColor: '#FEB74C',
        borderRadius: 8,
        paddingVertical: 18,
        flex: 0.5,
    }

})
