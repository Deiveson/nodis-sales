import React from 'react';
import logoAlt from '../../assets/images/logo-white.png';
import Button from '../../components/button';

const Home: React.FC = () => (
  <section className="home">
    <section className="home__banner">
      <div className="home__banner--text">
        Produtos de marketplace em lojas físicas!?
        <div className="home__banner--button">
          <Button color="white" text="Saiba Mais" />
        </div>
      </div>
      <div className="home__banner--logo"><img src={logoAlt} alt="logo-alt" /></div>
    </section>
  </section>
);

export default Home;
