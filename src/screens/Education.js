import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Linking,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";


const LeafIcon = styled(Ionicons)`
  margin: 0 5px;
`;

const AnimalIcon = styled(Ionicons)`
  opacity: 0.7;
`;


import { LinearGradient } from "expo-linear-gradient";

export default function EducationScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  const scaleAnimExperiencia = useRef(new Animated.Value(1)).current;
const pulseAnimExperiencia = useRef(new Animated.Value(1)).current;


  const scaleAnimAcao = useRef(new Animated.Value(1)).current;
const pulseAnimAcao = useRef(new Animated.Value(1)).current;

  const scaleAnimColonia = useRef(new Animated.Value(1)).current;
const pulseAnimColonia = useRef(new Animated.Value(1)).current;

  const scaleAnimVivencias = useRef(new Animated.Value(1)).current;
const pulseAnimVivencias = useRef(new Animated.Value(1)).current;

  const scaleAnimAcademico = useRef(new Animated.Value(1)).current;
const pulseAnimAcademico = useRef(new Animated.Value(1)).current;

  const scaleAnimCapacitacao = useRef(new Animated.Value(1)).current;
const pulseAnimCapacitacao = useRef(new Animated.Value(1)).current;

  const scaleAnimMuseu = useRef(new Animated.Value(1)).current;
const pulseAnimMuseu = useRef(new Animated.Value(1)).current;

  const pulseAnimNoturno = useRef(new Animated.Value(1)).current;
  const pulseAnimEscolar = useRef(new Animated.Value(1)).current;

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

    const pulse = (anim) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1.2,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    pulse(pulseAnimNoturno);
    pulse(pulseAnimEscolar);
  }, []);

  const scaleAnimNoturno = useRef(new Animated.Value(1)).current;
  const scaleAnimEscolar = useRef(new Animated.Value(1)).current;

  const onPressIn = (anim) => {
    Animated.timing(anim, {
      toValue: 0.96,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = (anim) => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
<Container>
  <Header />
  <AnimatedScrollView
    style={{
      opacity: fadeAnim,
      transform: [{ translateY: slideAnim }],
    }}
    contentContainerStyle={{ paddingBottom: 60 }}
  >
    <TitleArea>
                <LeafIcon name="leaf" size={24} color="#4caf50" />
      <MainTitle>Educação Ambiental</MainTitle>
            <LeafIcon name="leaf" size={24} color="#4caf50" />


    </TitleArea>

    <Description>
      O Zoológico de Brasília oferece experiências educativas para promover
      a conscientização ambiental, incentivar o respeito à biodiversidade e
      aproximar os visitantes da fauna brasileira.
    </Description>

    {/* Card Zoo Noturno */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimNoturno)}
      onPressOut={() => onPressOut(scaleAnimNoturno)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimNoturno }] }}>
        <SideBar />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimNoturno }] }}>
            <Ionicons name="moon-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Noturno</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Modalidade de visita agendada, realizada no período noturno, com
            monitoramento de educadores e/ou técnicos da Fundação Jardim
            Zoológico de Brasília (FJZB), no valor de <Bold>R$ 50</Bold>.
          </CardText>
          <CardText>
            As visitas ocorrem <Bold>às terças e quintas-feiras</Bold>, com
            início às <Bold>19h</Bold> (tolerância de 15min) e término
            previsto para <Bold>21h</Bold>, exceto em condições climáticas
            adversas.
          </CardText>
          <CardText>
            O agendamento é feito via e-mail:
            <Bold> atendimento@zoo.df.gov.br</Bold>. O solicitante deverá
            preencher o formulário fornecido pelo Zoo.
          </CardText>
          <CardText>
            Em caso de dúvidas, entre em contato de segunda a sexta-feira
            das <Bold>8h às 12h</Bold> e das <Bold>14h às 17h</Bold> pelo
            WhatsApp: <Bold>(61) 98199-0271</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo Escolar */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimEscolar)}
      onPressOut={() => onPressOut(scaleAnimEscolar)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimEscolar }] }}>
        <SideBar color="#558b2f" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimEscolar }] }}>
            <Ionicons name="school-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Escolar</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Visita autoguiada para grupos escolares, com agendamento prévio.
            O fluxo é conduzido pela própria escola, sem acompanhamento de
            técnicos da FJZB.
          </CardText>
          <CardText>
            Disponível <Bold>de terça a sexta-feira</Bold>. O agendamento é
            feito via e-mail:
            <Bold> atendimento@zoo.df.gov.br</Bold>, e o formulário é enviado
            pela Diretoria de Educação Ambiental (Deam).
          </CardText>
          <CardText>
            Alunos da rede pública e professores (de escolas públicas ou
            particulares) têm <Bold>isenção total de entrada</Bold>,
            mediante identificação.
          </CardText>
          <CardText>
            Dúvidas? WhatsApp: <Bold>(61) 98199-0271</Bold>, das{" "}
            <Bold>7h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo Experiência */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimExperiencia)}
      onPressOut={() => onPressOut(scaleAnimExperiencia)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimExperiencia }] }}>
        <SideBar color="#7cb342" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimExperiencia }] }}>
            <Ionicons name="compass-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Experiência</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Modalidade de visita agendada, monitorada por educadores vinculados à Fundação Jardim
            Zoológico de Brasília (FJZB), tendo roteiros específicos e pré-estabelecidos no momento do agendamento no valor de <Bold>R$ 50</Bold>.
          </CardText>
          <CardText>
            Todas as <Bold>quartas e quintas-feiras</Bold>, salvo motivo de força maior (como condições climáticas). 
            As turmas iniciam o passeio às <Bold>9h</Bold> (matutino) e às <Bold>14h</Bold> (vespertino).
          </CardText>
          <CardText>
            O agendamento deve ser realizado pelo e-mail: <Bold>atendimento@zoo.df.gov.br</Bold>. 
            Os solicitantes deverão preencher o Formulário de Agendamento disponibilizado via e-mail pelo Zoo.
          </CardText>
          <CardText>
            Isenção do valor para <Bold>10 grupos/ano</Bold> de alunos da rede pública com um professor responsável 
            (agendamento deve ser realizado pela instituição educacional).
          </CardText>
          <CardText>
            Dúvidas? WhatsApp: <Bold>(61) 98199-0271</Bold>, das <Bold>8h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo em Ação */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimAcao)}
      onPressOut={() => onPressOut(scaleAnimAcao)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimAcao }] }}>
        <SideBar color="#689f38" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimAcao }] }}>
            <Ionicons name="megaphone-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo em Ação</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Projeto que engloba todas as atividades desenvolvidas fora dos domínios da FJZB, 
            incluindo exposições, teatros, palestras e cursos realizados em ação conjunta 
            pela Diretoria de Educação Ambiental e a Diretoria de Museologia.
          </CardText>
          <CardText>
            Para receber as atividades, as instituições devem realizar agendamento prévio. 
            Instituições que utilizam o <Bold>SEI-GDF</Bold> devem encaminhar ofício para 
            a unidade <Bold>FJZB/GAB/SUEUP</Bold>. Demais instituições devem enviar ofício 
            para <Bold>atendimento@zoo.df.gov.br</Bold>.
          </CardText>
          <CardText>
            <Bold>Instituições públicas são totalmente isentas.</Bold>
          </CardText>
          <CardText>
            Dúvidas? WhatsApp: <Bold>(61) 98199-0271</Bold>, das <Bold>7h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Colônia de Feras */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimColonia)}
      onPressOut={() => onPressOut(scaleAnimColonia)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimColonia }] }}>
        <SideBar color="#8bc34a" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimColonia }] }}>
            <Ionicons name="happy-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Colônia de Feras</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Conjunto de atividades lúdicas, educativas e esportivas oferecidas 
            a crianças de <Bold>6 a 10 anos</Bold>, nos períodos de <Bold>férias escolares</Bold> 
            (janeiro e julho).
          </CardText>
          <CardText>
            Dúvidas? Entre em contato pelo e-mail: <Bold>atendimento@zoo.df.gov.br</Bold> 
            ou via WhatsApp: <Bold>(61) 98199-0271</Bold>, de segunda a sexta das 
            <Bold>7h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo Com Vivências */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimVivencias)}
      onPressOut={() => onPressOut(scaleAnimVivencias)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimVivencias }] }}>
        <SideBar color="#9ccc65" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimVivencias }] }}>
            <Ionicons name="accessibility-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Com Vivências</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Projeto voltado para <Bold>pessoas com deficiência</Bold> e <Bold>grupos de idosos</Bold>. 
            Em ação conjunta, a Diretoria de Educação Ambiental e a Diretoria de Museologia 
            atendem grupos de até <Bold>30 pessoas</Bold>.
          </CardText>
          <CardText>
            A visita e todas as atividades são modeladas de acordo com as 
            especificidades do grupo a ser atendido.
          </CardText>
          <CardText>
            O projeto acontece às <Bold>terças-feiras</Bold>, mediante agendamento prévio.
          </CardText>
          <CardText>
            Para mais informações e agendamento: <Bold>atendimento@zoo.df.gov.br</Bold>
          </CardText>
          <CardText>
            Dúvidas? WhatsApp: <Bold>(61) 98199-0271</Bold>, das <Bold>7h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo Acadêmico */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimAcademico)}
      onPressOut={() => onPressOut(scaleAnimAcademico)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimAcademico }] }}>
        <SideBar color="#aed581" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimAcademico }] }}>
            <Ionicons name="book-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Acadêmico</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Modalidade de visita agendada na qual um Coordenador/Docente de uma 
            Instituição de Ensino Superior realiza atividades juntamente com os 
            discentes vinculados, com monitoramento realizado pelos Técnicos e/ou 
            Educadores da FJZB.
          </CardText>
          <CardText>
            Disponível <Bold>de terça a sexta</Bold> com agendamento prévio pelo e-mail: 
            <Bold>zooacademico@zoo.df.gov.br</Bold>. Os solicitantes deverão preencher 
            o Formulário de Agendamento disponibilizado pela equipe de atendimento.
          </CardText>
          <CardText>
            <Bold>Isenção total</Bold> para alunos de Instituições Públicas e para os 
            professores das Instituições Públicas e Particulares.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Zoo Capacitação */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimCapacitacao)}
      onPressOut={() => onPressOut(scaleAnimCapacitacao)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimCapacitacao }] }}>
        <SideBar color="#c5e1a5" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimCapacitacao }] }}>
            <Ionicons name="ribbon-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Zoo Capacitação</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            Visita agendada na qual o demandante solicita atividades de 
            instrução/capacitação acerca de um tema específico a serem 
            ministradas por técnicos e/ou educadores da FJZB.
          </CardText>
          <CardText>
            O agendamento deve ser realizado pelo e-mail: <Bold>atendimento@zoo.df.gov.br</Bold>.
          </CardText>
          <CardText>
            Dúvidas? WhatsApp: <Bold>(61) 98199-0271</Bold>, das <Bold>7h às 12h</Bold> e das <Bold>14h às 17h</Bold>.
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    {/* Card Museu de Ciências Naturais */}
    <TouchableWithoutFeedback
      onPressIn={() => onPressIn(scaleAnimMuseu)}
      onPressOut={() => onPressOut(scaleAnimMuseu)}
    >
      <AnimatedCard style={{ transform: [{ scale: scaleAnimMuseu }] }}>
        <SideBar color="#dce775" />
        <CardHeader>
          <AnimatedIcon style={{ transform: [{ scale: pulseAnimMuseu }] }}>
            <Ionicons name="earth-outline" size={28} color="#33691e" />
          </AnimatedIcon>
          <CardTitle>Museu de Ciências Naturais</CardTitle>
        </CardHeader>
        <CardContent>
          <CardText>
            No Museu são expostas várias peças de animais, nativos e exóticos, 
            preparadas por diferentes técnicas de conservação de material biológico, 
            como taxidermia, osteotécnica, materiais curtidos e conservados em meio líquido.
          </CardText>
          <CardText>
            Em 2022, o Museu passou por revitalização das peças e reorganização do 
            acervo, com nova atração: o <Bold>Espaço Interativo</Bold>, onde os 
            visitantes podem ver de perto e sentir a textura da pele de diversos animais.
          </CardText>
          <CardText>
            O Museu desenvolve atividades educativas com exposição de peças do 
            acervo em Tendas Temáticas e projetos direcionados às pessoas com 
            deficiências e grupos de idosos.
          </CardText>
          <CardText>
            <Bold>Atualmente fechado para reformas, sem previsão para reabertura.</Bold>
          </CardText>
          <CardText>
            Para informações sobre os projetos: <Bold>atendimento@zoo.df.gov.br</Bold>
          </CardText>
        </CardContent>
      </AnimatedCard>
    </TouchableWithoutFeedback>

    <SiteLink onPress={() => Linking.openURL("https://www.zoo.df.gov.br/")}>
      <LinkText>Veja mais no site oficial</LinkText>
      <Ionicons name="arrow-forward" size={16} color="#1e88e5" />
    </SiteLink>
  </AnimatedScrollView>
</Container>
  );
}


const Container = styled.View`
  flex: 1;
  background-color: #fff; 
`;

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const TitleArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:  ${['ios', 'android'].includes(Platform.OS) ? "190px" : "150px"};
  margin-bottom: 20px;
`;

const MainTitle = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: #2e7d32;
  margin: 0 30px;
  letter-spacing: 1px;
  font-family:  ${['ios', 'android'].includes(Platform.OS) ? "Georgia" : "serif"};
`;

const Description = styled.Text`
  font-size: 17px;
  text-align: center;
  color: #4e4e4e;
  padding: 0 25px;
  margin-bottom: 30px;
  line-height: 25px;
`;

const AnimatedCard = styled(Animated.View)`
border-radius: 20px;
  margin: 14px 20px;
  padding: 22px 20px 22px 18px;
  shadow-color: #000000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.12;
  shadow-radius: 10px;
  elevation: 6;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
`;

const CardGradient = styled(LinearGradient)`
  flex: 1;
  border-radius: 20px;
  padding: 22px 20px 22px 18px;
  position: relative;
`;

const SideBar = styled.View`
  width: 6px;
  background-color: ${(props) => props.color || "#81c784"};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
`;

const AnimatedIcon = styled(Animated.View)`
  margin-right: 12px;
`;

const CardTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: #33691e;
`;

const CardContent = styled.View`
  margin-left: 4px;
`;

const CardText = styled.Text`
  font-size: 16px;
  color: #444;
  margin-bottom: 12px;
  line-height: 24px;
`;

const Bold = styled.Text`
  font-weight: 700;
  color: #2e7d32;
`;

const SiteLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const LinkText = styled.Text`
  font-size: 17px;
  color: #1e88e5;
  text-decoration: underline;
  margin-right: 8px;
`;
