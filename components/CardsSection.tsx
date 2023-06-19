import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { colors } from "./colors";
import { ScreenHeight, ScreenWidth, fonts } from "./shared";
import { useNavigation } from "@react-navigation/native";

export default function Page() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [animeCards, setAnimeCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchAnimeCards = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://animes5.p.rapidapi.com/?fields=id,title,main_picture,mal_id,year,mean,rank,studios,synopsis&limit=10&offset=${(page - 1) * 10}&order=rank&ascending=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "",
            "X-RapidAPI-Host": "animes5.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      const animeData = data?.animes || [];
      return animeData;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { data, isLoading: isQueryLoading, isError } = useQuery(
    ["animeCards", currentPage],
    //Array działa jak cache key i jeżeli się zmieni to query zostanie wykonane ponownie
    () => fetchAnimeCards(currentPage),
    //Funkcja która zwraca dane
    {
      keepPreviousData: true,
      //Jeżeli jest true to dane z poprzedniego query zostaną zachowane
      onSuccess: (fetchedData) => {
        //Jeżeli query bedzie dobre to zostanie wykonana ta funkcja
        if (fetchedData.length > 0) 
        //Jeżeli długość danych jest większa niz 0 to sa dodane do tablicy  
        {
          setAnimeCards((prevCards) => [...prevCards, ...fetchedData]);
          //Dodaje nowe dane do tablicy
        } else {
          setIsEndReached(true);
          //Jeżeli nie ma więcej danych to ustawia na true
        }
      },
    }
  );

  useEffect(() => {
    if (!isQueryLoading && !isError && data?.length === 0) {
        setIsEndReached(true);
        //Jeżeli nie ma więcej danych to ustawia na true
      }
    }, [data, isQueryLoading, isError]);
    //Jeżeli dane się zmienią to useEffect zostanie wykonany ponownie

  const renderCard = ({ item }) => (
    <View key={item.id} style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", { mal_id: item.mal_id })
        }
      >
        <CardImage source={{ uri: item.main_picture.large }} />
      </TouchableOpacity>
      <TextWrap>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.title_english}</CardDescription>
        <YearRank>
          {item.year} |⭐ {item.rank}
        </YearRank>
      </TextWrap>
    </View>
  );

  const handleLoadMore = () => {
    if (!isLoading && !isEndReached) {
      setCurrentPage((prevPage) => prevPage + 1);
      //Jeżeli nie jest w trakcie ładowania i nie jest na końcu to zwiększa currentPage o 1
    }
  };

  return (
    <Container>
      <Main>
        <Title>Scroll 🔎</Title>
        <Description>Through your favorite animes</Description>
        <FlatList
          ref={flatListRef}
          // ref jest potrzebny do scrollowania do góry
          contentContainerStyle={styles.listView}
          data={animeCards}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          onScrollBeginDrag={() => setIsEndReached(false)}
        />
        {isQueryLoading ? (
          <ActivityIndicator size="large" color={"#000"} />
        ) : null}
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 12,
  },
  listView: {
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${colors.dark};
  height: ${ScreenHeight}px;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 300;
  aspect-ratio: 3/4;
  border-radius: 12;
`;

const Main = styled(View)`
  flex: 1;
  justify-content: center;
  margin-horizontal: auto;
  align-content: center;
  margin-top: 24;
  gap: 12;
`;

const YearRank = styled(Text)`
  font-size: 10;
  color: ${colors.white};
  font-family: ${fonts.SatoshiLight};
`;

const TextWrap = styled(View)`
  padding: 8px;
  width: 280;
  justify-content: center;
`;

const Title = styled(Text)`
  font-size: 48;
  color: ${colors.white};
  font-family: ${fonts.SatoshiMedium};
`;

const Description = styled(Text)`
  font-size: 24;
  color: ${colors.white};
  font-family: ${fonts.SatoshiLight};
`;

const CardTitle = styled(Text)`
  font-size: 22;
  color: ${colors.white};
  font-family: ${fonts.SatoshiBold};
`;

const CardDescription = styled(Text)`
  font-size: 14;
  color: ${colors.white};
  font-family: ${fonts.SatoshiLight};
`;

