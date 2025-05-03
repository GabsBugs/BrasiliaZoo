import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Navbar,
  Logo,
  NavLinks,
  NavButtons,
  Button
} from './Header.styles';

const Header = () => {
  const navigation = useNavigation();

  return (
    <Navbar>
      <Logo onClick={() => navigation.navigate("Home")}>
        <span>ZOOLÓGICO</span>
        <span>DE BRASÍLIA</span>
      </Logo>
      
      <NavLinks>
        <a href="#" onClick={() => navigation.navigate("Map")}>MAPA INTERATIVO</a>
        <a href="#" onClick={() => navigation.navigate("Animals")}>OS ANIMAIS</a>
        <a href="#" onClick={() => navigation.navigate("Stories")}>HISTÓRIAS</a>
        <a href="#" onClick={() => navigation.navigate("Education")}>EDUCAÇÃO</a>
      </NavLinks>
      
      <NavButtons>
        <Button $variant="outline" onClick={() => navigation.navigate("Conservation")}>
          CONSERVAÇÃO
        </Button>
      </NavButtons>
    </Navbar>
  );
};

export default Header;