import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import LoadingBounce from '../../components/loading';
import { formatCurrency } from '../../components/util/fnUtils';
import Button from '../../components/button';


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

class Product extends Component <RouteProps, MyState> {
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

  render() {
    const {
      data = {
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
            <div className="product__info--title title">{data.name}</div>
            <div className="product__info--description">{data.description}</div>
            <div className="product__info--price">
              R$
              {formatCurrency(data.salePrice)}
            </div>
            <div className="product__info--freight">Frete Grátis</div>
            <div className="product__info--add-cart"><Button color="primary" text="Adicionar ao Carrinho" /></div>
          </div>
        </section>
      );
    } return <LoadingBounce />;
  }
}
export default Product;
