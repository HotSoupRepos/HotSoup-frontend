import { 
    StyleSheet,
    Image,
    View,
 } from "react-native";


 function BackButton() {
    return (
        <View>
            <Image source={require('../assets/previous.png')} />
        </View>
    );
 };

 export default BackButton;

 const styles = StyleSheet.create({

 })