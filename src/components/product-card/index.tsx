import React from 'react';
import { formatCurrency } from '../util/fnUtils';

const ProductCard: React.FC = () => (
  <div className="product-card">
    <div className="product-card__image">
      <img src="https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg" alt="panela" />
    </div>
    <div className="product-card__name">Panela de Arroz 10 xícaras ML-2900 NKS Milano 220V</div>
    <div className="product-card__price">
      <span>
        R$
        {' '}
        {formatCurrency('8400')}
      </span>
      <span className="product-card__price--promotional">
        R$
        {' '}
        {formatCurrency('9000')}
      </span>
    </div>
  </div>
);

export default ProductCard;
