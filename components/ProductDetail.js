import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function ProductDetail({ route, navigation }) {
  const { produto } = route.params; // Recebe o produto da navegação

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.foto }} style={styles.image} />
      <Text style={styles.title}>{produto.nome}</Text>
      <Text style={styles.price}>Preço: R$ {produto.preco}</Text>
      <Text style={styles.description}>{produto.descricao}</Text>

      <Button title="Voltar para a lista" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ProductDetail;
