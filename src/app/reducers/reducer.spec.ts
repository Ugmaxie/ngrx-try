import { myWildReducer } from './reducer';

describe('Reducer.', () => {
  it('should send request to get title and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_TITLE'});

    expect(newState.pending).toEqual(true);
  });

  it('should send request for getting title, got success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'GET_TITLE_SUCCESS',
      payload: {title: 'GET TITLE'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.title).toEqual('GET TITLE');
  });

  it('should send request to get title and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_TITLE_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Title cannot be delivered');
  });

  it('should send request to set new title and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'SET_NEW_TITLE'});

    expect(newState.pending).toEqual(true);
    expect(newState.title).toBeUndefined();
  });

  it('should send request for set new title, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'SET_NEW_TITLE_SUCCESS',
      payload: {title: 'SET NEWEST TITLE'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.title).toEqual('SET NEWEST TITLE');
  });

  it('should send request to set new title and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'SET_NEW_TITLE_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Title cannot be delivered');
  });

  it('should send request to add new guest and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'ADD_NEW_GUEST'});

    expect(newState.pending).toEqual(true);
    expect(newState.title).toBeUndefined();
  });

  it('should send request for add new guest, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'ADD_NEW_GUEST_SUCCESS',
      payload: {guest: 'Vasya'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.guest).toEqual('Vasya');
  });

  it('should send request to add new guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'ADD_NEW_GUEST_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('User data cannot be delivered');
  });

  it('should send request to remove guest and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'REMOVE_GUEST'});

    expect(newState.pending).toEqual(true);
    expect(newState.guest).toBeUndefined();
  });

  it('should send request for removing guest, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'REMOVE_GUEST_SUCCESS',
      payload: {guest: 'Vasya'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.guest).toEqual('Vasya');
  });

  it('should send request to remove guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'REMOVE_GUEST_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Data loss. Try again.');
  });

  it('should send request to get guests and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_GUESTS'});

    expect(newState.pending).toEqual(true);
    expect(newState.guests).toBeUndefined();
  });

  it('should send request for getting guests, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'GET_GUESTS_SUCCESS', payload: {guests: [1, 2]}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.guests).toEqual([1, 2]);
  });

  it('should send request to remove guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_GUESTS_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('User data cannot be delivered');
  });
});
