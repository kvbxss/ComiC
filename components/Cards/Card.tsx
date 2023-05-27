import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'
import React, { FunctionComponent } from 'react'

import {ScreenWidth}  from '../shared'
import { colors } from '../colors'
import { TouchableHighlight } from 'react-native-gesture-handler'



interface CardData {
  name: string;
  image: string;
}

export interface CardProps {
  data: Array<CardData>;
}


const Card: FunctionComponent<CardData> = (props) => {
  return (
    <CardView>
      <CardTouchable>
      <ImageView>
        <Picture 
        source={{uri: props.image}}
        resizeMode='cover'
        />

        
      </ImageView>
      </CardTouchable>
      <TextView>
        <Name></Name>
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
  height: 300;
  border-radius: 20px;
  margin: 10px;
  shadow: 0px 0px 10px rgba(0,0,0,0.5);
  background-color: ${colors.white};
`

const CardTouchable = styled(TouchableHighlight)`
  height: 100%;
  border-radius: 20px;
`


const ImageView = styled(View)`
  width: 100%;
  height: 80%; 
  background-color: ${colors.dark};
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