/* tslint:disable:member-ordering */

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AppService, GuestService } from '../shared';
import {
  GET_TITLE, GET_TITLE_SUCCESS, GET_TITLE_ERROR,
  SET_NEW_TITLE, SET_NEW_TITLE_SUCCESS, SET_NEW_TITLE_ERROR,
  GET_GUESTS, GET_GUESTS_SUCCESS, GET_GUESTS_ERROR,
  ADD_NEW_GUEST, ADD_NEW_GUEST_SUCCESS, ADD_NEW_GUEST_ERROR,
  REMOVE_GUEST, REMOVE_GUEST_SUCCESS, REMOVE_GUEST_ERROR
} from '../reducers/reducer';

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
    .ofType(GET_TITLE)
    .switchMap(action =>
      this.appService.showTitle(action)
        .map(res => ({type: GET_TITLE_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: GET_TITLE_ERROR}))
    );

  @Effect() setTitle$ = this.actions$
    .ofType(SET_NEW_TITLE)
    .switchMap(action =>
      this.appService.setTitle(action)
        .map(res => ({type: SET_NEW_TITLE_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: SET_NEW_TITLE_ERROR}))
    );

  @Effect() getGuests$ = this.actions$
    .ofType(GET_GUESTS)
    .switchMap(action =>
      this.guestService.getGuests()
        .map(res => ({type: GET_GUESTS_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: GET_GUESTS_ERROR}))
    );

  @Effect() addNewGuest$ = this.actions$
    .ofType(ADD_NEW_GUEST)
    .switchMap(action =>
      this.guestService.addNewGuest(action)
        .map(res => ({type: ADD_NEW_GUEST_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: ADD_NEW_GUEST_ERROR}))
    );

  @Effect() removeGuest$ = this.actions$
    .ofType(REMOVE_GUEST)
    .switchMap(action =>
      this.guestService.removeGuest(action)
        .map(res => ({type: REMOVE_GUEST_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: REMOVE_GUEST_ERROR}))
    );
}
