import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AnimalScreen = ({ route }) => {
  const defaultAnimal = {
    name: 'Onça-Pintada',
    description: 'A onça-pintada é o maior felino das Américas.',
    image: null, // Deixa nulo para testar sem imagem
  };

  const { animal = defaultAnimal } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{animal.name}</Text>

      {/* Verifica se a imagem existe */}
      {animal.image ? (
        <Image source={animal.image} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>Imagem não disponível</Text>
        </View>
      )}

      <Text style={styles.description}>{animal.description}</Text>
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
  description: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 10,
    color: '#444',
  },
});

export default AnimalScreen;
