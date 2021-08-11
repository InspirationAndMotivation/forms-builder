import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dropsection',
  templateUrl: './dropsection.component.html',
  styleUrls: ['./dropsection.component.scss']
})
export class DropsectionComponent implements AfterViewInit {

  droppable:object = [];
  draggable:object = [];

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DropsectionComponent);
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

