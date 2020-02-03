import { createStore, Store } from 'redux';
import { CartState } from './ducks/cart/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    cart: CartState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
