import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.dark};
`;

export const fonts = {
    SatoshiRegular: 'SatoshiRegular',
    SatoshiBold: 'SatoshiBold',
    SatoshiLight: 'SatoshiLight',
    SatoshiMedium: 'SatoshiMedium',
}

const ScreenWidth = Dimensions.get('screen').width;
const ScreenHeight = Dimensions.get('screen').height;




