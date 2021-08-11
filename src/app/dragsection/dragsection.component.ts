import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dragsection',
  templateUrl: './dragsection.component.html',
  styleUrls: ['./dragsection.component.scss']
})
export class DragsectionComponent implements AfterViewInit {

  droppable:object = [];
  draggable:object = [];

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DragsectionComponent);
    this.container.createComponent(factory);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
