// components/Header.styles.js
import styled from "styled-components";

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
  cursor: pointer; 
  
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