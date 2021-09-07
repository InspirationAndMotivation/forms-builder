import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCore from './reducers/auth.reducers';
import * as fromFields from './reducers/components.reducers';
import * as fromStyle from './reducers/components-style.reducers';
import * as fromGeneralStyle from './reducers/general-style.reducers';

export interface State {
  core: fromCore.State;
  fieldsInput: any;
  styleInput: any;
  reg: any;
  styleGeneral: object;
}

export const reducers: ActionReducerMap<State> = {
  reg: fromCore.reducerRegister,
  core: fromCore.reducer,
  fieldsInput: fromFields.reducerFields,
  styleInput: fromStyle.reduserStyle,
  styleGeneral: fromGeneralStyle.reducerGeneralStyle,
};

export const getCoreState = (state: State) => state.core;
export const getFieldsState = (state: State) => state.fieldsInput;
export const getStyleState = (state: State) => state.styleInput;
export const getRegState = (state: State) => state.reg;
export const getGeneralStyleState = (state: State) => state.styleGeneral;

export const getUser = createSelector(getCoreState, fromCore.getUser);
export const getFields = createSelector(getFieldsState, fromFields.getFields);
export const getStyle = createSelector(getStyleState, fromStyle.getStyle);
export const getReg = createSelector(getRegState, fromCore.getRegister);
export const getGeneralStyle = createSelector(
  getGeneralStyleState,
  fromGeneralStyle.getGeneralStyle
);
