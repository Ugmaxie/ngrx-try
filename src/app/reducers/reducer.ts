import { Action } from '@ngrx/store';

import { Guest } from '../interfaces'

const initialState = 'My new Party';

export const GET_TITLE = 'GET_TITLE';
export const GET_TITLE_SUCCESS = 'GET_TITLE_SUCCESS';
export const GET_TITLE_ERROR = 'GET_TITLE_ERROR';

export const SET_NEW_TITLE = 'SET_NEW_TITLE';
export const SET_NEW_TITLE_SUCCESS = 'SET_NEW_TITLE_SUCCESS';
export const SET_NEW_TITLE_ERROR = 'SET_NEW_TITLE_ERROR';

export const GET_GUESTS = 'GET_GUESTS';
export const GET_GUESTS_SUCCESS = 'GET_GUESTS_SUCCESS';
export const GET_GUESTS_ERROR = 'GET_GUESTS_ERROR';

export const ADD_NEW_GUEST = 'ADD_NEW_GUEST';
export const ADD_NEW_GUEST_SUCCESS = 'ADD_NEW_GUEST_SUCCESS';
export const ADD_NEW_GUEST_ERROR = 'ADD_NEW_GUEST_ERROR';

export const REMOVE_GUEST = 'REMOVE_GUEST';
export const REMOVE_GUEST_SUCCESS = 'REMOVE_GUEST_SUCCESS';
export const REMOVE_GUEST_ERROR = 'REMOVE_GUEST_ERROR';

export function getTitle(): any {
  return {
    type: GET_TITLE,
    payload: {setNewTitle: initialState}
  };
}

export function setTitle(inputNewTitle: string): any {
  return {
    type: SET_NEW_TITLE,
    payload: {setNewTitle: inputNewTitle}
  };
}

export function getGuests(): any {
  return {
    type: GET_GUESTS
  };
}

export function addNewGuest(addNewGuestData: Guest): any {
  return {
    type: ADD_NEW_GUEST,
    payload: {addNewGuest: addNewGuestData}
  };
}

export function removeGuest(guestToRemove: Guest): any {
  return {
    type: REMOVE_GUEST,
    payload: {removeGuest: guestToRemove}
  };
}

export function myWildReducer(state = {}, action: Action): any {
  switch (action.type) {
    case GET_TITLE:
      return Object.assign({}, {pending: true}, {type: 'title'});

    case GET_TITLE_SUCCESS:
      return Object.assign({}, {setNewTitle: action.payload.setNewTitle, pending: false}, {type: 'title'});

    case GET_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false}, {type: 'title'});

    case SET_NEW_TITLE:
      return Object.assign({}, {pending: true}, {type: 'title'});

    case SET_NEW_TITLE_SUCCESS:
      return Object.assign({}, {setNewTitle: action.payload.setNewTitle, pending: false}, {type: 'title'});

    case SET_NEW_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false}, {type: 'title'});

    case ADD_NEW_GUEST:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case ADD_NEW_GUEST_SUCCESS:
      return Object.assign({}, {addNewGuest: action.payload.addNewGuest, pending: false}, {type: 'user'});

    case ADD_NEW_GUEST_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false}, {type: 'user'});

    case REMOVE_GUEST:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case REMOVE_GUEST_SUCCESS:
      return Object.assign({}, {removeGuest: action.payload.removeGuest, pending: false}, {type: 'user'});

    case REMOVE_GUEST_ERROR:
      return Object.assign({}, {error: 'Data loss. Try again.', pending: false}, {type: 'user'});

    case GET_GUESTS:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case GET_GUESTS_SUCCESS:
      return Object.assign({}, {guests: action.payload.guests, pending: false}, {type: 'user'});

    case GET_GUESTS_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false}, {type: 'user'});

    default:
      return state;
  }
}
