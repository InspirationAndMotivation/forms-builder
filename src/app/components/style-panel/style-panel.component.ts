import {Component, AfterViewInit, ViewChildren, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { getGeneralStyle } from '../../store';
import { StylesService } from '../../shared/services/styles.service';
import { getStyle } from '../../store';
import { ChangeStyleAction, RemoveStyleAction } from '../../store/actions/components-style.actions';
import { ChangeStyleGeneralAction } from '../../store/actions/general-style.actions';
import { valueDefault } from '../../shared/value.sheets';
import { GeneralStyle } from '../../interfaces';

enum EAttribute {
  Placeholder = 'placeholder',
  Required = 'required',
  SelectValue = 'selectvalue',
  SelectName = 'selectname'
}

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.scss'],
})
export class StylePanelComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private store: Store, private styleServices: StylesService) { }

  panelOpenState: boolean;
  fieldsIsRenered: string[];
  subGenStyle: Subscription;
  arrStyleEntreis$: Observable<Array<object>>;
  formGeneralStyle: FormGroup;
  generalStyle: GeneralStyle;

  submitFormGeneralStyle(): void {
    this.store.dispatch(new ChangeStyleGeneralAction(this.formGeneralStyle.value));
  }

  ngOnInit() {

    this.subGenStyle = this.store.select(getGeneralStyle).pipe().subscribe(next.bind(this));

    function next(styles) {
      this.generalStyle = styles;
      const {
        stylesGeneral: { backgroundColor, height, width, border },
        stylesGeneralInner: { backgroundColor: backgroundColorInner },
      } = this.generalStyle;

      this.formGeneralStyle = new FormGroup({
        stylesGeneral: new FormGroup({
          backgroundColor: new FormControl(backgroundColor),
          height: new FormControl(height),
          width: new FormControl(width),
          border: new FormControl(border),
        }),
        stylesGeneralInner: new FormGroup({
          backgroundColor: new FormControl(backgroundColorInner),
        }),
      });
    }
  }

  delProperty(e, prop) {

    this.styleServices.isRemovedControlService(prop);
    this.store.dispatch(new RemoveStyleAction(prop));
  }

  changeProperty(e, nameInput, formElement) {
    const data: object = {};
    const currentValue: any = { ...valueDefault };
    const formData = new FormData(formElement);
    const arrForSelect: Array<any> = [];

      formData.forEach((value, name) => {
        switch (name) {
          case EAttribute.Required:
          case EAttribute.Placeholder:
            currentValue[name] = value;
            return
          case EAttribute.SelectValue:
          case EAttribute.SelectName:
            arrForSelect.push(value);
            currentValue.select = arrForSelect;
            return
          default:
            data[name] = value;
        }
      });

      this.store.dispatch(
        new ChangeStyleAction({ data, nameInput, currentValue })
      );
  }

  @ViewChildren('formnative') formnative;

  objectEntriesStyles(v) {
    return Object.entries(v);
  }

  ngAfterViewInit() {
    this.arrStyleEntreis$ = this.store.select(getStyle);
  }

  ngOnDestroy() {
    this.subGenStyle.unsubscribe();
  }

}
