import { 
    StyleSheet,
    SafeAreaView, 
    Text,
} from "react-native";
import Header from "../components/Header";
import MapWidget from "../components/MapWidget";


function MapPage() {
    return (
        <SafeAreaView>
            <Header />
            <MapWidget/>
        </SafeAreaView>
    );
};

export default MapPage;

const styles = StyleSheet.create({

})