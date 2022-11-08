import { createStore, combineReducers } from 'react-redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const configureStore = () => combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(configureStore);

export default store;
