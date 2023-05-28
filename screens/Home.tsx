import { View, SafeAreaView  } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'

import { colors } from '../components/colors'
import CardsSection from '../components/CardsSection'
import { ScreenHeight } from '../components/shared'



const Home = () => {
  

  return (
    <HomeView>
      <HomeWrapper>
        <CardsSection  />
      </HomeWrapper>
    </HomeView>
  )
}

export default Home

const HomeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.dark};
  height: ${ScreenHeight}px;
`

const HomeWrapper = styled(View)`
  flex: 1;
  flex-direction: column;
`
