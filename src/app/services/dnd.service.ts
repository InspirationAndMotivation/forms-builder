import { Injectable } from '@angular/core';
import { DnD } from '../models/dnd.model';

@Injectable({
  providedIn: 'root'
})
export class DnDService {
  constructor() {}

  getComponents() {
    let components = JSON.parse(window.localStorage.getItem('components'));
    if (components === null) {
      components = [];
    }
    return components;
  }

  updateComponents(toggleTask, componentsList) {
    const componentToToggle = toggleTask;
    const components = JSON.parse(window.localStorage.getItem('components'));
    const saved = components.filter(item => {
      componentsList.filter(component => {
        if (item.id === component.id) {
          if (item.id === componentToToggle.id) {
            item.done = componentToToggle.done;
          }
          item.order = component.order;
          item.description = component.description;
          item.id = component.id;
        }
      });
      return item;
    });
    window.localStorage.setItem('components', JSON.stringify(saved));
  }
}
