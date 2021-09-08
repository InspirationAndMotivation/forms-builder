import { NgModule } from '@angular/core';
import { SharedModules } from '../../../shared/shared.modules';
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CheckboxComponent } from '../../form-componet/checkbox/checkbox.component';
import { ButtonComponent } from '../../form-componet/button/button.component';
import { InputComponent } from '../../form-componet/input/input.component';
import { TextareaComponent } from '../../form-componet/textarea/textarea.component';
import { SelectComponent } from '../../form-componet/select/select.component';
import { CdkPortalComponent } from './builder.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: CdkPortalComponent
}];

@NgModule({
  declarations: [
    CdkPortalComponent,
    CheckboxComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent],
  imports: [
    SharedModules,
    DragDropModule,
    PortalModule,
    RouterModule.forChild(routes)

  ],
})
export class BuilderModule { }
