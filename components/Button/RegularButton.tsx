import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { Text, TouchableOpacity, GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../colors';
import { fonts } from '../shared';

const ButtonView = styled(TouchableOpacity)`
    width: 80%;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid ${colors.strongPink};
    background-color: ${colors.lightPink};
    padding: 15px;
    `

const ButtonText = styled(Text)`
    font-family: ${fonts.SatoshiRegular};
    font-size: 18px;
    color: ${colors.white};
`

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    children: React.ReactNode;
    textStyles?: StyleProp<TextStyle>;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <ButtonText>{props.children}</ButtonText>
    </ButtonView>
  )
}

export default RegularButton;

