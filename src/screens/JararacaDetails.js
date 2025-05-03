import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from "../components/Header";
import { Platform } from 'react-native';



const JararacaDetails = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Zoológico de Brasília celebra nascimento de 12 filhotes de jararaca-caiçaca</Text>
        
        <img
          src="/images/jararaca.jpeg"
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
          Em uma conquista significativa para a conservação de espécies do Cerrado, o Zoológico de Brasília registrou no dia 8 de abril o nascimento de 12 filhotes de jararaca-caiçaca (Bothrops moojeni). Esta espécie, nativa do bioma Cerrado, desempenha um papel ecológico crucial como controladora de populações de pequenos roedores e outros animais.
        </Text>
        
        <Text style={styles.subtitle}>Importância Científica</Text>
        
        <Text style={styles.text}>
          O veneno da jararaca-caiçaca é objeto de mais de 15 estudos científicos atualmente, com potencial para desenvolvimento de medicamentos contra hipertensão, coagulantes sanguíneos e até mesmo drogas para tratamento de câncer. Pesquisadores da Universidade de Brasília colaboram com o zoológico na coleta responsável de amostras.
        </Text>
        
        <Text style={styles.quote}>
          "Cada filhote representa não só uma vitória para a conservação, mas também uma oportunidade para avanços medicinais que podem salvar vidas humanas", explica Dra. Ana Beatriz, pesquisadora do Instituto Butantan.
        </Text>
        
        <Text style={styles.subtitle}>Cuidados Especiais</Text>
        
        <Text style={styles.text}>
          Os recém-nascidos estão sendo mantidos em um terrário especial com temperatura controlada entre 28-32°C e umidade relativa do ar em 70%. A equipe de herpetólogos do zoo realiza alimentação controlada com pequenos anfíbios duas vezes por semana.
        </Text>
        
        <View style={styles.highlightBox}>
          <Text style={styles.highlightTitle}>CARACTERÍSTICAS DA ESPÉCIE</Text>
          <Text style={styles.highlightText}>• Comprimento adulto: 1,2 a 1,8 metros</Text>
          <Text style={styles.highlightText}>• Expectativa de vida: 15 anos em cativeiro</Text>
          <Text style={styles.highlightText}>• Dieta: Roedores, lagartos e anfíbios</Text>
          <Text style={styles.highlightText}>• Habitat natural: Cerrado e áreas florestais</Text>
        </View>
        
        <Text style={styles.subtitle}>Programa de Conservação</Text>
        
        <Text style={styles.text}>
          Este nascimento faz parte do Programa Nacional de Conservação de Serpentes Brasileiras, que já reintroduziu com sucesso 47 espécimes na Estação Ecológica de Águas Emendadas nos últimos 3 anos. Os novos filhotes passarão por avaliações antes de possível inclusão no programa.
        </Text>
        
        <Text style={styles.quote}>
          "A má reputação das jararacas é injusta. Elas são vitais para o equilíbrio ecológico e raramente atacam humanos sem provocação", defende o biólogo Carlos Renato, curador de répteis do zoo.
        </Text>
        
        <Text style={styles.text}>
          O Zoológico oferece palestras educativas mensais para desmistificar a espécie e alertar sobre a importância de preservar seu habitat natural, cada vez mais ameaçado pelo avanço urbano.
        </Text>
        
        <Text style={styles.subtitle}>Quando Visitar</Text>
        
        <Text style={styles.text}>
          Os filhotes estarão em exposição a partir de junho, quando completarem o período de quarentena e adaptação. Visitantes poderão observá-los no novo setor de Répteis do Cerrado, que recria fielmente seu habitat natural.
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

export default JararacaDetails;