import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { Dimensions } from "react-native";
import { useWindowDimensions, Platform } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { TouchableOpacity } from "react-native";

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
  ImageCredit,
} from "./HomeScreen.styles";

const HomeScreen = () => {
  const [showNews, setShowNews] = useState(true);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isWeb = Platform.OS === "web";
  const isMobileWeb = isWeb && isMobile;
  const isMobileNative = Platform.OS === "ios" || Platform.OS === "android";

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
          <MemorialSection style={{ marginTop: 25 }}>
            {isMobileNative ? (
              <View style={{ width: "100%", alignItems: "center" }}>
                <MemorialTitle
                  style={{ textAlign: "center", marginBottom: 16 }}
                >
                  Yaza, nossa querida girafa
                </MemorialTitle>

                <MemorialContent>
                  <MemorialImage
                    source={require("../assets/images/girafa1.jpg")}
                  />
                  <MemorialDateBadge style={{ bottom: -290, right: -25 }}>
                    <Text style={{ color: "white" }}>2003 - 2025</Text>
                  </MemorialDateBadge>
                </MemorialContent>

                <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
                  <MemorialText style={{ textAlign: "center" }}>
                    Em março de 2025, nos despedimos da girafa Yaza, uma
                    presença majestosa e inesquecível no Zoológico de Brasília.
                    Seu legado vive em nossos corações e na memória de todos que
                    tiveram o privilégio de conhecê-la.
                  </MemorialText>
                  <MemorialButton
                    onPress={handleYazaClick}
                    style={{ alignSelf: "center", marginTop: -20 }}
                  >
                    <Text style={{ color: "white" }}>
                      SAIBA MAIS SOBRE YAZA
                    </Text>
                  </MemorialButton>
                </View>
              </View>
            ) : (
              <>
                <MemorialContent>
                  <MemorialImage
                    source={require("../assets/images/girafa1.jpg")}
                  />
                  <MemorialDateBadge>
                    <Text style={{ color: "white" }}>2003 - 2025</Text>
                  </MemorialDateBadge>
                </MemorialContent>

                <View style={{ flex: 1, paddingLeft: 24 }}>
                  <MemorialTitle>Yaza, nossa querida girafa</MemorialTitle>
                  <MemorialText>
                    Em março de 2025, nos despedimos da girafa Yaza, uma
                    presença majestosa e inesquecível no Zoológico de Brasília.
                    Seu legado vive em nossos corações e na memória de todos que
                    tiveram o privilégio de conhecê-la.
                  </MemorialText>
                  <MemorialButton
                    onPress={handleYazaClick}
                    style={{ alignSelf: "flex-start", marginTop: 16 }}
                  >
                    <Text style={{ color: "white" }}>
                      SAIBA MAIS SOBRE YAZA
                    </Text>
                  </MemorialButton>
                </View>
              </>
            )}
          </MemorialSection>
        </ZooSection>

        <ZooDivider />

        <ZooSection
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ZooTitle>
            <Text style={{ textAlign: "center" }}>
              Mergulhe no universo animal!
            </Text>
          </ZooTitle>

          <ZooText style={{ marginBottom: 5, textAlign: "center" }}>
            Do voo elegante das aves aos pequenos detalhes das borboletas,
            explore a diversidade de espécies que habitam o Zoológico de
            Brasília. Conheça, aprenda e encante-se com cada história da nossa
            fauna.
          </ZooText>

          <HighlightSection
            style={{
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/images/elefante.jpg")}
              style={{
                width:
                  Platform.OS === "ios" || Platform.OS === "android"
                    ? 280
                    : "100%",
                height:
                  Platform.OS === "ios" || Platform.OS === "android"
                    ? 300
                    : 500,
                borderRadius: 12,
                marginBottom: 16,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
            <ImageCredit style={{ textAlign: "right" }}>
              Foto: Mateus Ribeiro
            </ImageCredit>

            <ZooText style={{ textAlign: "center" }}>
              Explore nossa coleção completa de mamíferos, aves, répteis,
              anfíbios, artrópodes e as maravilhas do borboletário — com fotos e
              curiosidades sobre cada espécie.
            </ZooText>

            <View style={{ marginTop: 0 }}>
              <CTAButton onPress={handleKnowAnimalsClick}>
                <ButtonTextWhite fontsLoaded={fontsLoaded}>
                  CONHECER OS ANIMAIS
                </ButtonTextWhite>
              </CTAButton>
            </View>
          </HighlightSection>
        </ZooSection>

        <ZooDivider />

        <ZooSection>
          <ZooTitle>
            <Text style={{ textAlign: "center" }}>
              🌿 Destaques Recentes do Zoológico 🌿
            </Text>
          </ZooTitle>

          {isMobileNative ? (
            <View
              style={{
                marginBottom: 80,
                backgroundColor: "#F0F0F0",
                paddingBottom: 60,
              }}
            >
              <Carousel
                loop
                width={width}
                height={460}
                autoPlay
                autoPlayInterval={5000}
                scrollAnimationDuration={1000}
                mode="parallax"
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                }}
                data={[
                  {
                    title: "Novo Tamanduá-Mirim",
                    text: "Um filhote nasceu em janeiro e já pode ser visto no zoo. Uma fofura da nossa fauna!",
                    image: require("../assets/images/tamandua-mirim.jpeg"),
                    bg: "#4A6B3D",
                    color: "#FFF",
                    onPress: handleTamanduaClick,
                    button: "VER MAIS",
                    icon: "🐜",
                  },
                  {
                    title: "12 Jararacas Bebês!",
                    text: "O Zoológico celebra o nascimento de 12 jararacas-caiçacas — espécie nativa ameaçada.",
                    image: require("../assets/images/jararaca.jpeg"),
                    bg: "#E1F7F0",
                    color: "#1B5E20",
                    onPress: handleJararacaClick,
                    button: "SAIBA MAIS",
                    icon: "🐍",
                  },
                  {
                    title: "Herói do Cerrado",
                    text: "Um cachorro-do-mato foi salvo após atropelamento e voltou à natureza com sucesso!",
                    image: require("../assets/images/cachorro-mato.jpeg"),
                    bg: "#F5F5DC",
                    color: "#5D4037",
                    onPress: handleCachorroMatoClick,
                    button: "CONHEÇA",
                    icon: "🐺",
                  },
                ]}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item }) => (
                  <View
                    style={{
                      backgroundColor: item.bg,
                      borderRadius: 24,
                      overflow: "hidden",
                      width: width * 0.85,
                      alignSelf: "center",
                      elevation: 6,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.2,
                      shadowRadius: 4,
                      minHeight: 420,
                      flexGrow: 1,
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        source={item.image}
                        style={{
                          width: "100%",
                          height: 220,
                          resizeMode: "cover",
                          borderTopLeftRadius: 22,
                          borderTopRightRadius: 22,
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          backgroundColor: "rgba(0,0,0,0.6)",
                          borderRadius: 20,
                          width: 40,
                          height: 40,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        padding: 20,
                        flexGrow: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: "bold",
                          color: item.color,
                          marginBottom: 10,
                          fontFamily: "Roboto_700Bold",
                        }}
                      >
                        {item.title}
                      </Text>

                      <Text
                        style={{
                          fontSize: 16,
                          color: item.color,
                          lineHeight: 22,
                          marginBottom: 15,
                          fontFamily: "Roboto_400Regular",
                        }}
                      >
                        {item.text}
                      </Text>

                      <TouchableOpacity
                        onPress={item.onPress}
                        style={{
                          backgroundColor: item.color,
                          paddingVertical: 12,
                          paddingHorizontal: 20,
                          borderRadius: 25,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: item.bg,
                            fontWeight: "bold",
                            fontSize: 14,
                            fontFamily: "Roboto_500Medium",
                          }}
                        >
                          {item.button}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 14,
                }}
              >
                {[0, 1, 2].map((_, i) => (
                  <View
                    key={i}
                    style={{
                      width: currentIndex === i ? 10 : 8,
                      height: currentIndex === i ? 10 : 8,
                      borderRadius: 5,
                      backgroundColor:
                        currentIndex === i ? "#2E7D32" : "#BDBDBD",
                      marginHorizontal: 4,
                    }}
                  />
                ))}
              </View>
            </View>
          ) : (
            <HighlightSection
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                padding: "0 1rem",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  title: "Novo Tamanduá-Mirim",
                  text: "Um filhote nasceu em janeiro e já pode ser visto no zoo. Uma fofura da nossa fauna!",
                  image: require("../assets/images/tamandua-mirim.jpeg"),
                  bg: "#4A6B3D",
                  color: "#FFF",
                  onPress: handleTamanduaClick,
                  button: "VER MAIS",
                  icon: "🐜",
                },
                {
                  title: "12 Jararacas Bebês!",
                  text: "O Zoológico celebra o nascimento de 12 jararacas-caiçacas — espécie nativa ameaçada.",
                  image: require("../assets/images/jararaca.jpeg"),
                  bg: "#E1F7F0",
                  color: "#1B5E20",
                  onPress: handleJararacaClick,
                  button: "SAIBA MAIS",
                  icon: "🐍",
                },
                {
                  title: "Herói do Cerrado",
                  text: "Um cachorro-do-mato foi salvo após atropelamento e voltou à natureza com sucesso!",
                  image: require("../assets/images/cachorro-mato.jpeg"),
                  bg: "#F5F5DC",
                  color: "#5D4037",
                  onPress: handleCachorroMatoClick,
                  button: "CONHEÇA",
                  icon: "🐺",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.bg,
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "translateY(-5px)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: 250,
                        resizeMode: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "1.5rem",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: item.color,
                        marginBottom: "1rem",
                        marginTop: 0,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "1rem",
                        color: item.color,
                        lineHeight: "1.5",
                        marginBottom: "1.5rem",
                        flexGrow: 1,
                      }}
                    >
                      {item.text}
                    </p>

                    <button
                      onClick={item.onPress}
                      style={{
                        backgroundColor: item.color,
                        color: item.bg,
                        border: "none",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "2rem",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        alignSelf: "flex-start",
                        ":hover": {
                          opacity: 0.9,
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      {item.button}
                    </button>
                  </div>
                </div>
              ))}
            </HighlightSection>
          )}
        </ZooSection>
      </ScrollView>

      {/* pop up */}
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
