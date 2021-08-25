import { loadComponents, errorComponents } from '../actions/DragAndDropActions';
import { on, createReducer } from '@ngrx/store';
import { DnD } from '../models/dnd.model';

export interface State {
  DnD: { components: DnD[]; error: string };
}

export const initialState: State = {
  DnD: { components: [], error: '' }
};

export const DnDReducers = createReducer(
  initialState,
  on(loadComponents, (state, action) => ({
    ...state,
    components: action.components
  })),
  on(errorComponents, (state, action) => ({
    ...state,
    error: action.message
  }))
);

export const selectComponents = (state: State) => state.DnD.components;

export const selectError = (state: State) => state.DnD.error;
