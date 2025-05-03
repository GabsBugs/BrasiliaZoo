import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import Header from "../components/Header";

const TamanduaDetails = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Nascimento de Tamanduá-Mirim no Zoo reforça esforços de conservação
        </Text>

        <img
          src="/images/tamandua-mirim.jpeg"
          alt="Tamanduá-Mirim"
          style={{
            width: "30%",
            height: "400px",
            objectFit: "cover",
            display: "block",
            margin: "30px auto",
            borderRadius: "30px",
          }}
        />

        <Text style={styles.text}>
          O Zoológico de Brasília comemora o nascimento de um tamanduá-mirim,
          filho da fêmea Pitica e do macho Jujubo. O novo integrante da família
          nasceu em 25 de janeiro e já pode ser visto pelos visitantes. Este é o
          segundo filhote do casal, que teve Amendoim em dezembro de 2023.
        </Text>

        <Text style={styles.text}>
          A equipe multidisciplinar do Zoológico de Brasília, composta por
          veterinários, biólogos e tratadores, monitora constantemente o
          desenvolvimento do filhote. Os profissionais avaliam sua alimentação,
          crescimento e comportamento, garantindo que ele receba todos os
          cuidados necessários para um desenvolvimento saudável.
        </Text>

        <Text style={styles.quote}>
          "A chegada desse novo filhote é motivo de grande alegria para nós.
          Isso mostra que o trabalho realizado aqui no Zoológico de Brasília
          está proporcionando condições adequadas para a reprodução e bem-estar
          da espécie", afirma Wallison Couto, diretor-presidente do Zoológico.
        </Text>

        <Text style={styles.subtitle}>Importância da conservação</Text>

        <Text style={styles.text}>
          O nascimento desse filhote é uma conquista significativa para os
          programas de conservação da espécie. O tamanduá-mirim, encontrado em
          diversas regiões da América do Sul, enfrenta ameaças como a perda de
          habitat devido ao desmatamento, atropelamentos e ataques de cães.
        </Text>

        <Text style={styles.text}>
          O tamanduá-mirim é um animal solitário, conhecido por sua habilidade
          em escalar árvores em busca de formigas e cupins, sua principal fonte
          de alimentação. Possui uma língua longa e pegajosa, que pode atingir
          até 40 centímetros, facilitando a captura de insetos.
        </Text>

        <Text style={styles.text}>
          Além disso, as fêmeas costumam carregar os filhotes nas costas até que
          eles se tornem independentes, o que ocorre por volta dos seis meses de
          idade.
        </Text>

        <Text style={styles.text}>
          O Zoológico de Brasília segue com seus projetos de educação ambiental
          e conscientização sobre a importância da preservação da fauna
          silvestre. A chegada do novo filhote reforça a necessidade de proteger
          os ambientes naturais e promover a convivência harmoniosa entre os
          humanos e a vida selvagem.
        </Text>

        <Text style={styles.subtitle}>Escolha do nome</Text>

        <Text style={styles.text}>
          O Zoológico de Brasília abriu uma enquete nos stories do Instagram
          oficial para que o público ajude a escolher o nome da nova filhote de
          tamanduá-mirim. A pequena é filha da famosa dupla Pitica e Jujubo e
          irmã do Amendoim, que nasceu em 2022.
        </Text>

        <Text style={styles.text}>
          Ela veio ao mundo no dia 25 de janeiro e, embora já esteja
          crescidinha, ainda pode ser vista circulando pelo recinto agarrada ao
          dorso da mãe, como é típico da espécie nos primeiros meses de vida.
        </Text>

        <Text style={styles.text}>
          A votação ficará disponível até as 10h de quinta-feira (10/04). Os
          nomes mais sugeridos pelos seguidores foram reunidos na enquete:
          Paçoca, Pipoca, Formiga e Castanha. O resultado será divulgado na
          sexta-feira (11/04), também pelas redes sociais do Zoo. A ação faz
          parte das estratégias do zoológico para aproximar o público dos
          projetos de conservação e educação ambiental realizados pela
          instituição.
        </Text>

        <Text style={styles.quote}>
          "A participação do público em ações como essa é fundamental. Quando as
          pessoas se envolvem e se sentem parte do processo, elas passam a se
          interessar mais pelas espécies, seus hábitos e pela conservação da
          natureza. É uma forma leve e educativa de despertar a consciência
          ambiental", afirma Wallison Couto, diretor-presidente do Zoológico.
        </Text>

        <Text style={styles.subtitle}>Sobre o tamanduá-mirim</Text>

        <Text style={styles.text}>
          O tamanduá-mirim (Tamandua tetradactyla), também conhecido como
          tamanduá-de-colete por causa do padrão escuro de pelos no dorso e nas
          laterais, é uma espécie nativa da América do Sul. Ele se alimenta
          principalmente de formigas e cupins, que captura com sua língua
          comprida e pegajosa. Apesar de ser um animal solitário e de hábitos
          noturnos, é possível observá-lo ativo durante o dia em ambientes
          tranquilos.
        </Text>

        <Text style={styles.text}>
          Atualmente, o tamanduá-mirim não está classificado como ameaçado de
          extinção em nível global, mas enfrenta riscos devido à perda de
          habitat, atropelamentos e ataques de cães em áreas urbanas e rurais. A
          criação em zoológicos e a educação ambiental são ferramentas
          importantes para sua conservação e para o fortalecimento da
          convivência harmoniosa entre fauna silvestre e sociedade.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 20,
    marginTop: Platform.select({
      ios: 90,
      android: 80,
      default: 100,
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    color: "#2E8B57",
  },
  socialShare: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  socialText: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
    resizeMode: "cover",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "justify",
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderLeftWidth: 4,
    borderLeftColor: "#2E8B57",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2E8B57",
    marginTop: 10,
  },
});

export default TamanduaDetails;
