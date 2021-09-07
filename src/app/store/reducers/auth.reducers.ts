import { User, Error } from '../../interfaces';
import { Actions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  user: User;
  error: Error;
}

const INIT_STATE: State = {
  user: null,
  error: null,
};

export function reducer(state: State = INIT_STATE, action: Actions): State {
  switch (action.type) {
    case AuthActionTypes.LoginRequest:
      return { ...state, user: action.payload, error: null };
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case AuthActionTypes.LoginFailed:
      return { ...state, error: action.payload, user: null };
    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;

const INIT_STATE_REGISTER = {
  register: null,
  error: null,
};

export function reducerRegister(state = INIT_STATE_REGISTER, action: Actions) {
  switch (action.type) {
    case AuthActionTypes.RegisterSuccess:
      return { ...state, register: action.payload };
    case AuthActionTypes.RegisterFailed:
      return { ...state, register: false };
    default:
      return state;
  }
}

export const getRegister = (state) => state.register;
