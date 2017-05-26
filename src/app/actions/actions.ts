import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import {CurrentGuest, PartyTitle} from '../interfaces/interfaces';

@Injectable()
export class TodoActions {
  static GET_TITLE = '[Party Name] Get Title';
  static GET_TITLE_SUCCESS = '[Party Name] Get Title Success';
  static GET_TITLE_ERROR = '[Party Name] Get Title Error';

  static SET_NEW_TITLE = '[Party Name] Set New Title';
  static SET_NEW_TITLE_SUCCESS = '[Party Name] Set New Title Success';
  static SET_NEW_TITLE_ERROR = '[Party Name] Set New Title Error';

  static GET_GUESTS = '[Guests] Get Guests';
  static GET_GUESTS_SUCCESS = '[Guests] Get Guests Success';
  static GET_GUESTS_ERROR = '[Guests] Get Guests Error';

  static ADD_NEW_GUEST = '[Guest] Add New Guest';
  static ADD_NEW_GUEST_SUCCESS = '[Guest] Add New Guest Success';
  static ADD_NEW_GUEST_ERROR = '[Guest] Add New Guest Error';

  static REMOVE_GUEST = '[Guest] Remove Guest';
  static REMOVE_GUEST_SUCCESS = '[Guest] Remove Guest Success';
  static REMOVE_GUEST_ERROR = '[Guest] Remove Guest Error';

  getTitle(): Action {
    return {
      type: TodoActions.GET_TITLE,
      payload: {title: 'My new Party'}
    };
  }

  getTitleSuccess(title: PartyTitle): Action {
    return {
      type: TodoActions.GET_TITLE_SUCCESS,
      payload: title
    };
  }

  getTitleError(error: Error): Action {
    return {
      type: TodoActions.GET_TITLE_ERROR,
      payload: error
    };
  }

  setTitle(title: string): Action {
    return {
      type: TodoActions.SET_NEW_TITLE,
      payload: {title}
    };
  }

  setTitleSuccess(title: PartyTitle): Action {
    return {
      type: TodoActions.SET_NEW_TITLE_SUCCESS,
      payload: title
    };
  }

  setTitleError(error: Error): Action {
    return {
      type: TodoActions.SET_NEW_TITLE_ERROR,
      payload: error
    };
  }

  getGuests(): Action {
    return {
      type: TodoActions.GET_GUESTS
    };
  }

  getGuestsSuccess(guests: {guests: CurrentGuest[]}): Action {
    return {
      type: TodoActions.GET_GUESTS_SUCCESS,
      payload: guests
    };
  }

  getGuestsError(error: Error): Action {
    return {
      type: TodoActions.GET_GUESTS_ERROR,
      payload: error
    };
  }

  addNewGuest(guest: CurrentGuest): Action {
    return {
      type: TodoActions.ADD_NEW_GUEST,
      payload: {guest}
    };
  }

  addNewGuestSuccess(guest: {guest: CurrentGuest}): Action {
    return {
      type: TodoActions.ADD_NEW_GUEST_SUCCESS,
      payload: {guest}
    };
  }

  addNewGuestError(error: Error): Action {
    return {
      type: TodoActions.ADD_NEW_GUEST_ERROR,
      payload: error
    };
  }

  removeGuest(guest: CurrentGuest): Action {
    return {
      type: TodoActions.REMOVE_GUEST,
      payload: {guest}
    };
  }

  removeGuestSuccess(guest: {guest: CurrentGuest}): Action {
    return {
      type: TodoActions.REMOVE_GUEST_SUCCESS,
      payload: {guest}
    };
  }

  removeGuestError(error: Error): Action {
    return {
      type: TodoActions.REMOVE_GUEST_ERROR,
      payload: error
    };
  }
}
