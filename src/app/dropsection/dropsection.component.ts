import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dropsection',
  templateUrl: './dropsection.component.html',
  styleUrls: ['./dropsection.component.scss']
})
export class DropsectionComponent implements AfterViewInit {

  @ViewChild('container') container!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    const factory = this.cfr.resolveComponentFactory(DropsectionComponent);
    this.container.createComponent(factory);
  }
}
