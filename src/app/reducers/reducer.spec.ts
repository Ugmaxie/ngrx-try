import {myWildReducer, TodoState} from './reducer';

describe('Reducer.', () => {
  const oldState = new TodoState();
  const guestMock = {
    name: 'Vasya',
    phone: '911',
    gender: 'male',
    drunker: true,
    canBeRemoved: true
  };

  it('should send request to get title and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Get Title'
    });

    expect(newState.pendingResponse).toEqual(true);
  });

  it('should send request for getting title, got success and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Get Title Success',
      payload: {title: 'GET TITLE'}
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.title).toEqual('GET TITLE');
  });

  it('should send request to get title and got Error', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Get Title Error',
      payload: new Error('Error of Errors!')
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.error).toEqual(new Error('Error of Errors!'));
  });

  it('should send request to set new title and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Set New Title'
    });

    expect(newState.pendingResponse).toEqual(true);
    expect(newState.title).toBeUndefined();
  });

  it('should send request for set new title, got Success and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Set New Title Success',
      payload: {title: 'SET NEWEST TITLE'}
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.title).toEqual('SET NEWEST TITLE');
  });

  it('should send request to set new title and got Error', () => {
    const newState = myWildReducer(oldState, {
      type: '[Party Name] Set New Title Error',
      payload: new Error('Error of Errors!')
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.error).toEqual(new Error('Error of Errors!'));
  });

  it('should send request to add new guest and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Add New Guest'
    });

    expect(newState.pendingResponse).toEqual(true);
    expect(newState.title).toBeUndefined();
  });

  it('should send request for add new guest, got Success and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Add New Guest Success',
      payload: { guest: guestMock }
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.guest).toEqual(guestMock);
  });

  it('should send request to add new guest and got Error', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Add New Guest Error',
      payload: new Error('Error of Errors!')
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.error).toEqual(new Error('Error of Errors!'));
  });

  it('should send request to remove guest and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Remove Guest'
    });

    expect(newState.pendingResponse).toEqual(true);
    expect(newState.guest).toBeUndefined();
  });

  it('should send request for removing guest, got Success and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Remove Guest Success',
      payload: {guest: guestMock}
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.guest).toEqual(guestMock);
  });

  it('should send request to remove guest and got Error', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guest] Remove Guest Error',
      payload: new Error('Error of Errors!')
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.error).toEqual(new Error('Error of Errors!'));
  });

  it('should send request to get guests and return new state', () => {
    const newState = myWildReducer(oldState, {type: '[Guests] Get Guests'});

    expect(newState.pendingResponse).toEqual(true);
    expect(newState.guests).toBeUndefined();
  });

  it('should send request for getting guests, got Success and return new state', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guests] Get Guests Success',
      payload: {guests: [guestMock]}
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.guests).toEqual([guestMock]);
  });

  it('should send request to remove guest and got Error', () => {
    const newState = myWildReducer(oldState, {
      type: '[Guests] Get Guests Error',
      payload: new Error('Error of Errors!')
    });

    expect(newState.pendingResponse).toEqual(false);
    expect(newState.error).toEqual(new Error('Error of Errors!'));
  });
});
