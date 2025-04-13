import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DonationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça uma Doação</Text>
      <Text style={styles.text}>Sua doação ajuda na conservação dos animais e na manutenção do zoológico.</Text>
      <Button title="Doar Agora" onPress={() => alert('Redirecionando para a página de doações...')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DonationScreen;