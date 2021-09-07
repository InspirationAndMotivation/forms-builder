import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';

import { LoginAction } from '../../../store/actions/auth.actions';
import { State, getUser } from '../../../store';
import { User } from '../../../interfaces';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  iRegister$: Observable<boolean>;
  user$: Observable<User>;
  public ngUnsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.iRegister$ = this.activatedRoute.queryParams.pipe(map(params => !!params.reg));

    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.store.select(getUser).pipe(
      takeUntil(this.ngUnsubscribe$),
      filter(user => !!user && !!user.token)
    ).subscribe(() => this.router.navigate(['builder']));
  }

  handleSubmitForm(): void {
    this.store.dispatch(new LoginAction(this.form.value));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}


