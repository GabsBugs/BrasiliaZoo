import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos no Zoológico</Text>
      <Text style={styles.text}>Confira nossos próximos eventos:</Text>
      <Text style={styles.event}>- Dia da Onça-Pintada: 15/10/2023</Text>
      <Text style={styles.event}>- Palestra sobre Conservação: 20/10/2023</Text>
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
    marginBottom: 10,
  },
  event: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default EventsScreen;