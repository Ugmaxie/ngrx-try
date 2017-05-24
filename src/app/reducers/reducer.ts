import { Action } from '@ngrx/store';

import { TodoActions } from '../actions'

const defaultState = {};

export function myWildReducer(state = defaultState, action: Action): any {
  switch (action.type) {
    case TodoActions.GET_TITLE:
      return Object.assign({}, {pending: true});

    case TodoActions.GET_TITLE_SUCCESS:
      return Object.assign({}, {title: action.payload.title, pending: false});

    case TodoActions.GET_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false});

    case TodoActions.SET_NEW_TITLE:
      return Object.assign({}, {pending: true});

    case TodoActions.SET_NEW_TITLE_SUCCESS:
      return Object.assign({}, {title: action.payload.title, pending: false});

    case TodoActions.SET_NEW_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false});

    case TodoActions.ADD_NEW_GUEST:
      return Object.assign({}, {pending: true});

    case TodoActions.ADD_NEW_GUEST_SUCCESS:
      return Object.assign({}, {guest: action.payload.guest, pending: false});

    case TodoActions.ADD_NEW_GUEST_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false});

    case TodoActions.REMOVE_GUEST:
      return Object.assign({}, {pending: true});

    case TodoActions.REMOVE_GUEST_SUCCESS:
      return Object.assign({}, {guest: action.payload.guest, pending: false});

    case TodoActions.REMOVE_GUEST_ERROR:
      return Object.assign({}, {error: 'Data loss. Try again.', pending: false});

    case TodoActions.GET_GUESTS:
      return Object.assign({}, {pending: true});

    case TodoActions.GET_GUESTS_SUCCESS:
      return Object.assign({}, {guests: action.payload.guests, pending: false});

    case TodoActions.GET_GUESTS_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false});

    default:
      return state;
  }
}
