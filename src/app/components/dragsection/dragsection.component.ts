import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ShareService} from "../../services/share.service";

@Component({
  selector: 'app-dragsection',
  templateUrl: './dragsection.component.html',
  styleUrls: ['./dragsection.component.scss']
})
export class DragsectionComponent implements AfterViewInit, OnInit {

  dragList = [{

  }]

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private ss:ShareService) {

  }

  onDrop(event: CdkDragDrop<any>) {
    debugger;
    this.ss.drop(event);
    debugger;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DragsectionComponent);
    this.container.createComponent(factory);
  }

}