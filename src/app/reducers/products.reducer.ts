import { ProductModel } from '../models/product.model';

import { createReducer, on } from '@ngrx/store';
import { Save, Remove, Update } from '../actions/products.action';

export const products: ProductModel[] = [];

const _productsReducer = createReducer(
  products,
  on(Save, (state: any, { product }) => {
    state = [...state, product];
    return state;
  }),
  on(Update, (state: any, { product, position }) => {
    var prevProducts = [...state];
    prevProducts[position] = product;
    state = prevProducts;
    return state;
  }),
  on(Remove, (state: any, { product }) => {
    const index = state.indexOf(product);
    var prevProducts = [...state];
    prevProducts.splice(index, 1);
    state = prevProducts;
    return state;
  })
);

export function productsReducer(state, action) {
  return _productsReducer(state, action);
}
