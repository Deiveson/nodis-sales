// Actions Types

export enum CartTypes {
  ADD_PRODUCT = '@cart/ADD_PRODUCT',
  REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT',
  SHOW_CART = '@cart/SHOW_CART',
  HIDE_CART = '@cart/HIDE_CART',
}

export interface Product {
    id: number;
    name: string;
    saleValue: string;
    imageUrl: string;
}

export interface CartState {
    readonly data: Product[];
    readonly show: boolean;
}
