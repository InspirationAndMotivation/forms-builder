import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RegisterAction } from '../../../store/actions/auth.actions';
import { State, getUser, getReg } from '../../../store';
import { User } from '../../../interfaces';
import { filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isInvalid: boolean = false;
  formRegister: FormGroup;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
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
      tap(() => this.router.navigate([''], { queryParams: { reg: true } }))
    ).subscribe();
  }
}
