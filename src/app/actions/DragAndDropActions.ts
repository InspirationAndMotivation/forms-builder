import { createAction, props } from '@ngrx/store';
import { DnD } from '../models/dnd.model';

export const getComponents = createAction('[d-n-d] get components');

export const loadComponents = createAction(
  '[d-n-d] load components',
  props<{ components: DnD[] }>()
);

export const updateComponents = createAction(
  '[d-n-d] update components',
  props<{ toggle: DnD, components: DnD[] }>()
);

export const errorComponents = createAction(
  '[d-n-d] error component',
  props<{ message: string }>()
);
