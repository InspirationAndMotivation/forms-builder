import { Component,
          ViewChild,
          ViewContainerRef,
          ElementRef
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-application';

  @ViewChild('container',  {read: ViewContainerRef, static: false}) container;
  sectionContent;

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.sectionContent = new ComponentPortal(this.container);
  }
}
