import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-dropsection',
  templateUrl: './dropsection.component.html',
  styleUrls: ['./dropsection.component.scss']
})
export class DropsectionComponent implements AfterViewInit {
  dropList = [{

  }]

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,
              private ss:ShareService) {

  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DropsectionComponent);
    this.container.createComponent(factory);
  }

  onDrop(event: CdkDragDrop<any>) {
    debugger;
    this.ss.drop(event);
  }
}

