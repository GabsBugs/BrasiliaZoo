import React, { useState } from "react";
import {
  HomeContainer,
  Navbar,
  Logo,
  NavLinks,
  NavButtons,
  Button,
  HeroSection,
  Subtitle,
  Title,
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
  NewsTitle
} from "./HomeScreen.styles";

import { useNavigation } from '@react-navigation/native';
import Header from "../components/Header";

const HomeScreen = () => {
  const [showNews, setShowNews] = useState(true); 


  const navigation = useNavigation();

  const handleTamanduaClick = () => {
    navigation.navigate("TamanduaDetails");
  };
  
  const handleJararacaClick = () => {
    navigation.navigate("JararacaDetails");
  };

  const handleCachorroMatoClick = () => {
    navigation.navigate("CachorroMatoDetails");
  };

  return (
    <HomeContainer>
      <Header />

      {/* Hero Section */}
      <HeroSection>
        <Subtitle>Uma experiência selvagem no coração da capital</Subtitle>
        <Title>Explore o Zoológico de Brasília</Title>
        <ButtonContainer>
          <CTAButton>PLANEJE SUA VISITA</CTAButton>
          <SecondaryButton>CONHEÇA NOSSOS ANIMAIS</SecondaryButton>
        </ButtonContainer>
      </HeroSection>

      {/* Memorial Yaza */}
      <ZooSection $memorial>
        <ZooTitle>EM MEMÓRIA DE YAZA</ZooTitle>
        <MemorialSection>
          <MemorialContent>
            <MemorialImage src="/images/girafa1.JPG" alt="Girafa Yaza" />
            <MemorialDateBadge>2003 - 2025</MemorialDateBadge>
          </MemorialContent>
          <div>
            <MemorialTitle>Yaza, nossa querida girafa</MemorialTitle>
            <MemorialText>
              Em março de 2025, nos despedimos da girafa Yaza, uma presença
              majestosa e inesquecível no Zoológico de Brasília. Seu legado vive
              em nossos corações e na memória de todos que tiveram o privilégio
              de conhecê-la.
            </MemorialText>
            <MemorialButton href="/yaza">SAIBA MAIS SOBRE YAZA</MemorialButton>
          </div>
        </MemorialSection>
      </ZooSection>

      <ZooDivider />

      {/* Seção 1 - Animais */}
      <ZooSection>
        <ZooTitle>CONECTE-SE COM O MUNDO NATURAL</ZooTitle>
        <ZooText>
          Habitats incríveis e experiências únicas com a vida selvagem de todo o
          mundo em um dia inesquecível.
        </ZooText>

        <HighlightSection>
          <img
            src="/images/elefante.JPG"
            alt="Elefante"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <ZooText>
            Conheça os incríveis animais que você pode encontrar no Zoológico de
            Brasília e suas histórias de conservação.
          </ZooText>
          <Button $variant="filled">VER TODOS OS ANIMAIS</Button>
        </HighlightSection>
      </ZooSection>

      {/* Seção Destaques */}
      <ZooSection>
        <ZooTitle>Não Perca Estas Experiências!</ZooTitle>
        <HighlightSection
          style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
        >
          <div
            style={{
              flex: "1",
              backgroundColor: "#222",
              color: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/tamandua-mirim.jpeg"
              alt="Tamanduá-Mirim"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <HighlightTitle>Nascimento de Tamanduá-Mirim</HighlightTitle>
              <ZooText>
                O Zoológico de Brasília comemora o nascimento de um tamanduá-mirim! 
                O filhote nasceu em 25 de janeiro e já pode ser visto pelos visitantes.
              </ZooText>
              <Button $variant="filled" onClick={handleTamanduaClick}>SAIBA MAIS SOBRE O TAMANDUÁ-MIRIM</Button>

            </div>
          </div>

          <div
  style={{
    flex: "1",
    backgroundColor: "#e1f7f0",
    borderRadius: "16px",
    overflow: "hidden",
  }}
>
  <img
    src="/images/jararaca.jpeg"
    alt="Filhotes de Jararaca"
    style={{ width: "100%", height: "200px", objectFit: "cover" }}
  />
  <div style={{ padding: "1rem" }}>
    <HighlightTitle>Nascimento de Jararacas</HighlightTitle>
    <ZooText>
      Zoológico celebra nascimento de 12 filhotes de jararaca-caiçaca, espécie importante do Cerrado.
    </ZooText>
    <Button $variant="filled" onClick={() => navigation.navigate("JararacaDetails")}>
      SAIBA MAIS
    </Button>
  </div>
</div>

<div
  style={{
    flex: "1",
    backgroundColor: "#f5f5dc", // Cor de fundo mais neutra para combinar com o tema
    borderRadius: "16px",
    overflow: "hidden",
  }}
>
  <img
    src="/images/cachorro-mato.jpeg"
    alt="Cachorro-do-mato"
    style={{ width: "100%", height: "200px", objectFit: "cover" }}
  />
  <div style={{ padding: "1rem" }}>
    <HighlightTitle>Resgate de Cachorro-do-mato</HighlightTitle>
    <ZooText>
      Fêmea resgatada após atropelamento é reabilitada e devolvida à natureza com sucesso.
    </ZooText>
    <Button 
      $variant="filled" 
      onClick={() => navigation.navigate("CachorroMatoDetails")}
    >
      CONHEÇA A HISTÓRIA
    </Button>
  </div>
</div>
        </HighlightSection>
      </ZooSection>

      {/* Popup de Notícias */}
      {showNews ? (
        <NewsPopup>
          <NewsPopupContent>
            <NewsCloseButton onClick={() => setShowNews(false)}>×</NewsCloseButton>
            <NewsTitle style={{ textAlign: 'center' }}>🦓 ENTRADA GRATUITA NO ZOOLÓGICO DE BRASÍLIA</NewsTitle>
            <ZooText>
              O Zoológico de Brasília oferece entrada <strong>gratuita</strong> para todos os visitantes todos os domingos e feriados! 🐾
            </ZooText>
            <ZooText>
              Não perca as <strong>visitas guiadas</strong> (às 9h30 e 14h30, em frente à estátua da elefante Nelly) e as atividades de <strong>educação ambiental</strong>, com muita diversão e aprendizado sobre a fauna e a conservação.
            </ZooText>
            <ZooText>
              O <strong>borboletário</strong> também está aberto de quarta a domingo, das 9h às 12h e das 13h30 às 15h30 — uma experiência encantadora para toda a família!
            </ZooText>
          </NewsPopupContent>
        </NewsPopup>
      ) : (
        <NewsReopenButton onClick={() => setShowNews(true)}>
          🦓 Entrada gratuita no Zoo!
        </NewsReopenButton>
      )}
    </HomeContainer>
  );
};

export default HomeScreen;
