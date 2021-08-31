import {Action} from '@ngrx/store';
import {Properties} from '../interfaces';

export enum actionsTypes {
  addComponent = '[COMPONENT] add component',
  deleteComponent = '[COMPONENT] del component',
  editStyle = '[COMPONENT] edit component`s style'
}

export class AddComponentAction implements Action {
  readonly type = actionsTypes.addComponent;

  constructor(public payload: Properties) {
  }
}

export class DeleteComponentAction implements Action {
  readonly type = actionsTypes.deleteComponent;

  constructor(public id: number) {
  }
}

export class EditStyle implements Action {
  readonly type = actionsTypes.editStyle;

  constructor(public payload: { id: number, character: string, value: any }) {
  }
}

export type ComponentsActions = AddComponentAction | DeleteComponentAction | EditStyle;
