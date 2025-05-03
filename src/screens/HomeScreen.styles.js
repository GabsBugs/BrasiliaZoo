import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  // background: 
  //   linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
  //   url('/images/onca.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
`;


export const Navbar = styled.header`
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); 
  position: fixed;
  top: 0;
  width: calc(100% - 104px); 
  margin: 20px;
  border-radius: 20px;
  z-index: 1000;
`;



export const Logo = styled.div`
  color: #2d7a36;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  
  span:first-child {
    font-size: 1.8rem;
  }
  
  span:last-child {
    font-size: 1.3rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.3s;

    &:hover {
      color: #2d7a36;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.button.attrs(({ $variant }) => ({}))`
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  
  background-color: ${({ $variant }) =>
    $variant === 'filled' ? '#2d7a36' : 'transparent'};
  color: ${({ $variant }) =>
    $variant === 'filled' ? '#fff' : '#2d7a36'};
  border: ${({ $variant }) =>
    $variant === 'filled' ? 'none' : '2px solid #2d7a36'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
`;



export const Subtitle = styled.h2`
  color: #facc15;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

export const CTAButton = styled(Button).attrs({
  $variant: 'filled'
})`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  
  &:hover {
    background-color: #16a34a;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  margin-left: 1rem;
  
  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;


export const ZooTitle = styled.h2`
  font-size: 2rem;
  color: #2d7a36;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const ZooSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const ZooText = styled.p`
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-decoration: none;
   user-select: none; 
  outline: none; 
  border: none;
`;

export const ZooDivider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 2rem auto;
  width: 80%;
`;

export const HighlightSection = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

export const HighlightTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d7a36;
  margin-bottom: 1rem;
`;

export const HeroSection = styled.section`
  min-height: 80vh;
  padding: 2rem 1rem;
  background: 
    linear-gradient(145deg, rgba(45,122,54,0.3) 0%, rgba(0,0,0,0.7) 100%),
    url('/images/onca.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 40px 40px; /* Borda arredondada apenas na base */

  /* Efeito de folhas flutuantes */
  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 100px;
    background: url('/leaf-border.png') bottom/cover no-repeat;
    z-index: 1;
  }

  ${Title} {
    font-weight: 400;
    letter-spacing: 0.3rem;
    position: relative;
    padding-bottom: 1.5rem;
    margin: 0 auto 2rem;
    max-width: 80%;
    font-size: 3rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    
    /* Linha decorativa curva */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 4px;
      background: linear-gradient(90deg, 
        transparent, 
        #facc15 30%, 
        #2d7a36 50%, 
        #facc15 70%, 
        transparent);
      border-radius: 50%; /* Torna a linha arredondada */
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  }
  
  ${Subtitle} {
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin-top: 1rem;
    position: relative;
    padding: 1rem 3rem;
    display: inline-block;

    backdrop-filter: blur(5px);
    border-radius: 30px;
    border: 1px solid rgba(250,204,21,0.3);
    
    /* Estrelas com efeito flutuante */
    &::before, &::after {
      content: '★';
      color: #facc15;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2rem;
      animation: float 3s infinite ease-in-out;
    }
    
    &::before {
      left: 1rem;
      animation-delay: 0s;
    }
    
    &::after {
      right: 1rem;
      animation-delay: 0.5s;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(-50%) scale(1); }
      50% { transform: translateY(-60%) scale(1.1); }
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/golden-dots.png') center/cover;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }
`;

export const ZooSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.$memorial ? '#f9f5f0' : 'white'};
  text-align: center;
  
  ${props => props.$memorial && `
    padding-top: 3rem;
    padding-bottom: 3rem;
  `}
`;

export const MemorialSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const MemorialContent = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
`;

export const MemorialImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
`;

export const MemorialDateBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background-color: #8B4513;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    right: 10px;
    bottom: -15px;
  }
`;

export const MemorialTitle = styled.h3`
  font-size: 2rem;
  color: #8B4513;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  text-align: left;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #FACC15;
    border-radius: 2px;
  }
`;

export const MemorialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 600px;
`;

export const MemorialButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: #8B4513;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 1rem;
  text-align: center;
  
  &:hover {
    background-color: #A0522D;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(139, 69, 19, 0.3);
  }
`;




export const NewsSection = styled.section`
  background-color: #e6f4ea;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  margin-top: 1rem;
  text-align: center;
`;




export const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const NewsIcon = styled.div`
  background-color: #2d7a36;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 2px 8px rgba(45, 122, 54, 0.3);
`;

export const NewsContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-top: 1rem;
`;

export const NewsHighlight = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const NewsBullet = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #2d7a36;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

// export const NewsTitle = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 600;
//   color: #2d7a36;
//   margin-bottom: 0;
//   letter-spacing: 0.5px;
// `;

// export const NewsText = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   color: #333;
//   margin-bottom: 1.5rem;
// `;


export const NewsTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1rem;
`;

export const NewsText = styled.p`
  font-size: 1.1rem;
  color: #444;
`;


const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

// News popup
export const NewsPopup = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #fffbe6;
  border: 1px solid #ffd700;
  border-left: 4px solid #ffae00;
  padding: 1rem;
  width: 300px;
  z-index: 1000;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
  border-radius: 10px;
  animation: ${slideIn} 0.3s ease-out;
`;

export const NewsPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NewsCloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const NewsReopenButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: #ffecb3;
  border: 1px solid #ffd700;
  cursor: pointer;
  z-index: 999;
`;
