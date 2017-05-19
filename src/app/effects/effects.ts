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
              private guestService: GuestService) {
  }

  @Effect() getTitle$ = this.actions$
    .ofType(TodoActions.GET_TITLE)
    .switchMap(action =>
      this.appService.showTitle(action)
        .map(res => ({type: TodoActions.GET_TITLE_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: TodoActions.GET_TITLE_ERROR}))
    );

  @Effect() setTitle$ = this.actions$
    .ofType(TodoActions.SET_NEW_TITLE)
    .switchMap(action =>
      this.appService.setTitle(action)
        .map(res => ({type: TodoActions.SET_NEW_TITLE_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: TodoActions.SET_NEW_TITLE_ERROR}))
    );

  @Effect() getGuests$ = this.actions$
    .ofType(TodoActions.GET_GUESTS)
    .switchMap(action =>
      this.guestService.getGuests()
        .map(res => ({type: TodoActions.GET_GUESTS_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: TodoActions.GET_GUESTS_ERROR}))
    );

  @Effect() addNewGuest$ = this.actions$
    .ofType(TodoActions.ADD_NEW_GUEST)
    .switchMap(action =>
      this.guestService.addNewGuest(action)
        .map(res => ({type: TodoActions.ADD_NEW_GUEST_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: TodoActions.ADD_NEW_GUEST_ERROR}))
    );

  @Effect() removeGuest$ = this.actions$
    .ofType(TodoActions.REMOVE_GUEST)
    .switchMap(action =>
      this.guestService.removeGuest(action)
        .map(res => ({type: TodoActions.REMOVE_GUEST_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: TodoActions.REMOVE_GUEST_ERROR}))
    );
}
