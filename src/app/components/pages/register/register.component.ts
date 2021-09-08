import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterAction } from '../../../store/actions/auth.actions';
import { State, getUser, getReg } from '../../../store';
import { filter, map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isInvalid: boolean = false;
  formRegister: FormGroup;
  iRegister$: Observable<boolean>;


  constructor(private store: Store<State>,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.iRegister$ = this.activatedRoute.queryParams.pipe(map(params => !!params.reg));

    this.formRegister = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }

  handleSubmit(): void {
    this.isInvalid = false;

    if (!this.formRegister.valid) {
      this.isInvalid = true;
      return;
    }

    this.store.dispatch(new RegisterAction(this.formRegister.value));
    const register$ = this.store.select(getReg);

    register$.pipe(
      filter(v => !!v),
      take(1),
      tap(() => this.router.navigate(['register'], { queryParams: { reg: true } }))
    ).subscribe();
  }
}
