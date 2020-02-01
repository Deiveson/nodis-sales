import React from 'react';
import Banner from '../../assets/images/banner.png';

const Home: React.FC = () => (
  <section className="home">
    <section className="home__banner"><img src={Banner} alt="banner" /></section>
  </section>
);

export default Home;
