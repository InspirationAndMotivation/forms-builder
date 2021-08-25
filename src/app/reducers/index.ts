import { MenuReducer } from './menu-reducer';
// import { dndReducer } from './dnd-reducer';
import { DnDReducers } from './DnDReducers';

export const reducers = {
  menuState: MenuReducer,
  // dnd: dndReducer,
  DnD: DnDReducers
};
