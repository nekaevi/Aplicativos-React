// app/productdetail/[id].js
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/style';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;  // Obtém o ID do produto da URL

  // Lista de produtos
  const produtos = [
    {
      id: 1,
      nome: 'Roda para Hamster',
      preco: 'R$ 50,00',
      descricao: 'Uma excelente roda para o seu hamster se exercitar.',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-qzqKaLlkgsQ-n7myR9ncuPPhnAaW_6QHQ&s',
    },
    {
      id: 2,
      nome: 'Casa de Hamster',
      preco: 'R$ 80,00',
      descricao: 'Casa aconchegante para o seu hamster descansar.',
      foto: 'https://cdn.awsli.com.br/2500x2500/203/203612/produto/203580080/609-pmnvry.jpg',
    },
    {
      id: 3,
      nome: 'Comida Premium',
      preco: 'R$ 30,00',
      descricao: 'Comida nutritiva e saborosa para o seu hamster.',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI4hGKKzNRM8DIB556PXkApk4MjNwXYiZUQ&s',
    },
    {
      id: 4,
      nome: 'Brinquedo Interativo',
      preco: 'R$ 20,00',
      descricao: 'Brinquedo para entreter seu hamster.',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfNXeg-TPdnw_x_Ho0KyNZt9nhGDrq8ymDQ&s',
    },
  ];

  // Encontre o produto baseado no ID
  const produto = produtos.find((produto) => produto.id === parseInt(id));

  if (!produto) {
    return <Text>Produto não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{produto.nome}</Text>
      <Image source={{ uri: produto.foto }} style={styles.banner} resizeMode="contain" />
      <Text style={styles.subHeaderText}>{produto.preco}</Text>
      <Text style={styles.produtoDescricao}>{produto.descricao}</Text>
      <Button title="Voltar para Produtos" onPress={() => router.push('/')} />  {/* Voltar para a página inicial */}
    </View>
  );
}
