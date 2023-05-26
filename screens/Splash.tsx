import React from 'react'
import { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components'

import { colors } from '../components/colors'
import { fonts } from '../components/shared'
import { Container } from '../components/shared'
import { Text } from 'react-native'


const Wrapper = styled(Container)`
    justify-content: center;
`

const Header = styled(Text)`
    font-family: ${fonts.SatoshiBold};
    font-size: 36px;
    color: ${colors.white};

`
const Splash: FunctionComponent = () => {
  return (
    <Wrapper>
        <Header>Hello to ComiC! 👋</Header>
        <StatusBar style="light" />
    </Wrapper>
  )
}

export default Splash