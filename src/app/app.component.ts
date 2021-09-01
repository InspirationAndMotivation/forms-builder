import {Component, HostListener} from '@angular/core';
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-application';
  menuOpen?: boolean;

  constructor(private store: Store<any>) {
    store.pipe(select('menuState')).subscribe(menuOpen => {
      this.menuOpen = menuOpen;
    });
  }

  @HostListener('document:click', ['$event'])

  public onClick(event: any) {
/*    const isOutside = !event.target.className.includes('menu-button') &&
      !event.target.className.includes('material-icons') &&
      !event.target.className.includes('mat-drawer-inner-container')
    if (isOutside) {
      this.menuOpen = false;
      this.store.dispatch({ type: SET_MENU_STATE, payload: this.menuOpen });
    }*/
  }
}
