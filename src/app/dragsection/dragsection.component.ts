import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dragsection',
  templateUrl: './dragsection.component.html',
  styleUrls: ['./dragsection.component.scss']
})
export class DragsectionComponent implements AfterViewInit {

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DragsectionComponent);
    this.container.createComponent(factory);
  }
}
