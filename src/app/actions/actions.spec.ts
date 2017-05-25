import { TestBed } from '@angular/core/testing';

import { TodoActions } from './actions';

describe('Actions.', () => {
  let todoActions;
  const newGuestMock = {
    name: 'John Doe',
    phone: '911',
    gender: 'male',
    drunker: true,
    canBeRemoved: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoActions
      ]
    }).compileComponents();

    todoActions = TestBed.get(TodoActions);
  });

  it('should return action to get default title', () => {
    const expectedAction = {
      type: '[Party Name] Get Title',
      payload: {title: 'My new Party'}
    };

    const action = todoActions.getTitle();

    expect(action).toEqual(expectedAction);
  });

  it('should return action to set new title', () => {
    const expectedAction = {
      type: '[Party Name] Set New Title',
      payload: {title: 'SET THE NEWEST PARTY'}
    };

    const action = todoActions.setTitle('SET THE NEWEST PARTY');

    expect(action).toEqual(expectedAction);
  });

  it('should return action to get guests from DB', () => {
    const expectedAction = {
      type: '[Guests] Get Guests'
    };

    const action = todoActions.getGuests();

    expect(action).toEqual(expectedAction);
  });

  it('should return action to add new guest', () => {
    const expectedAction = {
      type: '[Guest] Add New Guest',
      payload: {
        guest: {
          name: 'John Doe',
          phone: '911',
          gender: 'male',
          drunker: true,
          canBeRemoved: true
        }
      }
    };

    const action = todoActions.addNewGuest(newGuestMock);

    expect(action).toEqual(expectedAction);
  });

  it('should return action to remove invited guest', () => {
    const expectedAction = {
      type: '[Guest] Remove Guest',
      payload: {
        guest: {
          name: 'John Doe',
          phone: '911',
          gender: 'male',
          drunker: true,
          canBeRemoved: true
        }
      }
    };

    const action = todoActions.removeGuest(newGuestMock);

    expect(action).toEqual(expectedAction);
  });
});
