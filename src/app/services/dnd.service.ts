import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DnDService {
  constructor() {
  }

  getComponents() {
    let components = JSON.parse(<string>window.localStorage.getItem('components'));
    if (components === null) {
      components = [];
    }
    return components;
  }

  updateComponents(toggleTask: DnD, componentsList: any[]) {
    const componentToToggle = toggleTask;
    const components = JSON.parse(<string>window.localStorage.getItem('components'));
    // Implement
  }
}
