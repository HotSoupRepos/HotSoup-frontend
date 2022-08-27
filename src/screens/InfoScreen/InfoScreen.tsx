import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, TextContainer, StyledHeaderText, StyledText } from './styledComponents/InfoScreenStyledComponents';

const InfoScreen: React.FC = ({}) => (
  <Container>
    <ScrollView>
      <TextContainer>
        <StyledHeaderText>About HotSoup</StyledHeaderText>
        <StyledText>
          here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. 
          {"\n"}{"\n"}here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. 
          {"\n"}{"\n"}Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. 
          {"\n"}{"\n"}Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. here is the end of all life as we know it. Now we shall die. AHHHH SCREAAM RUNNNN AHHHHHH. </StyledText>
      </TextContainer>
    </ScrollView>
  </Container>
)

export default InfoScreen
  