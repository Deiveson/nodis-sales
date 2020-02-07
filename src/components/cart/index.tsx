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
  imageUrl, name, saleValue, id, removeAllProductItens, removeItem, allQtd, addItem,
}) => (
  <div className="cart__list__item">
    <div className="cart__list__item__info">
      <Icon value="close cursor-pointer" onClick={() => removeAllProductItens(id)} />
      <picture><img src={imageUrl} alt="image" /></picture>
      <span className="title">{name}</span>
    </div>
    <div className="cart__list__item__price">
      <span className="cart__list__item__price--total-itens">
        <Icon value="minus" onClick={() => removeItem(id)} />
        <span>{allQtd[id]}</span>
        <Icon value="plus" onClick={() => addItem(id)} />
      </span>
      R$
      {formatCurrency((saleValue * allQtd[id]).toString())}
    </div>
  </div>
);

class Cart extends Component<CartProps> {
  removeAllProductItens(id, set, allProducts, allQtd, setAllQtd) {
    let prod = allProducts;
    prod = prod.filter((item) => item.id !== id);
    const qtd = allQtd;
    delete qtd[id];
    setAllQtd(qtd);
    set(prod);
  }

  removeItem(id, set, allProducts, allQtd, setAllQtd) {
    let prods = allProducts;
    const qtd = allQtd;
    if (qtd[id] && qtd[id] > 1) {
      setAllQtd({ ...allQtd, [id]: qtd[id] - 1 });
    } else {
      delete qtd[id];
      setAllQtd(qtd);
      prods = prods.filter((item) => item.id !== id);
      set(prods);
    }
  }

  addItem(id, allQtd, setAllQtd) {
    const qtd = allQtd;
    setAllQtd({ ...allQtd, [id]: qtd[id] + 1 });
  }

  renderTotal(allQtd, products): number {
    let total = 0;
    console.log(products);
    products.forEach((item) => {
      total += (item.salePrice * allQtd[item.id]);
    });
    return total;
  }


  render() {
    return (
      <CartContext.Consumer>
        {
          ({
            products, setProducts, show, showCart, allQtd, setAllQtd,
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
                          removeAllProductItens={(id) => this.removeAllProductItens(id, (prod) => setProducts(prod), products, allQtd, setAllQtd)}
                          removeItem={(id) => this.removeItem(id, (prod) => setProducts(prod), products, allQtd, setAllQtd)}
                          allQtd={allQtd}
                          addItem={(id) => this.addItem(id, allQtd, setAllQtd)}
                        />
                      );
                    } return <></>;
                  }
                )}
                </section>
                <section className="cart__footer">
                  <div className="cart__footer--total">
                    <span className="title">Total:</span>
                    <span className="title">
                      R$
                      {formatCurrency(this.renderTotal(allQtd, products).toString())}
                    </span>
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
