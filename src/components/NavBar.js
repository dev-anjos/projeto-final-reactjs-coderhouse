/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './logo.jpg'
import './Menu.css'; // Adicione estilos personalizados se necessário

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <img  className="logo" src={logo}/>
        <div className="container-menu">
            <a href="#">
                <li>Produtos</li>
            </a>
            <a href="#">
                <li>Carrinho</li>
            </a>
            <a href="#">
                <li>Contato</li>
            </a>
        </div>
      
      </ul>
    </nav>
  );
}

export default Menu;
