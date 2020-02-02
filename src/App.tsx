import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/header';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './components/cart';

const App = () => (
  <>
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
        <footer className="footer" />
      </Router>
    </div>
  </>
);

export default App;
