import React from "react";
import {
  Animated,
  Easing,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function PlanejeSuaVisita() {
  const navigation = useNavigation();

  const bounceValue = React.useRef(new Animated.Value(0)).current;
  const fadeInValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -10,
          duration: 400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.timing(fadeInValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Container>
      <Header />
      <StyledScrollView>
        <Animated.View style={{ opacity: fadeInValue }}>
          <TitleContainer>
            <LeafIcon name="leaf" size={24} color="#4caf50" />
            <Title>Planeje Sua Visita</Title>
            <LeafIcon name="leaf" size={24} color="#4caf50" />
          </TitleContainer>

          <Animated.View
            style={{
              transform: [{ translateY: bounceValue }],
              alignSelf: "center",
              marginVertical: 20,
            }}
          >
            <AnimalIcon name="paw" size={60} color="#8d6e63" />
          </Animated.View>

          {/* Seções com fundo branco e sombra */}
          <Card>
            <SectionTitle>
              <Ionicons name="time-outline" size={20} color="#4caf50" /> Horário de Funcionamento
            </SectionTitle>
            <Text>
              Aberto de <TextBold>terça a domingo e feriados</TextBold>, das{" "}
              <TextBold>8h30 às 17h</TextBold>.{"\n"}
              A bilheteria funciona até as 16h.{"\n\n"}
              Aceitamos <TextBold>dinheiro, PIX e cartões</TextBold>.{"\n\n"}
              <TextBold>Fechado às segundas-feiras.</TextBold>
            </Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="ticket-outline" size={20} color="#4caf50" /> Ingressos
            </SectionTitle>
            <Text><TextBold>Terça a quinta:</TextBold> R$ 5,00 (valor promocional para todos).</Text>
            <Text><TextBold>Sexta e sábado:</TextBold> R$ 10,00 (inteira) e R$ 5,00 (meia).</Text>
            <Text><TextBold>Domingos e feriados:</TextBold> entrada <TextBold>gratuita</TextBold>.</Text>
            <Text><TextBold>Meia:</TextBold> crianças (6–12), idosos (60+), estudantes, professores, servidores e beneficiários de programas sociais.</Text>
            <Text><TextBold>Gratuidade</TextBold> {"\n"}1. Crianças de até 5 (cinco)
              anos de idade;{"\n"}
              2. Portadores de Necessidades Especiais (PNE) e seu acompanhante,
              quando necessário.{"\n"} É obrigatório apresentação de um documento
              oficial com foto e a carteira de Portador de Necessidades especiais</Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="location-outline" size={20} color="#4caf50" /> Localização
            </SectionTitle>
            <Text>
              <TextBold>Endereço:</TextBold> Av. das Nações, Via L4 Sul –
              Brasília/DF, CEP: 70610-100.{"\n"}
              Próximo à EPGU, sentido Plano Piloto, após o viaduto Camargo Corrêa.
              {"\n\n"}
              <TextBold>Transporte:</TextBold> ônibus com passarela e metrô (114 Sul, Parque Shopping).
            </Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="fast-food-outline" size={20} color="#4caf50" /> Alimentação
            </SectionTitle>
            <Text>
             O parque possui <TextBold>duas lanchonetes</TextBold> com refeições,
              lanches e bebidas não-alcoólicas, próximas à Galeria África e à
              administração.{"\n\n"}
              Além disso, há <TextBold>28 pipoqueiros</TextBold>,{" "}
              <TextBold>4 barraquinhas de churros</TextBold> e{" "}
              <TextBold>2 de cachorro-quente</TextBold> espalhados pelo zoológico.

            </Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="alert-circle-outline" size={20} color="#4caf50" /> Regras para Visitantes
            </SectionTitle>
            <Text><Ionicons name="close-circle" size={16} color="#e53935" /> Não alimente os animais.</Text>
            <Text><Ionicons name="time" size={16} color="#fb8c00" /> Respeite horários e áreas delimitadas.</Text>
            <Text><Ionicons name="trash-bin" size={16} color="#6d4c41" /> Mantenha o parque limpo. Use os lixeiros.</Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="bulb-outline" size={20} color="#4caf50" /> Dicas para sua Visita
            </SectionTitle>
            <Text><Ionicons name="shirt-outline" size={16} color="#5e35b1" /> Use roupas leves e calçados confortáveis.</Text>
            <Text><Ionicons name="sunny-outline" size={16} color="#ffb300" /> Traga protetor solar e repelente.</Text>
            <Text><Ionicons name="water-outline" size={16} color="#1e88e5" /> Leve uma garrafinha d’água.</Text>
          </Card>

          <Card>
            <SectionTitle>
              <Ionicons name="map-outline" size={20} color="#4caf50" /> Mapa do Zoológico
            </SectionTitle>
            <Text>
              Explore setores como <TextBold>Mamíferos</TextBold>, <TextBold>Aves</TextBold>, <TextBold>Répteis</TextBold> e mais.
            </Text>
            <MapLink onPress={() => navigation.navigate("Map")}>
              <MapLinkText>Ver mapa interativo</MapLinkText>
              <Ionicons name="map" size={18} color="#388e3c" />
            </MapLink>
          </Card>

          <LinkButton onPress={() => Linking.openURL("https://www.zoo.df.gov.br/")}>
            <LinkText>Mais informações no site oficial</LinkText>
            <Ionicons name="open-outline" size={16} color="#1e88e5" />
          </LinkButton>
        </Animated.View>
      </StyledScrollView>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color:rgb(255, 255, 255);
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
  font-family: ${Platform.OS === "ios" ? "Georgia" : "serif"};
`;

const LeafIcon = styled(Ionicons)`
  margin: 0 5px;
`;

const AnimalIcon = styled(Ionicons)`
  opacity: 0.7;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #4caf50;
  margin-bottom: 8px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 6px;
  line-height: 22px;
`;

const TextBold = styled.Text`
  font-weight: bold;
  color: #2e7d32;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 3;
`;

const MapLink = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const MapLinkText = styled.Text`
  color: #388e3c;
  font-weight: bold;
  font-size: 16px;
  margin-right: 6px;
`;

const LinkButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 12px;
  border-radius: 8px;
  background-color: #e3f2fd;
`;

const LinkText = styled.Text`
  color: #1e88e5;
  font-size: 16px;
  margin-right: 8px;
  text-decoration: underline;
`;
