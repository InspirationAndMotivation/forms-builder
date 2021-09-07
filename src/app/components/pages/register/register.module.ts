import { NgModule } from '@angular/core';
import { SharedModules } from '../../../shared/shared.modules';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModules
  ]
})
export class RegisterModule {}
