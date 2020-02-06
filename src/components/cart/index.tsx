import React, { Component } from 'react';

import CartContext from '../../contexts/CartContext';

import Icon from '../icon';
import Button from '../button';
import { formatCurrency } from '../util/fnUtils';

export interface ProductCartInterface {
  id: number;
  name: string;
  imageUrl: string;
  salePrice: string;
}

interface CartProps {
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
      {formatCurrency(saleValue)}
    </div>
  </div>
);

class Cart extends Component<CartProps> {
  componentDidMount() {
  }

  removeItem(id, set, allProducts) {
    let prod = allProducts;
    prod = prod.filter((item) => item.id !== id);
    set(prod);
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({
            products, setProducts, show, showCart,
          }) => (
            <aside className={`container-cart ${show ? 'show-background' : ''}`}>
              <div className={`cart ${show ? 'show-cart' : ''}`}>
                <section className="cart__header">
                  <span className="title">Carrinho de Compras</span>
                  <Icon value="close cursor-pointer" onClick={() => showCart(false)} />
                </section>
                <section className="cart__list">
                  {products?.map && products?.map((product) => {
                    if (product.name) {
                      return (
                        <CartItem
                          imageUrl={product.imageUrl}
                          name={product.name}
                          saleValue={product.salePrice}
                          id={product.id}
                          removeItem={(id) => this.removeItem(id, (prod) => setProducts(prod), products)}
                        />
                      );
                    } return <></>;
                  }
                )}
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
          )
        }
      </CartContext.Consumer>
    );
  }
}

export default Cart;
