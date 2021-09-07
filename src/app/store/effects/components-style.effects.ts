import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap, filter, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';

import {
  ActionStyleField,
  ActionStyle,
  RemoveStyleAction,
} from '../actions/components-style.actions';

@Injectable()
export class EffectsSteleFields {
  constructor(private actions$: Actions) { }
}
