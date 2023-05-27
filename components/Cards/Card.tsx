import { Image, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import React, { FunctionComponent } from 'react'

import {ScreenWidth}  from '../shared'
import { colors } from '../colors'



interface CardData {
  name: string;
  image: string;
}




const Card: FunctionComponent<CardData> = (props) => {
  return (
    <CardView>
      <CardTouchable>
      <ImageView>
        <Picture 
        source={{uri: props.image}}
        resizeMode='contain'
        />

        
      </ImageView>
      </CardTouchable>
      <TextView>
        <Name>
          {props.name}
        </Name>
      </TextView>
    </CardView>
  )
}

export default Card

const CardView = styled(View)`
  align-items: center;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  overflow: hidden;
  border-radius: 20px;
  margin: 10px;
  shadow: 0px 0px 10px rgba(0,0,0,0.5);
`

const CardTouchable = styled(TouchableOpacity)`
  height: 100%;
  border-radius: 20px;
`


const ImageView = styled(View)`
  width: 100%;
  height: 250px;
`

const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  borderTopLeftRadius: 20px;
  borderTopRightRadius: 20px;
`

const TextView = styled(View)`
`

const Name = styled(Text)`

`