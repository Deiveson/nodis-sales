import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import LoadingBounce from '../../components/loading';
import { formatCurrency } from '../../components/util/fnUtils';
import Button from '../../components/button';
import { ProductCartInterface } from '../../components/cart';


// async function loadProducts(id, call) {
//   const response = await fetch(`https://frontend-challenge-beginner.herokuapp.com/skus/${id}`);
//   const data = await response.json();
//   call(data);
// }

function loadProducts(id, call, load) {
  load();
  fetch(`https://frontend-challenge-beginner.herokuapp.com/skus/${id}`).then(
    (res) => {
      if (res.ok) {
        res.json().then((data) => {
          call(data);
          load();
        });
      } else console.log('erro');
    },
  ).catch((err) => {
    console.log(err.message);
  });
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
  loading: boolean
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
      loading: false,
    };
  }

  componentDidMount(){
    loadProducts(this.props.match.params.id, (res) => this.setState({ data: res }),
      () => this.setState((state) => ({ loading: !state.loading })));
  }

  setProduct(id, name, imageUrl, salePrice) {
    const prod = this.props.products;
    prod.push({
      id, name, salePrice, imageUrl,
    });
    this.props.setProducts(prod);
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
      loading = false,
    } = this.state;
    if (!loading) {
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
