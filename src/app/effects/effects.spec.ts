import { TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { ProfileEffects } from './effects';
import { AppService, GuestService } from '../shared';
import { TodoActions } from '../actions';
import * as reducer from '../reducers/reducer';
import {Guest} from '../interfaces/interfaces';

describe('Effects.', () => {
  let runner;
  let effect;
  let appService;
  let guestService;
  let todoActions;
  const newGuestMock: Guest = {
    name: 'John Doe',
    phone: '911',
    gender: 'male',
    drunker: true,
    canBeRemoved: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule,
        StoreModule.provideStore(reducer)
      ],
      providers: [
        ProfileEffects,
        AppService,
        EffectsRunner,
        GuestService,
        TodoActions
      ]
    });

    effect = TestBed.get(ProfileEffects);
    runner = TestBed.get(EffectsRunner);
    appService = TestBed.get(AppService);
    guestService = TestBed.get(GuestService);
    todoActions = TestBed.get(TodoActions);
  });

  it('should return a GET_TITLE_SUCCESS action', (done) => {
    const dataMock = {title: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: TodoActions.GET_TITLE_SUCCESS,
      payload: dataMock
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_TITLE_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.GET_TITLE_ERROR,
      payload: new Error()
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.throw(new Error()));

    runner.queue(todoActions.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a SET_NEW_TITLE_SUCCESS action', (done) => {
    const dataMock = {title: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: TodoActions.SET_NEW_TITLE_SUCCESS,
      payload: {title: 'Name of party is: Lalaland'}
    };

    spyOn(appService, 'setTitle').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.setTitle('anyData'));

    effect.setTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a SET_NEW_TITLE_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.SET_NEW_TITLE_ERROR,
      payload: new Error()
    };

    spyOn(appService, 'setTitle').and.returnValue(Observable.throw(new Error()));

    runner.queue(todoActions.setTitle(''));

    effect.setTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_GUESTS_SUCCESS action', (done) => {
    const expectedResult = {
      type: TodoActions.GET_GUESTS_SUCCESS,
      payload: newGuestMock
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.of([newGuestMock]));

    runner.queue(todoActions.getGuests());

    effect.getGuests$.subscribe(data => {
      expect(data.payload).toEqual([expectedResult.payload]);
      done();
    });
  });

  it('should return a GET_GUESTS_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.GET_GUESTS_ERROR,
      payload: new Error()
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.throw(new Error()));

    runner.queue(todoActions.getGuests());

    effect.getGuests$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a ADD_NEW_GUEST_SUCCESS action', (done) => {
    const expectedResult = {
      type: TodoActions.ADD_NEW_GUEST_SUCCESS,
      payload: {guest: newGuestMock}
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.of(newGuestMock));

    runner.queue(todoActions.addNewGuest(newGuestMock));

    effect.addNewGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a ADD_NEW_GUEST_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.ADD_NEW_GUEST_ERROR,
      payload: new Error()
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.throw(new Error()));

    runner.queue(todoActions.addNewGuest(newGuestMock));

    effect.addNewGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a REMOVE_GUEST_SUCCESS action', (done) => {
    const expectedResult = {
      type: TodoActions.REMOVE_GUEST_SUCCESS,
      payload: {guest: newGuestMock}
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.of(newGuestMock));

    runner.queue(todoActions.removeGuest(newGuestMock));

    effect.removeGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a REMOVE_GUEST_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.REMOVE_GUEST_ERROR,
      payload: new Error()
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.throw(new Error()));

    runner.queue(todoActions.removeGuest(newGuestMock));

    effect.removeGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });
});
