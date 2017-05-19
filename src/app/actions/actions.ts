import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Guest } from '../interfaces/interfaces';

@Injectable()
export class TodoActions {
  static GET_TITLE = 'GET_TITLE';
  static GET_TITLE_SUCCESS = 'GET_TITLE_SUCCESS';
  static GET_TITLE_ERROR = 'GET_TITLE_ERROR';

  static SET_NEW_TITLE = 'SET_NEW_TITLE';
  static SET_NEW_TITLE_SUCCESS = 'SET_NEW_TITLE_SUCCESS';
  static SET_NEW_TITLE_ERROR = 'SET_NEW_TITLE_ERROR';

  static GET_GUESTS = 'GET_GUESTS';
  static GET_GUESTS_SUCCESS = 'GET_GUESTS_SUCCESS';
  static GET_GUESTS_ERROR = 'GET_GUESTS_ERROR';

  static ADD_NEW_GUEST = 'ADD_NEW_GUEST';
  static ADD_NEW_GUEST_SUCCESS = 'ADD_NEW_GUEST_SUCCESS';
  static ADD_NEW_GUEST_ERROR = 'ADD_NEW_GUEST_ERROR';

  static REMOVE_GUEST = 'REMOVE_GUEST';
  static REMOVE_GUEST_SUCCESS = 'REMOVE_GUEST_SUCCESS';
  static REMOVE_GUEST_ERROR = 'REMOVE_GUEST_ERROR';

  getTitle(): Action {
    return {
      type: TodoActions.GET_TITLE,
      payload: {setNewTitle: 'My new Party'}
    };
  }

  setTitle(inputNewTitle: string): Action {
    return {
      type: TodoActions.SET_NEW_TITLE,
      payload: {setNewTitle: inputNewTitle}
    };
  }

  getGuests(): Action {
    return {
      type: TodoActions.GET_GUESTS
    };
  }

  addNewGuest(addNewGuestData: Guest): Action {
    return {
      type: TodoActions.ADD_NEW_GUEST,
      payload: {addNewGuest: addNewGuestData}
    };
  }

  removeGuest(guestToRemove: Guest): Action {
    return {
      type: TodoActions.REMOVE_GUEST,
      payload: {removeGuest: guestToRemove}
    };
  }
}
