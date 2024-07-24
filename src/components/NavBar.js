import React from 'react';

import './Menu.css'; // Adicione estilos personalizados se necessário

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Carrinho</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}

export default Menu;
