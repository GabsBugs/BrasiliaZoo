import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Linking,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  Text,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import Header from "../components/Header";
import Collapsible from "react-native-collapsible";

import { LinearGradient } from "expo-linear-gradient";


const AnimalIcon = styled(Ionicons)`
  opacity: 0.7;
`;


const Container = styled.View`
  flex: 1;
  background-color: rgb(255, 255, 255);
`;

const Content = styled.View`
  padding: 20px;
  padding-top: ${['ios', 'android'].includes(Platform.OS) ? 0 : 0}px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 20px;
  text-align: center;
  margin-top: ${['ios', 'android'].includes(Platform.OS) ? -60 : -100}px;
  font-family: ${['ios', 'android'].includes(Platform.OS) ? "Georgia" : "serif"};
`;

const TitleContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeafIcon = styled(Ionicons)`
  margin: 0 15px;
  margin-top: ${['ios', 'android'].includes(Platform.OS) ? -60 : -120}px;
  
`;


const Paragraph = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 24px;
  text-align: center;
`;

const ImageBanner = styled.Image`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  margin-bottom: 25px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  elevation: 5;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #1b5e20;
  margin-top: 10px;
  margin-bottom: 10px;
  border-left-width: 4px;
  border-left-color: #4caf50;
  padding-left: 10px;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 8px;
`;

const StatContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
`;

const StatItem = styled.View`
  align-items: center;
`;

const StatValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1b5e20;
`;

const StatLabel = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
  max-width: 200px;
`;

const ExpandButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #e8f5e9;
  border-radius: 8px;
  margin-top: 10px;
`;

const ExpandText = styled.Text`
  font-size: 16px;
  color: #2e7d32;
  margin-left: 8px;
`;

const ProjectCard = styled.View`
  background-color: #e8f5e9;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  border-left-width: 5px;
  border-left-color: #4caf50;
`;

const ProjectTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #1b5e20;
  margin-bottom: 8px;
`;

export default function Conservation() {
  const [expanded, setExpanded] = React.useState(null);
  const spinValue = useRef(new Animated.Value(0)).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;
  
    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 900,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

  React.useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spinAnimation.start();

    return () => spinAnimation.stop();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <Container>
      <Header />
      <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >
      <ScrollView>
        <Content>
          <ImageBanner
            source={{
              uri: "https://www.zoo.df.gov.br/wp-content/uploads/2018/10/jardim-especial.jpg",
            }}
            resizeMode="cover"
          />

          <TitleContainer>
      <LeafIcon name="leaf" size={24} color="#4caf50" />
      <Title>Conservação da Biodiversidade</Title>
      <LeafIcon name="leaf" size={24} color="#4caf50" />
    </TitleContainer>



          <Paragraph>
            O Zoológico de Brasília atua ativamente na preservação da
            biodiversidade por meio de programas de reprodução de espécies
            ameaçadas, reabilitação de animais silvestres e educação ambiental.
            A instituição também conta com um hospital veterinário completo e
            participa de ações de soltura de animais recuperados.
          </Paragraph>

          <StatContainer>
            <StatItem>
              <StatValue>50+</StatValue>
              <StatLabel>Espécies ameaçadas acolhidas</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>1M+</StatValue>
              <StatLabel>Visitantes por ano</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>1957</StatValue>
              <StatLabel>Desde</StatLabel>
            </StatItem>
          </StatContainer>

          <SectionTitle>Nossos Programas</SectionTitle>

          <ProjectCard>
            <ProjectTitle>Reprodução de Espécies Ameaçadas</ProjectTitle>
            <Paragraph>
              O Zoológico participa de projetos de conservação com foco em
              espécies como o lobo-guará, tamanduá-bandeira, arara-azul e
              ariranha, contribuindo para sua reprodução em cativeiro e
              reintegração à natureza quando possível.
            </Paragraph>
          </ProjectCard>

          <ProjectCard>
            <ProjectTitle>Reabilitação de Animais Silvestres</ProjectTitle>
            <Paragraph>
              Animais vítimas de tráfico, atropelamentos ou maus-tratos são
              recebidos no hospital veterinário, tratados e, quando possível,
              devolvidos ao seu habitat natural. Casos de sucesso incluem
              jabutis, aves de rapina, tamanduás e lobos-guará.
            </Paragraph>
          </ProjectCard>

          <SectionTitle>Educação Ambiental</SectionTitle>
          <Paragraph>
            O zoo desenvolve ações educativas integradas com escolas, visitas
            monitoradas, museu de ciências naturais e exposições temáticas,
            promovendo a conscientização sobre o meio ambiente entre visitantes
            de todas as idades.
          </Paragraph>

          <SectionTitle>Pesquisa Científica</SectionTitle>
          <Paragraph>
            Em parceria com universidades como a UnB e instituições como o
            ICMBio, o Zoológico de Brasília participa de estudos voltados à
            conservação da fauna e ao manejo de espécies nativas e exóticas.
          </Paragraph>

          <SectionTitle>Saiba Mais</SectionTitle>

          <Card>
            <CardTitle>Como Você Pode Ajudar</CardTitle>
            <Paragraph>
              Existem diversas formas de apoiar a conservação da fauna, como o
              voluntariado, adoção simbólica de animais e práticas sustentáveis
              no dia a dia.
            </Paragraph>
            <ExpandButton onPress={() => toggleExpand("help")}>
              <MaterialIcons
                name={
                  expanded === "help"
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={24}
                color="#2e7d32"
              />
              <ExpandText>
                {expanded === "help" ? "Mostrar menos" : "Mostrar mais"}
              </ExpandText>
            </ExpandButton>
            <Collapsible collapsed={expanded !== "help"}>
              <View style={{ marginTop: 10 }}>
                <Text style={{ marginBottom: 8 }}>
                  • Seja um voluntário no zoológico
                </Text>
                <Text style={{ marginBottom: 8 }}>
                  • Adote um animal simbolicamente
                </Text>
                <Text style={{ marginBottom: 8 }}>
                  • Participe de nossas campanhas educativas
                </Text>
                <Text style={{ marginBottom: 8 }}>
                  • Reduza seu consumo de plástico
                </Text>
                <Text>• Denuncie maus-tratos a animais silvestres</Text>
              </View>
            </Collapsible>
          </Card>

          <Card>
            <CardTitle>Parcerias e Colaborações</CardTitle>
            <Paragraph>
              O Zoológico de Brasília atua em parceria com instituições como o
              Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio),
              WWF-Brasil, universidades e ONGs para fortalecer ações de
              preservação.
            </Paragraph>
            <ExpandButton onPress={() => toggleExpand("partners")}>
              <MaterialIcons
                name={
                  expanded === "partners"
                    ? "keyboard-arrow-up"
                    : "keyboard-arrow-down"
                }
                size={24}
                color="#2e7d32"
              />
              <ExpandText>
                {expanded === "partners" ? "Mostrar menos" : "Mostrar mais"}
              </ExpandText>
            </ExpandButton>
            <Collapsible collapsed={expanded !== "partners"}>
              <View style={{ marginTop: 10 }}>
                <Text style={{ marginBottom: 8 }}>
                  • ICMBio - Instituto Chico Mendes
                </Text>
                <Text style={{ marginBottom: 8 }}>• WWF-Brasil</Text>
                <Text style={{ marginBottom: 8 }}>
                  • Universidade de Brasília (UnB)
                </Text>
                <Text>
                  • Rede Nacional de Combate ao Tráfico de Animais Silvestres
                </Text>
              </View>
            </Collapsible>
          </Card>

          <Paragraph
            style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}
          >
            "Na conservação, cada ação conta. Juntos, podemos fazer a diferença
            para o futuro da vida selvagem."
          </Paragraph>
        </Content>
      </ScrollView>
      </Animated.View>
    </Container>
  );
}
