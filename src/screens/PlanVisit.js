import React from "react";
import {
  ScrollView,
  Linking,
  Animated,
  Easing,
  Platform,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function PlanejeSuaVisita() {
  const navigation = useNavigation();
  const spinValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    
    <Container>
      <Header />
      <StyledScrollView>
        <TitleContainer>
          <LeafIcon name="leaf" size={24} color="#4caf50" />
          <Title>Planeje Sua Visita</Title>
          <LeafIcon name="leaf" size={24} color="#4caf50" />
        </TitleContainer>

        <Animated.View
          style={{ transform: [{ rotate: spin }], alignSelf: "center", marginVertical: 20 }}
        >
          <AnimalIcon name="paw" size={60} color="#8d6e63" />
        </Animated.View>

        <Section>
          <SectionTitle>
            <Ionicons name="time-outline" size={20} color="#4caf50" /> Horário de Funcionamento
          </SectionTitle>
          <Text>Terça a domingo: 9h às 17h (fecha às segundas-feiras)</Text>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>
            <Ionicons name="ticket-outline" size={20} color="#4caf50" /> Ingressos
          </SectionTitle>
          <Text>
            Entrada gratuita para moradores do Distrito Federal e para visitantes com mais de 60 anos.{"\n"}
            R$ 6,00 para adultos; R$ 3,00 para estudantes com carteirinha.
          </Text>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>
            <Ionicons name="alert-circle-outline" size={20} color="#4caf50" /> Regras para Visitantes
          </SectionTitle>
          <Rule>
            <Ionicons name="close-circle" size={16} color="#e53935" /> Não alimentar os animais.
          </Rule>
          <Rule>
            <Ionicons name="time" size={16} color="#fb8c00" /> Respeitar os horários e áreas delimitadas.
          </Rule>
          <Rule>
            <Ionicons name="trash-bin" size={16} color="#6d4c41" /> Não jogar lixo no chão.
          </Rule>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>
            <Ionicons name="bulb-outline" size={20} color="#4caf50" /> Dicas para Visitar
          </SectionTitle>
          <Tip>
            <Ionicons name="shirt-outline" size={16} color="#5e35b1" /> Use roupas confortáveis e sapatos adequados para caminhada.
          </Tip>
          <Tip>
            <Ionicons name="sunny-outline" size={16} color="#ffb300" /> Leve protetor solar e repelente.
          </Tip>
          <Tip>
            <Ionicons name="water-outline" size={16} color="#1e88e5" /> Hidrate-se bem durante a visita.
          </Tip>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>
            <Ionicons name="map-outline" size={20} color="#4caf50" /> Mapa do Zoológico
          </SectionTitle>
          <Text>
            O zoológico tem vários setores, incluindo mamíferos, aves, répteis e área de alimentação.
          </Text>

          {}
          <MapLink onPress={() => navigation.navigate("MapaInterativo")}>
            <MapLinkText>Acesse o mapa interativo</MapLinkText>
            <Ionicons name="map" size={18} color="#388e3c" />
          </MapLink>
        </Section>

        <LinkButton onPress={() => Linking.openURL("https://www.zoo.df.gov.br/")}>
          <LinkText>Saiba mais no site oficial</LinkText>
          <Ionicons name="open-outline" size={16} color="#1e88e5" />
        </LinkButton>
      </StyledScrollView>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: #f5f9f0;

`;

const StyledScrollView = styled.ScrollView`
  padding: 20px;
  padding-top: ${Platform.OS === "ios" ? 200 : 150}px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #2e7d32;
  margin: 0 10px;
  text-align: center;
`;

const LeafIcon = styled(Ionicons)`
  margin: 0 5px;
`;

const AnimalIcon = styled(Ionicons)`
  opacity: 0.7;
`;

const Section = styled.View`
  margin-bottom: 10px;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #4caf50;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
  line-height: 22px;
`;

const Rule = styled(Text)``;
const Tip = styled(Text)``;

const Divider = styled.View`
  height: 1px;
  background-color: #c8e6c9;
  margin: 15px 0;
`;

const LinkButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;
  border-radius: 8px;
  background-color: #e3f2fd;
`;

const LinkText = styled.Text`
  color: #1e88e5;
  text-decoration: underline;
  font-size: 16px;
  margin-right: 8px;
`;

const MapLink = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

const MapLinkText = styled.Text`
  color: #388e3c;
  font-weight: bold;
  font-size: 16px;
  margin-right: 6px;
`;
