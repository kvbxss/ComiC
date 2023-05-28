import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { ScreenHeight, fonts } from '../components/shared';
import { colors } from '../components/colors';
import CardsDetail from '../components/CardDetailsSection';



const Details = ({route}) => {
 
  const {mal_id} = route.params;

  return (
    <DetailsView>
      <CardsDetail mal_id={mal_id}/>
    </DetailsView>
  )
}

export default Details

const DetailsView = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${colors.dark};
  height: ${ScreenHeight}px;
`