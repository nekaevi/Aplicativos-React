import React from 'react';
import Card from './components/Card';
import Menu from './components/menu';
import './styles/style.css';  

function App() {
  const produtos = [
    {
      nome: 'Roda para Hamster',
      preco: '50,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-qzqKaLlkgsQ-n7myR9ncuPPhnAaW_6QHQ&s',
    },
    {
      nome: 'Casa de Hamster',
      preco: '80,00',
      foto: 'https://cdn.awsli.com.br/2500x2500/203/203612/produto/203580080/609-pmnvry.jpg',
    },
    {
      nome: 'Comida Premium',
      preco: '30,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI4hGKKzNRM8DIB556PXkApk4MjNwXYiZUQ&s',
    },
    {
      nome: 'Brinquedo Interativo',
      preco: '20,00',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfNXeg-TPdnw_x_Ho0KyNZt9nhGDrq8ymDQ&s',
    },
  ];

  return (
    <div>
      <header style={headerStyle}>
        <h1>Loja de Artigos para Hamsters</h1>
        <p>Encontre tudo para o seu hamster!</p>
        <img
          src="https://t3.ftcdn.net/jpg/04/33/46/80/360_F_433468089_g77Yu2snnclhBKpbSuMLtiuAwqoDOoOv.jpg"
          alt="Promoção"
          style={bannerStyle}
        />
      </header>

      <Menu />

      <div id="produtos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {produtos.map((produto, index) => (
          <Card key={index} produto={produto} />
        ))}
      </div>
    </div>
  );
}

const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

const bannerStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '10px',
};

export default App;