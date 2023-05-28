import React from 'react';
import { 
    View, 
    Image, 
    Text, 
    ActivityIndicator 
} from 'react-native';
import styled from 'styled-components';
import { ScreenHeight, fonts } from './shared';
import { colors } from './colors';
import RegularButton from './Button/RegularButton';
import { useQuery } from '@tanstack/react-query';
import { fetchCardDetailsById } from '../service/Api';
import { useNavigation } from '@react-navigation/native';


export default function CardsDetail({ mal_id }) {


    const navigation = useNavigation();

    const { data, isLoading } = useQuery(['cardDetails', mal_id], 
    () => fetchCardDetailsById(mal_id));

    const renderCard = (item) => (
        
        <CardView key={item.mal_id}>
        <ImageWrapper>
        <AnimeMovieImage source={{ uri: item.main_picture.large }} />
        </ImageWrapper>
        <AnimeMovieTitle>{item.title}</AnimeMovieTitle>
        <AnimeMovieRank>⭐ {item.mean} | {item.year}</AnimeMovieRank>
        <AnimeMovieRank>🎥 {item.studios}</AnimeMovieRank>
        <AnimeMovieDescription>{item.synopsis}</AnimeMovieDescription>
        <RegularButton onPress={() => navigation.goBack()}>Go Back!</RegularButton>
        </CardView>
        
      );
    

    return(
    <AnimeMovie>
         {isLoading ? (
          <ActivityIndicator size="large" color={"#000"} />
        ) : (
       data && renderCard(data)
        )}
    </AnimeMovie>
    )
}


const AnimeMovie = styled(View)`  
  flex: 1;
  align-items: center;
  background-color: ${colors.dark};
  height: ${ScreenHeight}px;
`

const CardView = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
const ImageWrapper = styled(View)`
    width: 100%;
    height: 300px;
    aspect-ratio: 3/4 ;
    margin-bottom: 20px;

`

const AnimeMovieImage = styled(Image)`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
` 

const AnimeMovieTitle = styled(Text)`
  font-size: 24px;
  font-family: ${fonts.SatoshiBold};
  color: ${colors.white};
  margin-bottom: 10px;
`

const AnimeMovieRank = styled(Text)`
  font-size: 20px;
  font-family: ${fonts.SatoshiBold};
  color: ${colors.white};
  margin-bottom: 10px;
`


const AnimeMovieDescription = styled(Text)`
  font-size: 9px;
  font-family: ${fonts.SatoshiLight};
  color: ${colors.white};
  margin-bottom: 10px;
`
