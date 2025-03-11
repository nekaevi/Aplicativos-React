// src/components/Card.js

import React from 'react';

function Card({ produto }) {
  const { nome, preco, foto } = produto;

  const handleComprar = () => {
    alert('Produto adicionado ao carrinho');
  };

  return (
    <div style={cardStyle}>
      <img src={foto} alt={nome} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <button onClick={handleComprar}>Comprar</button>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

export default Card;
