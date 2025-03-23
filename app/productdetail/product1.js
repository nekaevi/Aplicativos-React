import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

const Product1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-qzqKaLlkgsQ-n7myR9ncuPPhnAaW_6QHQ&s' }}
        style={styles.image}
      />
      <Text style={styles.title}>Roda para Hamster</Text>
      <Text style={styles.price}>R$ 50,00</Text>
      <Text style={styles.description}>Roda de exercício para hamster, excelente para manter seu pet saudável e ativo.</Text>
      <Button title="Voltar" onPress={() => history.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Product1;
