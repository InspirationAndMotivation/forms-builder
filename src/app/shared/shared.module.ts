import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggingDirective } from './dragging.directive';



@NgModule({
  declarations: [
    DraggingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [DraggingDirective],
})
export class SharedModule { }
