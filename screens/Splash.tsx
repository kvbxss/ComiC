import React from 'react'
import { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components'

import { colors } from '../components/colors'
import { fonts } from '../components/shared'
import { Container } from '../components/shared'
import { Text } from 'react-native'
import RegularButton from '../components/Button/RegularButton'

import { RootStackParamList } from '../navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

type Props = StackScreenProps<RootStackParamList, 'Welcome'>

const Wrapper = styled(Container)`
    justify-content: center;
    gap: 20px;
`

const Header = styled(Text)`
    font-family: ${fonts.SatoshiBold};
    font-size: 36px;
    color: ${colors.white};
`

const Description = styled(Text)` 
    width: 80%;
    font-family: ${fonts.SatoshiRegular};
    font-size: 18px;
    color: ${colors.white};
    align-self: center;
    margin-bottom: 20px;
    `

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <Wrapper>
        <Header>Hello to ComiC! 👋</Header>
        
        <Description> Discover a world of colorful superheroes, thrilling adventures, and immersive storytelling with our comic book mobile application. </Description>
        
        <RegularButton onPress={() => { navigation.navigate("Home")}}>Get Started!</RegularButton>
        <StatusBar style="light" />
    </Wrapper>
  )
}

export default Welcome