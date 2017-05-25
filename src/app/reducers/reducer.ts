import { Action } from '@ngrx/store';

import { Guest } from '../interfaces/interfaces';
import { TodoActions } from '../actions'

export class TodoState {
  title: string;
  guests: Guest[];
  guest: Guest;
  pending: boolean;
  error: Error;
}

const defaultState = new TodoState();

export function myWildReducer(state = defaultState, action: Action): TodoState {
  switch (action.type) {
    case TodoActions.GET_TITLE:
    case TodoActions.SET_NEW_TITLE:
    case TodoActions.GET_GUESTS:
    case TodoActions.ADD_NEW_GUEST:
    case TodoActions.REMOVE_GUEST:

      return Object.assign({}, state, {pending: true});

    case TodoActions.GET_TITLE_SUCCESS:
    case TodoActions.SET_NEW_TITLE_SUCCESS:
    case TodoActions.GET_GUESTS_SUCCESS:
    case TodoActions.ADD_NEW_GUEST_SUCCESS:
    case TodoActions.REMOVE_GUEST_SUCCESS:

      return Object.assign({}, state, action.payload, {pending: false});

    case TodoActions.GET_TITLE_ERROR:
    case TodoActions.SET_NEW_TITLE_ERROR:
    case TodoActions.GET_GUESTS_ERROR:
    case TodoActions.ADD_NEW_GUEST_ERROR:
    case TodoActions.REMOVE_GUEST_ERROR:

      return Object.assign({}, state, {error: action.payload}, {pending: false});

    default:
      return state;
  }
}
