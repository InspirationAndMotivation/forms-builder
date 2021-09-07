import { NgModule } from '@angular/core';

import { SharedModules } from '../../../shared/shared.modules';
import { AuthPageComponent } from './auth.component';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    SharedModules
  ]
})
export class AuthModule { }
