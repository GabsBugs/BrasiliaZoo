import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Navbar,
  Logo,
  LogoTextMain,
  LogoTextSub,
  NavLinks,
  NavLink,
  NavButtons,
  Button,
  ButtonText,
  MenuButton,
  MenuOverlay,
  MenuItem,
  LogoImage,
} from "./Header.styles";
import icon2 from "../assets/images/icon.png";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const { width } = useWindowDimensions();

  const isMobile = width < 600;

  const handleNavigate = (route) => {
    navigation.navigate(route);
    setMenuVisible(false);
  };

  return (
    <>
      <Navbar>
        <Logo onPress={() => handleNavigate("Home")}>
          <LogoImage source={icon2} />
        </Logo>

        {isMobile ? (
          <MenuButton onPress={() => setMenuVisible(!menuVisible)}>
            <Ionicons name="menu" size={24} color="white" />
          </MenuButton>
        ) : (
          <>
            <NavLinks>
              <NavLink onPress={() => handleNavigate("Map")}>
                <ButtonText variant="outline"> MAPA DO ZOOLÓGICO</ButtonText>
              </NavLink>
              <NavLink onPress={() => handleNavigate("Animal")}>
                <ButtonText variant="outline">OS ANIMAIS</ButtonText>
              </NavLink>
              {/* <NavLink onPress={() => handleNavigate("Stories")}>
                <ButtonText variant="outline">HISTÓRIAS</ButtonText>
              </NavLink> */}
              <NavLink onPress={() => handleNavigate("Education")}>
                <ButtonText variant="outline">EDUCAÇÃO AMBIENTAL</ButtonText>
              </NavLink>
            </NavLinks>

            <NavButtons>
              <Button
                variant="outline"
                onPress={() => handleNavigate("Conservation")}
              >
                <ButtonText variant="outline">CONSERVAÇÃO</ButtonText>
              </Button>
            </NavButtons>
          </>
        )}
      </Navbar>

      {menuVisible && (
        <MenuOverlay>
          <MenuItem onPress={() => handleNavigate("Map")}>
            <ButtonText variant="outline">MAPA DO ZOOLÓGICO</ButtonText>
          </MenuItem>
          <MenuItem onPress={() => handleNavigate("Animal")}>
            <ButtonText variant="outline">OS ANIMAIS</ButtonText>
          </MenuItem>
          {/* <MenuItem onPress={() => handleNavigate("Stories")}>
            <ButtonText variant="outline">HISTÓRIAS</ButtonText>
          </MenuItem> */}
          <MenuItem onPress={() => handleNavigate("Education")}>
            <ButtonText variant="outline">EDUCAÇÃO AMBIENTAL</ButtonText>
          </MenuItem>
          <MenuItem onPress={() => handleNavigate("Conservation")}>
            <ButtonText variant="outline">CONSERVAÇÃO</ButtonText>
          </MenuItem>
        </MenuOverlay>
      )}
    </>
  );
};

export default Header;
