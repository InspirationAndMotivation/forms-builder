import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getComponents, updateComponents } from '../actions/DragAndDropActions';
import { switchMap, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DnDService } from '../services/dnd.service';

@Injectable()
export class DnDEffect {
  constructor(
    private actions: Actions,
    private dndService: DnDService) {}

  loadComponents$ = createEffect(() =>
    this.actions.pipe(
      ofType(getComponents),
      switchMap(action => {
        const componentsLoaded = this.dndService.getComponents();
        return of({ type: '[d-n-d] load components', components: componentsLoaded });
      }),
      catchError(error => of({ type: '[d-n-d] error component', message: error }))
    )
  );

  updateComponents$ = createEffect(() =>
      this.actions.pipe(
        ofType(updateComponents),
        switchMap(action => {
          this.dndService.updateComponents(action.toggle, action.components);
          const componentsLoaded = this.dndService.getComponents();
          return of({ type: '[d-n-d] update components', components: componentsLoaded });
        }),
        catchError(error => of({ type: '[d-n-d] error component', message: error }
        ))
      ),
    { dispatch: false }
  );

}
