import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ActionTypes {
  Save = 'SAV',
  Clear = 'CLE',
}

export const Save = createAction(
  '[Form Page] Save',
  props<{ product: ProductModel }>()
);

export const Update = createAction(
  '[Form Page] Update',
  props<{ product: ProductModel, position: number }>()
);

export const Remove = createAction(
  '[Form Page] Clear',
  props<{ product: ProductModel }>()
)
