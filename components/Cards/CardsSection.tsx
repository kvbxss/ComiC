import React from 'react';
import styled from 'styled-components';
import Greeting from '../Header/Greeting';
import Card from './Card';
import { Image, Text, StyleSheet, ActivityIndicator, View, ScrollView, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCards } from '../../service/Api';
import {ScreenWidth}  from '../shared'
const CardsSection = () => {

  const {data, isLoading} = useQuery(['cards'], fetchAllCards);

  return(
   <ScrollView contentContainerStyle={styles.container}>
   {isLoading && <ActivityIndicator size="large" color="#00ff00" />}

             {data 
             ? data.animes.map((anime) => (
              
              <CardView key={anime.id}>
              <CardTouchable>
              <ImageView>
                <Picture 
                source={{uri: anime.main_picture.medium}}
                resizeMode='contain'
                />
        
                
              </ImageView>
              </CardTouchable>
              <TextView>
                <Name>
                  {anime.title}
                </Name>
              </TextView>
            </CardView>
      ))
      : null}
   </ScrollView>
  );
}

export default CardsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

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