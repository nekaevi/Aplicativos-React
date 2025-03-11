import React from 'react';

function Menu() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 15px' }}><a href="#produtos">Produtos</a></li>
        <li style={{ margin: '0 15px' }}><a href="#acessorios">Acessórios</a></li>
        <li style={{ margin: '0 15px' }}><a href="#comida">Comida</a></li>
        <li style={{ margin: '0 15px' }}><a href="#brinquedos">Brinquedos</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
