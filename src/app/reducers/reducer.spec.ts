import { myWildReducer } from './reducer';

describe('Actions.', () => {
  it('should send request to get title and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_TITLE'});

    expect(newState.pending).toEqual(true);
  });

  it('should send request for getting title, got success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'GET_TITLE_SUCCESS',
      payload: {setNewTitle: 'GET TITLE'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.setNewTitle).toEqual('GET TITLE');
    expect(newState.type).toEqual('title');
  });

  it('should send request to get title and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_TITLE_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Title cannot be delivered');
    expect(newState.type).toEqual('title');
  });

  it('should send request to set new title and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'SET_NEW_TITLE'});

    expect(newState.pending).toEqual(true);
    expect(newState.setNewTitle).toBeUndefined();
    expect(newState.type).toEqual('title');
  });

  it('should send request for set new title, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'SET_NEW_TITLE_SUCCESS',
      payload: {setNewTitle: 'SET NEWEST TITLE'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.setNewTitle).toEqual('SET NEWEST TITLE');
    expect(newState.type).toEqual('title');
  });

  it('should send request to set new title and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'SET_NEW_TITLE_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Title cannot be delivered');
    expect(newState.type).toEqual('title');
  });

  it('should send request to add new guest and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'ADD_NEW_GUEST'});

    expect(newState.pending).toEqual(true);
    expect(newState.setNewTitle).toBeUndefined();
    expect(newState.type).toEqual('user');
  });

  it('should send request for add new guest, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'ADD_NEW_GUEST_SUCCESS',
      payload: {addNewGuest: 'Vasya'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.addNewGuest).toEqual('Vasya');
    expect(newState.type).toEqual('user');
  });

  it('should send request to add new guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'ADD_NEW_GUEST_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('User data cannot be delivered');
    expect(newState.type).toEqual('user');
  });

  it('should send request to remove guest and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'REMOVE_GUEST'});

    expect(newState.pending).toEqual(true);
    expect(newState.setNewTitle).toBeUndefined();
    expect(newState.type).toEqual('user');
  });

  it('should send request for removing guest, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'REMOVE_GUEST_SUCCESS',
      payload: {removeGuest: 'Vasya'}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.removeGuest).toEqual('Vasya');
    expect(newState.type).toEqual('user');
  });

  it('should send request to remove guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'REMOVE_GUEST_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('Data loss. Try again.');
    expect(newState.type).toEqual('user');
  });

  it('should send request to get guests and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_GUESTS'});

    expect(newState.pending).toEqual(true);
    expect(newState.guests).toBeUndefined();
    expect(newState.type).toEqual('user');
  });

  it('should send request for getting guests, got Success and return new state', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {
      type: 'GET_GUESTS_SUCCESS', payload: {guests: [1, 2]}
    });

    expect(newState.pending).toEqual(false);
    expect(newState.guests).toEqual([1, 2]);
    expect(newState.type).toEqual('user');
  });

  it('should send request to remove guest and got Error', () => {
    const oldState = {};
    const newState = myWildReducer(oldState, {type: 'GET_GUESTS_ERROR'});

    expect(newState.pending).toEqual(false);
    expect(newState.error).toEqual('User data cannot be delivered');
    expect(newState.type).toEqual('user');
  });
});
