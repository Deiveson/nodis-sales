import React from 'react';
import Header from './components/header';
import Home from './views/Home';

const App = () => (
  <div className="app">
    <Header />
    <main className="main">
    <Home />
    </main>
    <footer className="footer" />
  </div>
);

export default App;
