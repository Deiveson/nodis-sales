import { Reducer } from 'redux';

import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  data: [],
  show: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_PRODUCT:
      return { ...state, data: action.product };
    case CartTypes.REMOVE_PRODUCT:
      return { ...state, data: action.product };
    case CartTypes.SHOW_CART:
      return { ...state, show: true };
    case CartTypes.HIDE_CART:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default reducer;
