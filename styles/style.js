import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f5f5f5',
  },
  
  // Cabeçalho
  headerContainer: {
    backgroundColor: '#3E8E41', // Verde mais forte
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center', // Centraliza o conteúdo
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    paddingBottom: 10,  // Reduzido para aproximar os elementos
    borderRadius: 5,  // Bordas arredondadas para suavidade
    marginBottom: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Roboto', 
    textAlign: 'center',// Fonte padrão
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
    fontFamily: 'Roboto',
    textAlign: 'center',// Fonte padrão
  },

  // Banner
  banner: {
    width: '100%',
    height: 120,
    marginBottom: 5,
    borderRadius: 10,
    paddingBottom: 10,  // Reduzido para aproximar os elementos
    borderRadius: 15,  // Bordas arredondadas para suavidade
    
  },

  // Produtos
  produtos: {
    width: '100%',
  },
  
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  produtoImagem: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  produtoNome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  produtoPreco: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  produtoDescricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  // Botões
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Menu
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#8fff8f',
    borderRadius: 5,
    marginBottom: 5,
    paddingBottom: 10,  // Reduzido para aproximar os elementos

  },
  menuBotao: {
    backgroundColor: '#8fff8f',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  menuTexto: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Estilos adicionais para responsividade
  '@media (max-width: 768px)': {
    headerTitle: {
      fontSize: 22,
    },
    headerSubtitle: {
      fontSize: 14,
    },
    produtoImagem: {
      width: 200,
      height: 200,
    },
    produtoNome: {
      fontSize: 18,
    },
    produtoPreco: {
      fontSize: 16,
    },
    produtoDescricao: {
      fontSize: 14,
    },
    card: {
      width: 'auto',
    },
  },

  //link
  link: {
    marginTop: 10, // Deixa o link um pouco mais abaixo no card
    alignItems: 'center',
    marginBottom: 20,
  },
  
  linkText: {
    fontSize: 16,
    color: '#4CAF50', // Cor do texto do link
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Deixa o link sublinhado
    textAlign: 'center',
  }
});
