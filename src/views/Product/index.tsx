import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import LoadingBounce from '../../components/loading';
import { formatCurrency } from '../../components/util/fnUtils';
import Button from '../../components/button';
import CartContext from '../../contexts/CartContext';


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

class Product extends Component <RouteProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: 0, name: '', imageUrl: '', description: '', salePrice: '', promotionalPrice: '',
      },
      loading: false,
    };
  }

  componentDidMount() {
    loadProducts(this.props.match.params.id, (res) => this.setState({ data: res }),
      () => this.setState((state) => ({ loading: !state.loading })));
  }

  setProduct(data, allProducts, setProducts) {
    const prod = allProducts;
    prod.push({
      id: data.id, name: data.name, salePrice: data.salePrice, imageUrl: data.imageUrl,
    });
    setProducts(prod);
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
        <CartContext.Consumer>
          {({ products, setProducts }) => (
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
                  <div className="product__info__bottom--add-cart"><Button onClick={() => this.setProduct(data, products, (prods) => setProducts(prods))} color="primary" text="Adicionar ao Carrinho" /></div>
                </div>
              </div>
            </section>
          )}
        </CartContext.Consumer>
      );
    } return <LoadingBounce />;
  }
}
export default Product;
