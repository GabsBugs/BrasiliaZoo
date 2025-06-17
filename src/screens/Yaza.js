import {
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import React, { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";


const Container = styled.View`
  flex: 1;
  background-color: rgb(255, 255, 255);
`;

const StyledScrollView = styled.ScrollView`
  padding: 20px;
  padding-top:  ${['ios', 'android'].includes(Platform.OS)  ? 100 : 80}px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:  ${['ios', 'android'].includes(Platform.OS)  ? 90 : 50}px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #2e7d32;
  margin: 0 10px;

  font-family:  ${['ios', 'android'].includes(Platform.OS)  ? "Georgia" : "serif"};
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
  margin-top: 16px;
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

const GiraffeImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 16px;
  resize-mode: cover;
  
  ${Platform.select({
    web: `
      width: 50%;
      max-width: 400px;
      height: auto;
      aspect-ratio: 1;
      margin-left: auto;
      margin-right: auto;
      display: block;
    `,
    default: ``
  })}
`;

const ImageCredit = styled.Text`
  font-size: 12px;
  color: #888;
  text-align: right;
  margin-top: -12px;
  margin-bottom: 16px;
`;

const HeartIcon = styled(Ionicons)`
  color: #e91e63;
  margin: 0 5px;
`;

export default function YazaMemorial() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  const { width } = useWindowDimensions();
const isWeb = Platform.OS === "web" && width >= 768;


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

  return (
    <Container>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <Header />

        <StyledScrollView>
          <TitleContainer>
            <LeafIcon name="leaf" size={24} color="#4caf50" />

            <Title>Yaza, a Girafa do Cerrado</Title>
            <LeafIcon name="leaf" size={24} color="#4caf50" />
          </TitleContainer>

          <GiraffeImage source={require("../assets/images/girafa1.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Card>
            <Text>
              <TextBold>Yaza (2003-2025)</TextBold>, a majestosa girafa que por
              mais de duas décadas encantou visitantes do Zoológico de Brasília,
              partiu deixando um legado de amor e conexão com a natureza. Com
              seu pescoço elegante, olhos expressivos e uma serenidade que
              parecia transcender as barreiras entre espécies, ela se tornou
              muito mais que um animal - foi um símbolo vivo da beleza do
              Cerrado e uma embaixadora involuntária da vida selvagem.
            </Text>
            <Text style={{ marginTop: 10 }}>
              Por 22 anos, Yaza marcou gerações de brasilienses. Das crianças
              que a conheceram nos primeiros anos e depois trouxeram seus
              próprios filhos, aos pesquisadores que acompanharam seu
              desenvolvimento, ela teceu uma rede de memórias afetivas que
              permanecerão para sempre. Seu olhar tranquilo e movimentos
              graciosos eram lições silenciosas sobre paciência, graça e
              respeito à natureza.
            </Text>
            <Text style={{ marginTop: 10 }}>
              Nascida em 2003, Yaza testemunhou a transformação da capital
              federal, tornando-se ela mesma parte do patrimônio emocional da
              cidade. Seu recinto não era apenas uma atração, mas um espaço de
              encontro entre humanos e o mundo natural, onde muitas pessoas
              tiveram seu primeiro contato transformador com a vida selvagem.
            </Text>
          </Card>

          <SectionTitle>
            <HeartIcon name="heart" size={20} /> Sua História
          </SectionTitle>
          <GiraffeImage source={require("../assets/images/girafa2.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Text>
            Yaza nasceu em 16 de julho de 2003 no Zoológico de Belo Horizonte e
            chegou ao Zoológico de Brasília em 2004, ainda filhote. Seu nome
            significa <TextBold>"princesa"</TextBold> em uma língua africana — e
            ela honrou esse título com elegância e doçura.
          </Text>

          <Text>
            Ao longo de mais de duas décadas, Yaza se tornou símbolo de carinho
            e encantamento para visitantes de todas as idades. Com seu olhar
            tranquilo e comportamento gentil, era impossível não se apaixonar
            por ela.
          </Text>

          <Text>
            Em 17 de março de 2025, aos 21 anos, Yaza nos deixou. Sua ausência é
            sentida por todos que a conheceram, mas seu legado permanece vivo no
            coração dos que aprenderam com sua presença a valorizar e respeitar
            a vida animal.
          </Text>

          <SectionTitle>
            <HeartIcon name="heart" size={20} /> Personalidade Única
          </SectionTitle>
          <GiraffeImage source={require("../assets/images/girafa3.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Text>
            Yaza era descrita pelos tratadores como um ser especial - curiosa,
            brincalhona e incrivelmente sociável. Seu hábito peculiar de
            "assobiar" quando queria atenção tornava-a ainda mais cativante.
          </Text>
          <Text style={{ marginTop: 10 }}>
            Era comum vê-la aproximar-se dos visitantes com curiosidade gentil,
            conquistando adultos e crianças com seu olhar tranquilo e
            comportamento dócil. Cada interação com Yaza era uma lição sobre a
            inteligência e sensibilidade dos animais.
          </Text>

          <SectionTitle>
            <HeartIcon name="heart" size={20} /> Legado Eterno
          </SectionTitle>
          <GiraffeImage source={require("../assets/images/girafa4.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Text>
            Como embaixadora involuntária das girafas (espécie classificada como
            vulnerável), Yaza ajudou a conscientizar milhares de visitantes
            sobre conservação animal. Sua história destacou tanto os desafios da
            vida selvagem em cativeiro quanto a importância dos zoológicos
            modernos.
          </Text>
          <Text style={{ marginTop: 10 }}>
            Seu espírito gentil inspirou novas iniciativas de bem-estar animal e
            programas educacionais. Através de Yaza, muitos aprenderam valiosas
            lições sobre respeito à vida, cuidado com os animais e preservação
            ambiental.
          </Text>

          <SectionTitle>
            <HeartIcon name="heart" size={20} /> Memórias Felizes
          </SectionTitle>
          <GiraffeImage source={require("../assets/images/girafa5.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Text>
            O livro de memórias do zoológico está repleto de histórias
            emocionantes sobre Yaza. Desde crianças que superaram o medo de
            animais ao encontrá-la, até visitantes que, encantados por sua
            presença majestosa, voltavam ao recinto apenas para vê-la novamente.
          </Text>
          <Text style={{ marginTop: 10 }}>
            Seu poder de conexão era tão grande que muitos retornavam ano após
            ano especificamente para rever sua graça, criando um vínculo afetivo
            que transcendia as barreiras entre espécies.
          </Text>

          <SectionTitle>
            <HeartIcon name="heart" size={20} /> Homenagem
          </SectionTitle>
          <GiraffeImage source={require("../assets/images/girafa6.jpg")} />
          <ImageCredit>Foto: Mateus Ribeiro</ImageCredit>

          <Text>
            Esta página é uma celebração de tudo que Yaza representou:{" "}
            <TextBold>
              carinho, beleza natural, educação ambiental e amor incondicional
            </TextBold>
            .
          </Text>
          <Text style={{ marginTop: 10 }}>
            Obrigada, Yaza, por ter tocado tantas vidas e nos lembrar
            diariamente da importância de proteger e respeitar todas as formas
            de vida.
          </Text>

          <Text
            style={{
              textAlign: "center",
              marginTop: 15,
              fontStyle: "italic",
              marginBottom: 55,
            }}
          >
            "Yaza partiu, mas seu legado de alegria e conscientização permanece
            vivo em nossos corações. Sentiremos sua falta para sempre, nossa
            estrela de pescoço comprido, que nos ensinou que grandeza vai muito
            além da altura."
          </Text>
        </StyledScrollView>
      </Animated.View>
    </Container>
  );
}
