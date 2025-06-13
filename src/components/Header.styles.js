import styled from "styled-components/native";
import { Platform } from "react-native";

export const Navbar = styled.View`
  background-color: white;
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.15;
  shadow-radius: 8px;
  elevation: 8;

  position: absolute;
  top: ${Platform.OS === "ios" ? "70px" : "20px"};
  left: 20px;
  right: 20px;
  max-height: 90px;
  left: 20px;
  right: 20px;

  border-radius: 20px;
  z-index: 1000;
`;

export const Logo = styled.TouchableOpacity`
  flex-direction: column;
  margin-left: 0;
`;

export const LogoTextMain = styled.Text`
  color: #2d7a36;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

export const LogoTextSub = styled.Text`
  color: #2d7a36;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;

export const NavLinks = styled.View`
  flex-direction: row;
`;

export const NavLink = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const NavLinkText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NavButtons = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px 20px;
  border-radius: 6px;
  background-color: ${({ variant }) =>
    variant === "filled" ? "#2d7a36" : "transparent"};
  border-width: ${({ variant }) => (variant === "filled" ? 0 : 2)}px;
  border-color: #2d7a36;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  color: ${({ variant }) => (variant === "filled" ? "#fff" : "#2d7a36")};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
`;

export const LogoImage = styled.Image`
  width: 130px;
  height: 120px;
  resize-mode: contain;
  margin-left: 0;
`;

export const MenuButton = styled.TouchableOpacity`
  background-color: #2d7a36;
  padding: 8px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const MenuOverlay = styled.View`
  position: absolute;
  top: 170px;
  left: 20px;
  right: 20px;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  z-index: 2000;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 10;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
