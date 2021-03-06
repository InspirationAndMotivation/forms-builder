import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StylesService {
  allStyle = {
    button: null,
    input: null,
    textarea: null,
    select: null,
    checkbox: null,
  };

  arrAllStyle = [];

  removedControl = new Subject<string>();

  addStyleBtn(styleItem): void {
    this.allStyle.button = styleItem;
    const entMiddl = Object.entries(this.allStyle);
    this.arrAllStyle[0] = entMiddl;
    // this.ent = entMiddl; not work???
  }
  addStyleCheckbox(styleItem): void {
    this.allStyle.checkbox = styleItem;
    const entMiddl = Object.entries(this.allStyle);
    this.arrAllStyle[0] = entMiddl;
  }

  addStyleInput(styleItem): void {
    this.allStyle.input = styleItem;
    const entMiddl = Object.entries(this.allStyle);
    this.arrAllStyle[0] = entMiddl;
  }

  addStyleSelect(styleItem): void {
    this.allStyle.select = styleItem;
    const entMiddl = Object.entries(this.allStyle);
    this.arrAllStyle[0] = entMiddl;
  }
  addStyleTextarea(styleItem): void {
    this.allStyle.textarea = styleItem;
    const entMiddl = Object.entries(this.allStyle);
    this.arrAllStyle[0] = entMiddl;
  }

  getAllStyles(): Observable<any> {
    return of(this.arrAllStyle);
  }
  isRemovedControlService(control): void {
    this.removedControl.next(control);
  }

}
