import React, { useState, useEffect } from 'react';
import logoAlt from '../../assets/images/logo-white.png';
import Button from '../../components/button';
import ProductCard from '../../components/product-card';

import LoadingBounce from '../../components/loading';

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    salePrice: string;
    promotionalPrice: string;
}
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

const Home: React.FC = () => {
  const [products, setProducts] = useState<[Product]>();
  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const response = await fetch('https://frontend-challenge-beginner.herokuapp.com/skus/');
    const data = await response.json();
    setProducts(data);
  }

  return (
    <section className="home">
      <Banner />
      <section className="home__products">
        <div className="home__products__header">
          <div className="home__products__header--title title">Ofertas Exclusivas</div>
          <div className="home__products__header--aside ">ver todos</div>
        </div>
        {products ? (
          <div className="home__products__container">
            {products?.map((product) => (
              <ProductCard
                promotionalPrice={product.promotionalPrice}
                salePrice={product.salePrice}
                imageUrl={product.imageUrl}
                name={product.name}
                id={product.id}
                key={product.id}
              />
            ))}
          </div>
        ) : <LoadingBounce />}
      </section>
    </section>
  );
};

export default Home;
