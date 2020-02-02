import React from 'react';
import logoAlt from '../../assets/images/logo-white.png';
import Button from '../../components/button';
import ProductCard from '../../components/product-card';

const Banner: React.FC = () => (
  <section className="home__banner">
    <div className="home__banner--text">
            Produtos de marketplace em lojas físicas!?
      <div className="home__banner--button">
        <Button color="white" text="Saiba Mais" />
      </div>
    </div>
    <div className="home__banner--logo"><img src={logoAlt} alt="logo-alt" /></div>
  </section>
);

const Home: React.FC = () => (
  <section className="home">
    <Banner />
    <section className="home__products">
      <div className="home__products__header">
        <div className="home__products__header--title title">Ofertas Exclusivas</div>
        <div className="home__products__header--aside ">ver todos</div>
      </div>
      <div className="home__products__container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  </section>
);
export default Home;
