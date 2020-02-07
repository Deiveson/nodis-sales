import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import Icon from '../icon';
import CartContext from '../../contexts/CartContext';
import history from '../../history';

const Header: React.FC = () => {
  const { showCart, allQtd } = useContext(CartContext);
  const renderCountProducts = (): number => {
    if (allQtd) {
      const total = Object.values(allQtd);
      const val: number = total.reduce((acc:number, cur: any) => acc + cur, 0);
      return val;
    }
    return 0;
  };
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
            {allQtd && Object.entries(allQtd).length > 0 ? <span className="badge-count">{renderCountProducts()}</span> : <></>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
