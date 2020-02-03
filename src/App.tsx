import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/header';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './components/cart';


const App = () => (

  <>
    <Cart products={localStorage.getItem('nodis-cart') || []} setProducts={(val) => localStorage.setItem('nodis-cart', val)} />
    <div className="app">
      <Router history={history}>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/produto/:id" component={(props) => <Product products={localStorage.getItem('nodis-cart') || []} setProducts={(val) => localStorage.setItem('nodis-cart', val)} {...props} />} />
            <Route component={Home} />
          </Switch>
        </main>
        <footer className="footer" />
      </Router>
    </div>
  </>
);

export default App;
