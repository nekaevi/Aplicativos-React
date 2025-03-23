import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

const Product4 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfNXeg-TPdnw_x_Ho0KyNZt9nhGDrq8ymDQ&s' }}
        style={styles.image}
      />
      <Text style={styles.title}>Brinquedo Interativo</Text>
      <Text style={styles.price}>R$ 20,00</Text>
      <Text style={styles.description}>Brinquedo interativo para hamster, perfeito para estimular a atividade física e mental.</Text>
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

export default Product4;
