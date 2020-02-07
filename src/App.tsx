import React, { useState, useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
import history from './history';

import CartContext from './contexts/CartContext';
import Header from './components/header';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './components/cart';
import Footer from './components/footer';

const initialProducts = [{
  id: 0, name: '', imageUrl: '', salePrice: '',
}];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showCart, setShowCart] = useState(false);
  const [allQtd, setAllQtd] = useState({});
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    getProducts();
    getAllqtd();
  }, []);

  const getProducts = () => {
    const prods = JSON.parse(localStorage.getItem('nodis-cart') || JSON.stringify([]));
    setProducts(prods);
  };

  const setLocalProducts = (value) => {
    const prods = JSON.stringify(value || initialProducts);
    localStorage.setItem('nodis-cart', prods);
    setProducts(value);
    forceUpdate();
  };
  const getAllqtd = () => {
    const qtd = JSON.parse(localStorage.getItem('nodis-cart-qtd') || JSON.stringify({}));
    setAllQtd(qtd);
  };

  const setQtd = (value) => {
    const prods = JSON.stringify(value || {});
    localStorage.setItem('nodis-cart-qtd', prods);
    setAllQtd(value);
    forceUpdate();
  };

  return (
    <CartContext.Provider value={{
      products,
      setProducts: (prod) => { setLocalProducts(prod); },
      show: showCart,
      showCart: (status) => { setShowCart(status); },
      allQtd,
      setAllQtd: (qtd) => { setQtd(qtd); },
    }}
    >
      <Cart />
      <div className="app">
        <Router history={history}>
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/produto/:id" component={Product} />
              <Route component={Home} />
            </Switch>
          </main>
        </Router>
      </div>
      <Footer />
    </CartContext.Provider>
  );
};

export default App;
