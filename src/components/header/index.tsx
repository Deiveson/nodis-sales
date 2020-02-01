import React from 'react';
import Logo from '../../assets/images/logo.png';
import Icon from '../icon';

const Header: React.FC = () => (
  <header className="header">
    <div className="header__logo">
      <img src={Logo} alt="Logo" />
    </div>
    <nav className="header__nav">
      <ul>
        <li>Home</li>
        <li>Produtos</li>
        <li>Sobre</li>
      </ul>
      <ul>
        <li>Conta</li>
        <li className="header__nav--cart">
          <span><Icon value="basket-loaded" /></span>
          <span className="badge-count">2</span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
