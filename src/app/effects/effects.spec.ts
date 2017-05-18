import { TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { ProfileEffects } from './effects';
import { NewGuest } from '../models/guest.model';
import { AppService, GuestService } from '../shared';
import * as reducer from '../reducers/reducer';

import {
  GET_TITLE_SUCCESS, GET_TITLE_ERROR,
  SET_NEW_TITLE_SUCCESS, SET_NEW_TITLE_ERROR,
  GET_GUESTS_SUCCESS, GET_GUESTS_ERROR,
  ADD_NEW_GUEST_SUCCESS, ADD_NEW_GUEST_ERROR,
  REMOVE_GUEST_SUCCESS, REMOVE_GUEST_ERROR
} from '../reducers/reducer';

describe('Effects.', () => {
  let runner;
  let effect;
  let appService;
  let guestService;

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
        GuestService
      ]
    });

    effect = TestBed.get(ProfileEffects);
    runner = TestBed.get(EffectsRunner);
    appService = TestBed.get(AppService);
    guestService = TestBed.get(GuestService);
  });

  it('should return a GET_TITLE_SUCCESS action', () => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: GET_TITLE_SUCCESS,
      payload: dataMock
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.of(dataMock));

    runner.queue(reducer.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
    });
  });

  it('should return a GET_TITLE_ERROR action', (done) => {
    const expectedResult = {
      type: GET_TITLE_ERROR
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.throw('Error'));

    runner.queue(reducer.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a SET_NEW_TITLE_SUCCESS action', (done) => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: SET_NEW_TITLE_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(appService, 'setTitle').and.returnValue(Observable.of(dataMock));

    runner.queue(reducer.setTitle('anyData'));

    effect.setTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a SET_NEW_TITLE_ERROR action', (done) => {
    const expectedResult = {
      type: SET_NEW_TITLE_ERROR
    };

    spyOn(appService, 'setTitle').and.returnValue(Observable.throw('Error'));

    runner.queue(reducer.setTitle(''));

    effect.setTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_GUESTS_SUCCESS action', (done) => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: GET_GUESTS_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.of(dataMock));

    runner.queue(reducer.getGuests());

    effect.getGuests$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_GUESTS_ERROR action', (done) => {
    const expectedResult = {
      type: GET_GUESTS_ERROR
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.throw('Error'));

    runner.queue(reducer.getGuests());

    effect.getGuests$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a ADD_NEW_GUEST_SUCCESS action', (done) => {
    const newGuestMock = new NewGuest({
      name: 'John Doe',
      phone: '911',
      gender: 'male',
      drunker: true,
      canBeRemoved: true
    });
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: ADD_NEW_GUEST_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.of(dataMock));

    runner.queue(reducer.addNewGuest(newGuestMock));

    effect.addNewGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a ADD_NEW_GUEST_ERROR action', (done) => {
    const newGuestMock = new NewGuest({
      name: 'John Doe',
      phone: '911',
      gender: 'male',
      drunker: true,
      canBeRemoved: true
    });
    const expectedResult = {
      type: ADD_NEW_GUEST_ERROR
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.throw('Error'));

    runner.queue(reducer.addNewGuest(newGuestMock));

    effect.addNewGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a REMOVE_GUEST_SUCCESS action', (done) => {
    const newGuestMock = new NewGuest({
      name: 'John Doe',
      phone: '911',
      gender: 'male',
      drunker: true,
      canBeRemoved: true
    });
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: REMOVE_GUEST_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.of(dataMock));

    runner.queue(reducer.removeGuest(newGuestMock));

    effect.removeGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a REMOVE_GUEST_ERROR action', (done) => {
    const newGuestMock = new NewGuest({
      name: 'John Doe',
      phone: '911',
      gender: 'male',
      drunker: true,
      canBeRemoved: true
    });
    const expectedResult = {
      type: REMOVE_GUEST_ERROR
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.throw('Error'));

    runner.queue(reducer.removeGuest(newGuestMock));

    effect.removeGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });
});
