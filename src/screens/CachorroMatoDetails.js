import React, { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
  Modal,
  SafeAreaView
} from "react-native";
import { WebView } from 'react-native-webview';
import Header from "../components/Header";


const CachorroMatoDetails = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Fêmea de cachorro-do-mato resgatada em MG é devolvida à natureza</Text>

        <img
          src="/images/cachorro-mato.jpeg"
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
          Nesta sexta-feira (28/03), uma fêmea de cachorro-do-mato (Cerdocyon thous) chamada Lili retornou ao habitat natural após passar por um longo processo de reabilitação. O animal foi resgatado em Unaí (MG) após ser atropelado em uma rodovia próxima a uma área de queimadas.
        </Text>
        
        <Text style={styles.text}>
          Com autorização do Ibama, Lili foi encaminhada ao Zoológico de Brasília, onde recebeu atendimento especializado. A filhote chegou ao Zoo em setembro de 2024, pesando apenas 740 gramas.
        </Text>
        
        <Text style={styles.quote}>
          "A avaliação inicial revelou que Lili apresentava uma luxação no membro posterior esquerdo, além de uma escoriação. Ela recebeu analgésicos e anti-inflamatórios, e exames de raio-X confirmaram que não havia fraturas", explica Dra. Tânia Borges, diretora do hospital veterinário.
        </Text>
        
        <View style={styles.highlightBox}>
          <Text style={styles.highlightTitle}>TRATAMENTOS REALIZADOS:</Text>
          <Text style={styles.highlightText}>• Sessões de acupuntura</Text>
          <Text style={styles.highlightText}>• Cromoterapia</Text>
          <Text style={styles.highlightText}>• Fisioterapia intensiva</Text>
          <Text style={styles.highlightText}>• Dieta balanceada</Text>
        </View>
        
        <Text style={styles.text}>
          Apesar da pouca idade, Lili demonstrava comportamento arredio e agressivo, evitando qualquer contato com humanos. Para preservar seu comportamento silvestre, a equipe minimizou a interação.
        </Text>
        
        <Text style={styles.quote}>
          "O trabalho do zoológico é essencial para garantir que espécies silvestres tenham uma nova chance na natureza. Cuidamos para que o contato com humanos seja mínimo", afirma Wallison Couto, diretor do Zoo.
        </Text>
        
        <Text style={styles.text}>
          Ao atingir 3,5 kg, peso adequado para um adulto, Lili foi transferida para o Cetas-DF antes da soltura em área aprovada pelo Ibama.
        </Text>
        
        <TouchableOpacity 
          style={styles.videoButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.videoButtonText}>ASSISTA AO VÍDEO DA SOLTURA</Text>
        </TouchableOpacity>

        {/* Modal com WebView */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            
            <WebView
              source={{ uri: 'https://www.instagram.com/p/DGn8J8KP9Uc/embed' }}
              style={styles.webView}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>
        </Modal>
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

export default CachorroMatoDetails;