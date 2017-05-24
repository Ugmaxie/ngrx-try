/* tslint:disable:member-ordering */

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AppService, GuestService } from '../shared';
import { TodoActions } from '../actions/actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions,
              private appService: AppService,
              private guestService: GuestService,
              private todoActions: TodoActions) {
  }

  @Effect() getTitle$ = this.actions$
    .ofType(TodoActions.GET_TITLE)
    .switchMap(action =>
      this.appService.showTitle(action.payload)
        .map(res => this.todoActions.getTitleSuccess(res))
        .catch((error: Error) => Observable.of(this.todoActions.getTitleError(error)))
    );

  @Effect() setTitle$ = this.actions$
    .ofType(TodoActions.SET_NEW_TITLE)
    .switchMap(action =>
      this.appService.setTitle(action.payload)
        .map(res => this.todoActions.setTitleSuccess(res))
        .catch((error: Error) => Observable.of(this.todoActions.setTitleError(error)))
    );

  @Effect() getGuests$ = this.actions$
    .ofType(TodoActions.GET_GUESTS)
    .switchMap(action =>
      this.guestService.getGuests()
        .map(res => this.todoActions.getGuestsSuccess(res))
        .catch((error: Error) => Observable.of(this.todoActions.getGuestsError(error)))
    );

  @Effect() addNewGuest$ = this.actions$
    .ofType(TodoActions.ADD_NEW_GUEST)
    .switchMap(action =>
      this.guestService.addNewGuest(action)
        .map(res => this.todoActions.addNewGuestSuccess(res))
        .catch((error: Error) => Observable.of(this.todoActions.addNewGuestError(error)))
    );

  @Effect() removeGuest$ = this.actions$
    .ofType(TodoActions.REMOVE_GUEST)
    .switchMap(action =>
      this.guestService.removeGuest(action)
        .map(res => this.todoActions.removeGuestSuccess(res))
        .catch((error: Error) => Observable.of(this.todoActions.removeGuestError(error)))
    );
}
