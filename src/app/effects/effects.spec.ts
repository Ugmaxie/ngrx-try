import { TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { ProfileEffects } from './effects';
import { NewGuest } from '../models/guest.model';
import { AppService, GuestService } from '../shared';
import { TodoActions } from '../actions';
import * as reducer from '../reducers/reducer';


describe('Effects.', () => {
  let runner;
  let effect;
  let appService;
  let guestService;
  let todoActions;

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

  it('should return a GET_TITLE_SUCCESS action', () => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: TodoActions.GET_TITLE_SUCCESS,
      payload: dataMock
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
    });
  });

  it('should return a GET_TITLE_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.GET_TITLE_ERROR
    };

    spyOn(appService, 'showTitle').and.returnValue(Observable.throw('Error'));

    runner.queue(todoActions.getTitle());

    effect.getTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a SET_NEW_TITLE_SUCCESS action', (done) => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: TodoActions.SET_NEW_TITLE_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
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
      type: TodoActions.SET_NEW_TITLE_ERROR
    };

    spyOn(appService, 'setTitle').and.returnValue(Observable.throw('Error'));

    runner.queue(todoActions.setTitle(''));

    effect.setTitle$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_GUESTS_SUCCESS action', (done) => {
    const dataMock = {setNewTitle: 'Name of party is: Lalaland'};
    const expectedResult = {
      type: TodoActions.GET_GUESTS_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.getGuests());

    effect.getGuests$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });

  it('should return a GET_GUESTS_ERROR action', (done) => {
    const expectedResult = {
      type: TodoActions.GET_GUESTS_ERROR
    };

    spyOn(guestService, 'getGuests').and.returnValue(Observable.throw('Error'));

    runner.queue(todoActions.getGuests());

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
      type: TodoActions.ADD_NEW_GUEST_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.addNewGuest(newGuestMock));

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
      type: TodoActions.ADD_NEW_GUEST_ERROR
    };

    spyOn(guestService, 'addNewGuest').and.returnValue(Observable.throw('Error'));

    runner.queue(todoActions.addNewGuest(newGuestMock));

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
      type: TodoActions.REMOVE_GUEST_SUCCESS,
      payload: {setNewTitle: 'Name of party is: Lalaland'}
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.of(dataMock));

    runner.queue(todoActions.removeGuest(newGuestMock));

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
      type: TodoActions.REMOVE_GUEST_ERROR
    };

    spyOn(guestService, 'removeGuest').and.returnValue(Observable.throw('Error'));

    runner.queue(todoActions.removeGuest(newGuestMock));

    effect.removeGuest$.subscribe(data => {
      expect(data).toEqual(expectedResult);
      done();
    });
  });
});
