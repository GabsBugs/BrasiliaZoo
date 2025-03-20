import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EducationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educação Ambiental</Text>
      <Text style={styles.text}>Aprenda sobre a importância da conservação da vida selvagem.</Text>
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
    textAlign: 'center',
  },
});

export default EducationScreen;