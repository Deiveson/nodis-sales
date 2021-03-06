import { createContext } from 'react';

import { ProductCartInterface } from '../components/cart';

interface CartInterface {
    products?:ProductCartInterface[];
    setProducts?: any;
    show?: boolean;
    showCart?: any;
    allQtd?: any;
    setAllQtd?: any;
}

const CartContext = createContext<CartInterface>({
  products: [],
});

export default CartContext;
