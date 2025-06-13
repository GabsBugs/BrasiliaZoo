import React, { useState } from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";

import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

import {
  HomeContainer,
  Navbar,
  Logo,
  NavLinks,
  NavButtons,
  Button,
  ButtonTextWhite,
  ButtonTextBlack,
  HeroSection,
  Subtitle,
  Overlay,
  SubtitleRow,
  Title,
  TitleUnderline,
  TitleUnderlineContainer,
  LeftTriangle,
  UnderlineBar,
  RightTriangle,
  CTAButton,
  SecondaryButton,
  ButtonContainer,
  ZooSection,
  ZooTitle,
  ZooText,
  ZooDivider,
  HighlightSection,
  HighlightTitle,
  MemorialSection,
  MemorialImage,
  MemorialText,
  MemorialButton,
  MemorialDateBadge,
  MemorialTitle,
  MemorialContent,
  NewsPopup,
  NewsPopupContent,
  NewsCloseButton,
  NewsReopenButton,
  NewsTitle,
} from "./HomeScreen.styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const HomeScreen = () => {
  const [showNews, setShowNews] = useState(true);
  const navigation = useNavigation();



  const [fontsLoaded] = useFonts({
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratRegular: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleTamanduaClick = () => {
    navigation.navigate("TamanduaDetails");
  };

  const handleJararacaClick = () => {
    navigation.navigate("JararacaDetails");
  };

  const handleCachorroMatoClick = () => {
    navigation.navigate("CachorroMatoDetails");
  };

  const handleYazaClick = () => {
    navigation.navigate("Yaza");
  };

  const handlePlanVisitClick = () => {
  navigation.navigate("PlanVisit"); 
};

const handleKnowAnimalsClick = () => {
  navigation.navigate("Animal");  
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <HeroSection>
          <Overlay />

          <SubtitleRow>
            <Icon name="star" size={18} color="#facc15" />
            <Subtitle>Uma experiência selvagem no coração da capital</Subtitle>
            <Icon name="star" size={18} color="#facc15" />
          </SubtitleRow>

          <Title fontsLoaded={fontsLoaded}>
            Explore o Zoológico de Brasília
          </Title>

          <ButtonContainer>
            <CTAButton onPress={handlePlanVisitClick}>
              <ButtonTextWhite fontsLoaded={fontsLoaded}>
                PLANEJE SUA VISITA
              </ButtonTextWhite>
            </CTAButton>

            <SecondaryButton onPress={handleKnowAnimalsClick}>
              <ButtonTextBlack fontsLoaded={fontsLoaded}>
                CONHEÇA NOSSOS ANIMAIS
              </ButtonTextBlack>
            </SecondaryButton>
          </ButtonContainer>
        </HeroSection>

        <ZooSection $memorial>
          <ZooTitle>EM MEMÓRIA DE YAZA</ZooTitle>
          <MemorialSection>
            <MemorialContent>
              <MemorialImage source={require("../assets/images/girafa1.jpg")} />
              <MemorialDateBadge>
                <Text>2003 - 2025</Text>
              </MemorialDateBadge>
            </MemorialContent>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 16 }}
            >
              <MemorialTitle>Yaza, nossa querida girafa</MemorialTitle>
              <MemorialText>
                Em março de 2025, nos despedimos da girafa Yaza, uma presença
                majestosa e inesquecível no Zoológico de Brasília. Seu legado
                vive em nossos corações e na memória de todos que tiveram o
                privilégio de conhecê-la.
              </MemorialText>
              <MemorialButton onPress={handleYazaClick}>
                <Text>SAIBA MAIS SOBRE YAZA</Text>
              </MemorialButton>
            </View>
          </MemorialSection>
        </ZooSection>

        <ZooDivider />

        <ZooSection>
          <ZooTitle>CONECTE-SE COM O MUNDO NATURAL</ZooTitle>
          <ZooText>
            Habitats incríveis e experiências únicas com a vida selvagem de todo
            o mundo em um dia inesquecível.
          </ZooText>

          <HighlightSection>
            <Image
              source={require("../../src/assets/images/elefante.jpg")}
              style={{
                width: "100%",
                height: 250,
                borderRadius: 12,
                marginBottom: 16,
                resizeMode: "cover",
              }}
            />
            <ZooText>
              Conheça os incríveis animais que você pode encontrar no Zoológico
              de Brasília e suas histórias de conservação.
            </ZooText>
            <View style={{ marginTop: 16 }}>
              <Button $variant="filled">VER TODOS OS ANIMAIS</Button>
            </View>
          </HighlightSection>
        </ZooSection>

        <ZooSection>
          <ZooTitle>Não Perca Estas Experiências!</ZooTitle>
          <HighlightSection style={{ flexDirection: "column", gap: 24 }}>
            <View
              style={{
                backgroundColor: "#222",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../src/assets/images/tamandua-mirim.jpeg")}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
              <View style={{ padding: 16 }}>
                <HighlightTitle>Nascimento de Tamanduá-Mirim</HighlightTitle>
                <ZooText>
                  O Zoológico de Brasília comemora o nascimento de um
                  tamanduá-mirim! O filhote nasceu em 25 de janeiro e já pode
                  ser visto pelos visitantes.
                </ZooText>
                <View style={{ marginTop: 8 }}>
                  <Button $variant="filled" onPress={handleTamanduaClick}>
                    SAIBA MAIS SOBRE O TAMANDUÁ-MIRIM
                  </Button>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#e1f7f0",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../src/assets/images/jararaca.jpeg")}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
              <View style={{ padding: 16 }}>
                <HighlightTitle>Nascimento de Jararacas</HighlightTitle>
                <ZooText>
                  Zoológico celebra nascimento de 12 filhotes de
                  jararaca-caiçaca, espécie importante do Cerrado.
                </ZooText>
                <View style={{ marginTop: 8 }}>
                  <Button $variant="filled" onPress={handleJararacaClick}>
                    SAIBA MAIS
                  </Button>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#f5f5dc",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../src/assets/images/cachorro-mato.jpeg")}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
              <View style={{ padding: 16 }}>
                <HighlightTitle>Resgate de Cachorro-do-mato</HighlightTitle>
                <ZooText>
                  Fêmea resgatada após atropelamento é reabilitada e devolvida à
                  natureza com sucesso.
                </ZooText>
                <View style={{ marginTop: 8 }}>
                  <Button $variant="filled" onPress={handleCachorroMatoClick}>
                    CONHEÇA A HISTÓRIA
                  </Button>
                </View>
              </View>
            </View>
          </HighlightSection>
        </ZooSection>
      </ScrollView>
      {!showNews && (
        <NewsReopenButton onPress={() => setShowNews(true)}>
          <Text>🦓 Entrada gratuita no Zoo!</Text>
        </NewsReopenButton>
      )}

      {showNews && (
        <NewsPopup>
          <NewsPopupContent>
            <NewsCloseButton onPress={() => setShowNews(false)}>
              <Text style={{ fontSize: 24, lineHeight: 24 }}>×</Text>
            </NewsCloseButton>
            <NewsTitle style={{ textAlign: "center" }}>
              🦓 ENTRADA GRATUITA NO ZOOLÓGICO DE BRASÍLIA
            </NewsTitle>
            <ZooText>
              O Zoológico de Brasília oferece entrada{" "}
              <Text style={{ fontWeight: "bold" }}>gratuita</Text> para todos os
              visitantes todos os domingos e feriados! 🐾
            </ZooText>
            <ZooText>
              Não perca as{" "}
              <Text style={{ fontWeight: "bold" }}>visitas guiadas</Text> (às
              9h30 e 14h30, em frente à estátua da elefante Nelly) e as
              atividades de{" "}
              <Text style={{ fontWeight: "bold" }}>educação ambiental</Text>,
              com muita diversão e aprendizado sobre a fauna e a conservação.
            </ZooText>
            <ZooText>
              O <Text style={{ fontWeight: "bold" }}>borboletário</Text> também
              está aberto de quarta a domingo, das 9h às 12h e das 13h30 às
              15h30 — uma experiência encantadora para toda a família!
            </ZooText>
          </NewsPopupContent>
        </NewsPopup>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
