import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: 
    linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
    url('/images/onca.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Navbar = styled.header`
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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

export const Button = styled.button`
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  
  background-color: ${({ variant }) =>
    variant === 'filled' ? '#2d7a36' : 'transparent'};
  color: ${({ variant }) =>
    variant === 'filled' ? '#fff' : '#2d7a36'};
  border: ${({ variant }) =>
    variant === 'filled' ? 'none' : '2px solid #2d7a36'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
`;

export const HeroSection = styled.main`
  padding: 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
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

export const CTAButton = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #16a34a;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;