import React from 'react';
import logoAlt from '../../assets/images/logo-white.png';
import Button from '../../components/button';

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

const CardProduct: React.FC = () => (
  <div className="card-product">
    <div className="card-product--image">
      <img src="https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg" alt="panela" />
    </div>
    <div className="card-product--name">Panela de Arroz 10 xícaras ML-2900 NKS Milano 220V</div>
  </div>
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
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  </section>
);
export default Home;
