import React from "react";
import { useHistory } from "react-router-dom";
import { ZooContainer, ZooTitle, ZooText, BackButton } from "./TamanduaDetails.styles";

const TamanduaDetails = () => {
  const history = useHistory();

  // Função para voltar para a página inicial
  const goBack = () => {
    history.push("/"); // Redireciona para a página inicial
  };

  return (
    <ZooContainer>
      <ZooTitle>Detalhes sobre o Nascimento do Tamanduá-Mirim</ZooTitle>
      <ZooText>
        O Zoológico de Brasília tem o prazer de anunciar o nascimento de um tamanduá-mirim, filho da fêmea Pitica e do macho Jujubo. O filhote nasceu no dia 25 de janeiro e já está encantando os visitantes.
      </ZooText>
      <ZooText>
        A equipe do zoológico monitora de perto o desenvolvimento do filhote, que está crescendo saudável e forte. Os cuidados com sua alimentação e bem-estar são realizados por veterinários, biólogos e tratadores.
      </ZooText>
      <ZooText>
        Este nascimento é um marco para os programas de conservação da espécie, que enfrenta diversas ameaças, como a perda de habitat e o tráfico de animais silvestres.
      </ZooText>
      <ZooText>
        Os visitantes podem ver o filhote junto de seus pais e aprender mais sobre os hábitos e características dessa espécie fascinante.
      </ZooText>
      <BackButton onClick={goBack}>Voltar</BackButton>
    </ZooContainer>
  );
};

export default TamanduaDetails;
