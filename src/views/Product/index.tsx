import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import LoadingBounce from '../../components/loading';
import { formatCurrency } from '../../components/util/fnUtils';
import Button from '../../components/button';
import { ProductCartInterface } from '../../components/cart';


async function loadProducts(id, call) {
  const response = await fetch(`https://frontend-challenge-beginner.herokuapp.com/skus/${id}`);
  const data = await response.json();
  call(data);
}
interface ProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  salePrice: string;
  promotionalPrice: string;
}
interface MyState {
  data: ProductInterface,
}

interface Props {
  products: ProductCartInterface[],
  setProducts(val?): void;
}

type AllProps = RouteProps & Props

class Product extends Component <AllProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 0, name: '', imageUrl: '', description: '', salePrice: '', promotionalPrice: '',
      },
    };
  }

  componentDidMount(): void {
    loadProducts(this.props.match.params.id, (res) => this.setState({ data: res }));
  }

  setProduct(id, name, imageUrl, salePrice) {
    const prod = this.props.products;
    this.props.setProducts(prod.push({
      id, name, salePrice, imageUrl,
    }));
  }

  render() {
    const {
      data = {
        id: 0,
        imageUrl: '',
        name: '',
        description: '',
        salePrice: '',
      },
    } = this.state;
    if (data.imageUrl) {
      return (
        <section className="product">
          <div className="product__image">
            <img src={data.imageUrl} alt={data.imageUrl} />
          </div>
          <div className="product__info">
            <div className="product__info__top">
              <div className="product__info__top--title title">{data.name}</div>
              <div className="product__info__top--description"><p>{data.description}</p></div>
            </div>
            <div className="product__info__bottom">
              <div className="product__info__bottom--price">
                R$
                {formatCurrency(data.salePrice)}
              </div>
              <div className="product__info__bottom--freight">Frete Grátis</div>
              <div className="product__info__bottom--add-cart"><Button onClick={() => this.setProduct(data.id, data.name, data.imageUrl, data.salePrice)} color="primary" text="Adicionar ao Carrinho" /></div>
            </div>
          </div>
        </section>
      );
    } return <LoadingBounce />;
  }
}
export default Product;
