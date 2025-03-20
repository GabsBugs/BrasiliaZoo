import React from 'react'; 
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Zoológico de Brasília</Text>

      {/* Verifica se a imagem está disponível */}
      {false ? (
        <Image source={require('../assets/images/onca.jpg')} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>Imagem não disponível</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Explorar Animais" onPress={() => navigation.navigate('Animal')} color="#007AFF" />
        <Button title="Eventos" onPress={() => navigation.navigate('Events')} color="#34C759" />
        <Button title="Doações" onPress={() => navigation.navigate('Donation')} color="#FF9500" />
        <Button title="Educação Ambiental" onPress={() => navigation.navigate('Education')} color="#AF52DE" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 300,
    height: 200,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
});

export default HomeScreen;
