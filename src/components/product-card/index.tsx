import React, { useMemo } from 'react';
import history from '../../history';
import { formatCurrency } from '../util/fnUtils';

interface Props {
    id: number;
    name: string;
    imageUrl: string;
    salePrice: string;
    promotionalPrice: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const {
    name = '', imageUrl = '', salePrice = '', promotionalPrice = '', id = null,
  } = props;
  return (
    <div className="product-card" tabIndex={1} onClick={() => history.push(`/produto/${id}`)}>
      <div className="product-card__image">
        <img src={imageUrl} alt="panela" />
      </div>
      <div className="product-card__name">{name}</div>
      <div className="product-card__price">
        <span>
          R$
          {' '}
          {useMemo(() => formatCurrency(salePrice), [salePrice])}
        </span>
        <span className="product-card__price--promotional">
          R$
          {' '}
          {useMemo(() => formatCurrency(promotionalPrice), [promotionalPrice])}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
