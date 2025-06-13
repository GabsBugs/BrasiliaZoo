import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Text, View, ImageBackground, Image } from "react-native";
import { Animated } from "react-native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from 'react-native'; 

export const HomeContainer = styled(ImageBackground).attrs({
  resizeMode: "cover",
})`
  flex: 1;
`;

export const TitleUnderline = styled.View`
  width: 150px;
  height: 4px;
  background-color: #2d7a36;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-75px);
  border-radius: 2px;
`;

export const HeroContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
`;

export const HeroTitle = styled.Text`
  font-weight: 400;
  letter-spacing: 4.8px;
  padding-bottom: 24px;
  margin: 0 auto 32px;
  max-width: 80%;
  font-size: 48px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-align: center;
`;



export const HeroSubtitle = styled.Text`
  font-size: 19.2px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  margin-top: 16px;
  padding: 16px 48px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  border: 1px solid rgba(250, 204, 21, 0.3);
  overflow: hidden;
`;

export const HeroSection = styled(ImageBackground).attrs({
  source: require("../assets/images/onca.jpg"),
  resizeMode: "cover",
   imageStyle: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
})`
 padding-top: 80px;
  width: 100%;
  height: ${Platform.OS === 'ios' ? '600px' : '650px'};

  justify-content: center;
  align-items: center;
  position: relative;

`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); 
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;



export const Title = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: white;
  text-align: center;
  line-height: 48px;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-family: ${(props) => props.fontsLoaded ? "MontserratBold" : "System"};
  
`;

export const Subtitle = styled.Text`
  color: #facc15;
  font-weight: 600;
  font-size: ${Platform.OS === 'ios' ? 12 : 10 }px; 
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0px 28px;
  font-family: ${(props) => props.fontsLoaded ? "MontserratSemiBold" : "System"};
  text-align: center; 
  include-font-padding: false; 
`;

export const SubtitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  margin: 12px 70px;
`;

export const UnderlineBar = styled(LinearGradient).attrs({
  colors: ['#facc15', '#2d7a36'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
})`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;


// Navbar
// export const Navbar = styled.View`
//   background-color: white;
//   padding: 16px 24px;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin: 20px;
//   border-radius: 20px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   elevation: 10;
//   shadow-color: #000;
//   shadow-offset: 0px 8px;
//   shadow-opacity: 0.15;
//   shadow-radius: 16px;
//   z-index: 1000;
// `;


export const TitleUnderlineContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Triangle = styled.View`
  width: 0;
  height: 0;
  border-top-width: 8px;
  border-bottom-width: 8px;
  border-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
`;

export const LeftTriangle = styled(Triangle)`
  border-right-width: 16px;
  border-right-color: #2d7a36; 
`;

export const RightTriangle = styled(Triangle)`
  border-left-width: 16px;
  border-left-color: #facc15; 
`;

export const Bar = styled(LinearGradient).attrs({
  colors: ['#2d7a36', '#facc15'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 150px;
  height: 8px;
  border-radius: 2px;
`;


export const Logo = styled.View`
  flex-direction: column;
`;

export const LogoTextPrimary = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #2d7a36;
`;

export const LogoTextSecondary = styled.Text`
  font-size: 21px;
  color: #2d7a36;
`;

export const NavLinks = styled.View`
  flex-direction: row;
  gap: 24px;
`;

export const NavLink = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
`;

export const NavButtons = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const Button = styled(TouchableOpacity)`
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 6px;
  background-color: ${({ $variant }) =>
    $variant === "filled" ? "#2d7a36" : "transparent"};
  border-width: ${({ $variant }) => ($variant === "filled" ? 0 : 2)}px;
  border-color: #2d7a36;
  align-items: center;
`;


export const ButtonText = styled.Text`
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ $variant }) => ($variant === "filled" ? "#fff" : "#2d7a36")};
`;


export const ButtonTextWhite = styled(ButtonText)`
  color: white;
  font-size: 16px;
  text-align: center;
  font-family: ${props => props.fontsLoaded ? 'MontserratSemiBold' : 'System'};
`;

export const ButtonTextBlack = styled(ButtonText)`
  color: #2E7D32; 
  font-size: 16px;
  text-align: center;
  font-family: ${props => props.fontsLoaded ? 'MontserratSemiBold' : 'System'};
`;

export const CTAButton = styled(Button).attrs({
  $variant: "filled",
})`
  padding-vertical: 16px;
  padding-horizontal: 32px;
  justify-content: center;
  align-items: center;
  background-color: #2E7D32; 
  border-radius: 8px;
  elevation: 4;
  shadow-color: #000; 
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;


export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 90%;      
  align-self: center;  
  flex-wrap: wrap;
`;



export const CTAButtonText = styled(ButtonText)`
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.84); 
  border-width: 1.5px;
  border-color: white;
  border-radius: 12px;
  padding-vertical: 16px;
  padding-horizontal: 32px;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  elevation: 3;
`;
export const SecondaryButtonText = styled(ButtonTextWhite)`
  text-shadow-color: rgba(0, 0, 0, 0.4);
  text-shadow-offset: { width: 1, height: 1 };
  text-shadow-radius: 2px;
`;

export const ZooTitle = styled(Text)`
  font-size: 32px;
  color: #2d7a36;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const ZooSubtitle = styled(Text)`
  font-size: 19.2px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
`;

export const ZooText = styled(Text)`
  font-size: 16px;
  max-width: 700px;
  margin: 0 auto 32px;
  line-height: 25.6px;
`;

export const ZooDivider = styled(View)`
  height: 1px;
  background-color: #eee;
  margin: 32px auto;
  width: 80%;
`;

export const HighlightSection = styled(View)`
  background-color: #f8f8f8;
  padding: 32px;
  margin: 32px auto 32px;
  border-radius: 8px;
  max-width: 800px;
`;

export const HighlightTitle = styled(Text)`
  font-size: 20.8px;
  color: #2d7a36;
  margin-bottom: 16px;
`;



export const StarDecoration = styled.Text`
  position: absolute;
  top: 50%;
  color: #facc15;
  font-size: 19.2px;
`;

export const LeftStar = styled(StarDecoration)`
  left: 16px; 
`;

export const RightStar = styled(StarDecoration)`
  right: 16px; 
`;

export const LeafDecoration = styled.View`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 1;
  background-color: transparent;
`;

export const GoldenDotsOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  opacity: 0.1;
  z-index: 0;
`;





export const ZooSection = styled.View`
  padding: 64px 32px;
  background-color: ${(props) => (props.memorial ? "#f9f5f0" : "white")};
  align-items: center;
`;

export const MemorialSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 20px;
  elevation: 5;
  shadow-color: #8b4513;
  shadow-opacity: 0.1;
  shadow-radius: 30px;
  shadow-offset: 0px 10px;

  ${(props) =>
    props.memorial &&
    `
    padding-top: 48px;
    padding-bottom: 48px;
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

// Memorial Components
export const MemorialContent = styled.View`
  position: relative;
  flex: 1;
  max-width: 500px;
`;

export const MemorialImage = styled.Image`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  elevation: 5;
  shadow-color: #8b4513;
  shadow-opacity: 0.2;
  shadow-radius: 25px;
  shadow-offset: 0px 8px;
`;

export const MemorialDateBadge = styled.View`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: #8b4513;
  color: white;
  padding: 12.8px 24px;
  border-radius: 10px;
  font-size: 17.6px;
  font-weight: bold;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 12px;
  shadow-offset: 0px 4px;

  @media (max-width: 768px) {
    right: 10px;
    bottom: -15px;
  }
`;

export const MemorialTitle = styled.Text`
  font-size: 32px;
  color: #8b4513;
  margin-bottom: 24px;
  position: relative;
  padding-bottom: 12.8px;
  text-align: left;
`;

export const MemorialText = styled.Text`
  font-size: 17.6px;
  line-height: 31.68px;
  color: #555;
  margin-bottom: 32px;
  text-align: left;
  max-width: 600px;
`;

export const MemorialButton = styled.TouchableOpacity`
  padding: 12.8px 28.8px;
  background-color: #8b4513;
  border-radius: 8px;
`;

export const MemorialButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

// News Components
export const NewsSection = styled.View`
  background-color: #e6f4ea;
  padding: 32px;
  border-radius: 16px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 20px;
  shadow-offset: 0px 4px;
  margin-top: 16px;
  align-items: center;
`;

export const NewsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const NewsIcon = styled.View`
  background-color: #2d7a36;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  elevation: 5;
  shadow-color: #2d7a36;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  shadow-offset: 0px 2px;
`;

export const NewsContent = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 12px;
  shadow-offset: 0px 4px;
  margin-top: 16px;
`;

export const NewsHighlight = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const NewsBullet = styled.View`
  width: 8px;
  height: 8px;
  background-color: #2d7a36;
  border-radius: 4px;
  margin-right: 8px;
`;

export const NewsTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 16px;
`;

export const NewsText = styled.Text`
  font-size: 17.6px;
  color: #444;
`;

// News Popup
export const NewsPopup = styled.View`
  position: absolute;
  top: ${Platform.OS === 'ios' ? '22%' : '3%'};  
  
  left: 20px;
  right: 20px; 
  background-color: #fffbe6;
  border-left-width: 4px;
  border-left-color: #ffae00;
  padding: 16px;
  width: 320px;
  z-index: 1000;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 8px;
  shadow-offset: 0px 2px;
  border-radius: 10px;
`;

export const NewsPopupContent = styled.View`
  gap: 8px;
`;

export const NewsCloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 8px;
  margin: -8px -8px 0 0;
`;

export const NewsReopenButton = styled.TouchableOpacity`
   position: ${Platform.OS === 'web' ? 'fixed' : 'absolute'};
  bottom: 20px;
  left: 20px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #ffecb3;
  border-width: 1px;
  border-color: #ffd700;
  z-index: 999;
`;
