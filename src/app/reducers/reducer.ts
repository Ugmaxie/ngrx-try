import { Action } from '@ngrx/store';

import { TodoActions } from '../actions'

export function myWildReducer(state = {}, action: Action): any {
  switch (action.type) {
    case TodoActions.GET_TITLE:
      return Object.assign({}, {pending: true}, {type: 'title'});

    case TodoActions.GET_TITLE_SUCCESS:
      return Object.assign({}, {setNewTitle: action.payload.setNewTitle, pending: false}, {type: 'title'});

    case TodoActions.GET_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false}, {type: 'title'});

    case TodoActions.SET_NEW_TITLE:
      return Object.assign({}, {pending: true}, {type: 'title'});

    case TodoActions.SET_NEW_TITLE_SUCCESS:
      return Object.assign({}, {setNewTitle: action.payload.setNewTitle, pending: false}, {type: 'title'});

    case TodoActions.SET_NEW_TITLE_ERROR:
      return Object.assign({}, {error: 'Title cannot be delivered', pending: false}, {type: 'title'});

    case TodoActions.ADD_NEW_GUEST:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case TodoActions.ADD_NEW_GUEST_SUCCESS:
      return Object.assign({}, {addNewGuest: action.payload.addNewGuest, pending: false}, {type: 'user'});

    case TodoActions.ADD_NEW_GUEST_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false}, {type: 'user'});

    case TodoActions.REMOVE_GUEST:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case TodoActions.REMOVE_GUEST_SUCCESS:
      return Object.assign({}, {removeGuest: action.payload.removeGuest, pending: false}, {type: 'user'});

    case TodoActions.REMOVE_GUEST_ERROR:
      return Object.assign({}, {error: 'Data loss. Try again.', pending: false}, {type: 'user'});

    case TodoActions.GET_GUESTS:
      return Object.assign({}, {pending: true}, {type: 'user'});

    case TodoActions.GET_GUESTS_SUCCESS:
      return Object.assign({}, {guests: action.payload.guests, pending: false}, {type: 'user'});

    case TodoActions.GET_GUESTS_ERROR:
      return Object.assign({}, {error: 'User data cannot be delivered', pending: false}, {type: 'user'});

    default:
      return state;
  }
}
