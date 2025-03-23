import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/style';

function Card({ produto }) {
  const { nome, preco, foto } = produto;

  const handleComprar = () => {
    alert('Produto adicionado ao carrinho');
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.produtoImagem} />
      <Text style={styles.produtoNome}>{nome}</Text>
      <Text style={styles.produtoPreco}>R$ {preco}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleComprar}>
        <Text style={styles.botaoTexto}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
