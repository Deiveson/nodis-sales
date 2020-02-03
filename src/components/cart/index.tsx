import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

export interface ProductCartInterface {
  id: number;
  name: string;
  imageUrl: string;
  salePrice: string;
}

interface CartProps {
  products: ProductCartInterface[],
  setProducts(val?): void;
}

const CartItem = ({
  imageUrl, name, saleValue, id, removeItem,
}) => (
  <div className="cart__list__item">
    <div className="cart__list__item--info">
      <Icon value="close cursor-pointer" onClick={() => removeItem(id)} />
      <picture><img src={imageUrl} alt="image" /></picture>
      <span className="title">{name}</span>
    </div>
    <div className="cart__list__item--price">
      R$
      {saleValue}
    </div>
  </div>
);

class Cart extends Component<CartProps> {
  componentDidMount() {
  }

  removeItem(id) {
    let prod = this.props.products;
    prod = prod.filter((item) => item.id !== id);
    this.props.setProducts(prod);
  }

  render() {
    return (
      <aside className="container-cart">
        <div className="cart">
          <section className="cart__header">
            <span className="title">Carrinho de Compras</span>
            <Icon value="close" />
          </section>
          <section className="car__list">
            {this.props.products?.map((product) => (
              <CartItem
                imageUrl={product.imageUrl}
                name={product.name}
                saleValue={product.salePrice}
                id={product.id}
                removeItem={(id) => this.removeItem(id)}
              />
            ))}
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
  }
}

export default Cart;
