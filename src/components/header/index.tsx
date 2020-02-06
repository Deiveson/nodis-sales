import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import Icon from '../icon';
import CartContext from '../../contexts/CartContext';
import history from '../../history';

const Header: React.FC = () => {
  const { showCart, products } = useContext(CartContext);
  return (
    <header className="header">
      <picture className="header__logo cursor-pointer" onClick={() => history.push('/')}>
        <img src={Logo} alt="Logo" />
      </picture>
      <nav className="header__nav">
        <ul>
          <li onClick={() => { history.push('/'); }}>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
        </ul>
        <ul>
          <li>Conta</li>
          <li className="header__nav--cart" onClick={() => showCart(true)}>
            <span><Icon value="basket-loaded" /></span>
            {products && products?.length > 0 ? <span className="badge-count">{products?.length}</span> : <></>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
