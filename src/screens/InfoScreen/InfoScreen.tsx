import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, TextContainer, StyledHeaderText, StyledText } from './styledComponents/InfoScreenStyledComponents';

const InfoScreen: React.FC = ({}) => (
  <Container>
    <ScrollView>
      <TextContainer>
        <StyledHeaderText>About HotSoup</StyledHeaderText>
        <StyledText>
         Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info.
          {"\n"}{"\n"}Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info.Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info.
          {"\n"}{"\n"}Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info.Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. Here is the hotsoup info. </StyledText>
      </TextContainer>
    </ScrollView>
  </Container>
)

export default InfoScreen
  