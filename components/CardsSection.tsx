import React from "react";
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
import { fetchAllCards } from "../service/Api";
import { colors } from "./colors";
import { ScreenHeight, ScreenWidth, fonts } from "./shared";
import { useNavigation } from "@react-navigation/native";

export default function Page() {
  const navigation = useNavigation();

  const { data, isLoading } = useQuery(['posts'], fetchAllCards);

  const renderCard = ({ item }) => (
    <View key={item.id} style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { mal_id: item.mal_id })}
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

  return (
    <Container>
      <Main>
        <Title>Scroll 🔎</Title>
        <Description>Through your favourite animes</Description>
        {isLoading ? (
          <ActivityIndicator size="large" color={"#000"} />
        ) : (
          <FlatList
            contentContainerStyle={styles.listView}
            data={data?.animes}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    height: "100%",
  },
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
