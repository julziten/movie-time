import { createStore } from 'redux';
import { favoriteReducer } from '../reducers/favoriteReducer';

export const store = createStore(
    favoriteReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
