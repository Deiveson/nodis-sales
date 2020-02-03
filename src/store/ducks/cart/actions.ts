import { action } from 'typesafe-actions';
import { CartTypes, Product } from './types';

export const addProduct = (product: Product) => action(CartTypes.ADD_PRODUCT, product);
export const removeProduct = (id: boolean) => action(CartTypes.REMOVE_PRODUCT, id);
export const showCart = () => action(CartTypes.SHOW_CART);
export const hideCart = () => action(CartTypes.HIDE_CART);
