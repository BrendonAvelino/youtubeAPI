import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function BoasVindas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boas Vindas!</Text>
      <Button
        title="Pesquisar no YouTube e Vimeo"
        onPress={() => navigation.navigate('RotaInterna')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});
