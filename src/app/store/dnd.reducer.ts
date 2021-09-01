import {actionsTypes, ComponentsActions, EditStyle} from "./dnd.action";

export interface State {
  id: number;
  type: string;
  styles: {
    color: string;
    fontSize: string;
    fontWeight: string;

    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    borderWidth: string;

    width: string;
    height: string;
    backgroundColor: string;
  };
}

export const initialState: State = {
  id: 0;
  type: 'input';
  styles: {
    color: 'red';
    fontSize: '32px';
    fontWeight: 'bold';

    borderStyle: 'solid';
    borderColor: 'black';
    borderRadius: '15px';
    borderWidth: '1px';

    width: '150px';
    height: '200px';
    backgroundColor: 'white';
};

export const dndReducer = (
  initialState,
  on(ComponentsActions, EditStyle, (state)) => {

  }
};
