import styled from 'styled-components/native';
import { Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const Container = styled.View`
height: ${SCREEN_HEIGHT}px;
width: ${SCREEN_WIDTH}px;
background-color: ${(props) => props.theme.customColors.background.primary};
`

export const TextContainer = styled.View`
margin-bottom: 120px;
margin-horizontal: 20px;
margin-top: 50px;
padding: 20px;
border-radius: 5px;
backgroundColor: ${(props) => props.theme.customColors.background.secondary};
`

export const StyledHeaderText = styled.Text`
text-align: center;
margin: 10px;
color: ${(props) => props.theme.customColors.text.primary};
font-family: ${(props) => props.theme.fonts.Inder_400Regular};
font-size: ${(props) => props.theme.fontSizes[4]}
`

export const StyledText = styled.Text`
color: ${(props) => props.theme.customColors.text.primary};
font-family: ${(props) => props.theme.fonts.Inder_400Regular};
font-size: ${(props) => props.theme.fontSizes[1]}
`

