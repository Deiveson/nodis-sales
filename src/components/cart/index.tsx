import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Product } from '../../store/ducks/cart/types';
import * as CartActions from '../../store/ducks/cart/actions';

import Icon from '../icon';
import Button from '../button';

interface StateProps {
  products: Product[]
}

interface DispatchProps {
  addProduct(): void;
  removeProduct(): void
  showCart(): void
  hideCart(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps

const CartItem = () => (
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
);

class Cart extends Component<Props> {
  componentDidMount() {
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
            <CartItem />
            <CartItem />
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

const mapStateToProps = (state: ApplicationState) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps)(Cart);
