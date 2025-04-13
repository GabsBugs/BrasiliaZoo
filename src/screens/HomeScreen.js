import React from 'react';
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
  CTAButton
} from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <HomeContainer>
      <Navbar>
        <Logo>
          <span>ZOOLÓGICO</span>
          <span>DE BRASÍLIA</span>
        </Logo>
        <NavLinks>
          <a href="#">MAPA INTERATIVO</a>
          <a href="#">Os ANIMAIS DO ZOOLOGICO</a>
          <a href="#">HISTÓRIAS</a>
          <a href="#">EDUCAÇÃO</a>
        </NavLinks>
        <NavButtons>
          <Button variant="outline">CONSERVAÇÃO</Button>
        </NavButtons>
      </Navbar>

      <HeroSection>
        <Subtitle>
          Visitas ilimitadas ao Zoológico de Brasília, durante todo o ano
        </Subtitle>
        <Title>Apoie o Zoológico</Title>
        <CTAButton>APOIE O ZOOLOGICO</CTAButton>
      </HeroSection>
    </HomeContainer>
  );
};

export default HomeScreen;