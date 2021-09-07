import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { of, Observable, iif } from 'rxjs';

import { AuthServices } from '../../shared/services/auth.service';
import { AuthActionTypes,
  LoginSuccessAction,
  LoginFailedAction,
  RegisterSuccessAction } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthServices
  ) {}

  onLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.LoginRequest),
      map((action: any) => action.payload),
      switchMap((action: any) => this.auth.getUser(action)),
      mergeMap((current: any) => iif(() => current.email,
        of(new LoginSuccessAction(current)), this.loginFail()))
    );
  }
  );

  $onRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.RegisterRequest),
      map((action: any) => action.payload),
      switchMap((credentials) => {
        return this.auth.registerUserRequest(credentials);
      }),
      mergeMap((user) => {
        return of(new RegisterSuccessAction(user));
      })
    )
  );

  loginFail(): Observable<LoginFailedAction> {
    return of(
      new LoginFailedAction({
        code: 404,
        message: 'Invalid login',
      })
    );
  }
}
