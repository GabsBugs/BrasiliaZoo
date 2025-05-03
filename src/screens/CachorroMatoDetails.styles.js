import styled from "styled-components";

// Contêiner principal da página de detalhes
export const ZooContainer = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
`;

// Título da página
export const ZooTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

// Texto da página
export const ZooText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
`;

// Botão de voltar
export const BackButton = styled.button`
  background-color: #f5a623;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #d87a14;
  }
`;
