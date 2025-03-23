import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

const Product2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.awsli.com.br/2500x2500/203/203612/produto/203580080/609-pmnvry.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa de Hamster</Text>
      <Text style={styles.price}>R$ 80,00</Text>
      <Text style={styles.description}>Casa confortável para o seu hamster, ideal para descanso e segurança.</Text>
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

export default Product2;
