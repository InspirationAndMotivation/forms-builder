import {actionsTypes, ComponentsActions} from "./DnDAction";

export const initialState: any = {
  elements: []
};

export const DnDReducer = (state = initialState, action: ComponentsActions): any => {
  switch (action.type) {
    case actionsTypes.addComponent:
      return {...state, elements: [...state.elements, action.payload]};
    case actionsTypes.deleteComponent:
      return state;
    case actionsTypes.editStyle:
      return state;
    default:
      return state;
  }
};
