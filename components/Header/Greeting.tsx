import React, { FunctionComponent} from 'react'
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { fonts } from '../shared';
import { colors } from '../colors';



interface GreetingProps {
    mainText: string;
    subText: string;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <GreetingView>
        <MainText>{props.mainText}</MainText>
        <SubText>{props.subText}</SubText>
    </GreetingView>
  );
}

export default Greeting

const GreetingView = styled(View)`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
    padding-left: 20px;
    
`

const MainText = styled(Text)`
    font-size: 30px;
    font-family: ${fonts.SatoshiMedium};
    color: ${colors.white};
`

const SubText = styled(Text)`
    font-size: 20px;
    font-family: ${fonts.SatoshiMedium};
    color: ${colors.white};
`
