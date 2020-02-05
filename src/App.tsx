import React, { useState, useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
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
  // const [showCart, setShowCart] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const prods = JSON.parse(localStorage.getItem('nodis-cart') || JSON.stringify(initialProducts));
    setProducts(prods);
  };

  const setLocalProducts = (value) => {
    const prods = JSON.stringify(value || initialProducts);
    localStorage.setItem('nodis-cart', prods);
    getProducts();
  };

  return (
    <>
      <Cart products={products} setProducts={(val) => setLocalProducts(val)} />
      <Router history={history}>
        <div className="app">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/produto/:id" component={(props) => <Product products={products} setProducts={(val) => setLocalProducts(val)} {...props} />} />
              <Route component={Home} />
            </Switch>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
