import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';  // Importe o Link do expo-router
import styles from '../styles/style';
import Card from '../components/Card';
import Menu from '../components/Menu';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Roda para Hamster',
      preco: 'R$ 50,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-qzqKaLlkgsQ-n7myR9ncuPPhnAaW_6QHQ&s',
    },
    {
      id: 2,
      nome: 'Casa de Hamster',
      preco: 'R$ 80,00',
      foto: 'https://cdn.awsli.com.br/2500x2500/203/203612/produto/203580080/609-pmnvry.jpg',
    },
    {
      id: 3,
      nome: 'Comida Premium',
      preco: 'R$ 30,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI4hGKKzNRM8DIB556PXkApk4MjNwXYiZUQ&s',
    },
    {
      id: 4,
      nome: 'Brinquedo Interativo',
      preco: 'R$ 20,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfNXeg-TPdnw_x_Ho0KyNZt9nhGDrq8ymDQ&s',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Loja de Artigos para Hamsters</Text>
        <Text style={styles.headerSubtitle}>Tudo o que seu hamster precisa, em um só lugar!</Text>
      </View>

      <Image
        source={{ uri: 'https://t3.ftcdn.net/jpg/04/33/46/80/360_F_433468089_g77Yu2snnclhBKpbSuMLtiuAwqoDOoOv.jpg' }}
        style={styles.banner}
        resizeMode="contain"
      />
      <Menu />

      <View style={styles.produtos}>
        {produtos.map((produto) => (
          <View key={produto.id}>
            <Card produto={produto} />
            <Link href={`/productdetail/product${produto.id}`} style={styles.link}>
              <Text style={styles.linkText}>Ver Detalhes</Text>
            </Link>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
