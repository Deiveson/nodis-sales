import React from 'react';
import Icon from '../icon';
import Button from '../button';

const Cart = () => (
  <aside className="container-cart">
    <div className="cart">
      <section className="cart__header">
        <span className="title">Carrinho de Compras</span>
        <Icon value="close" />
      </section>
      <section className="car__list">
        <div className="cart__list__item">
          <div className="cart__list__item--info">
            <Icon value="close" />
            <picture><img src="https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg" alt="image" /></picture>
            <span className="title">Jogo Game Of Life Meu Malvado Favorito - Hasbro</span>
          </div>
          <div className="cart__list__item--price">
            R$122,00
          </div>
        </div>
        <div className="cart__list__item">
          <div className="cart__list__item--info">
            <Icon value="close" />
            <picture><img src="https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg" alt="image" /></picture>
            <span className="title">Jogo Game Of Life Meu Malvado Favorito - Hasbro</span>
          </div>
          <div className="cart__list__item--price">
            R$122,00
          </div>
        </div>
      </section>
      <section className="cart__footer">
        <div className="cart__footer--total">
          <span className="title">Total:</span>
          <span className="title">R$84,00</span>
        </div>
        <Button color="primary" text="comprar" />
      </section>
    </div>
  </aside>
);

export default Cart;
