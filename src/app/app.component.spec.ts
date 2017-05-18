import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';

import { AppComponent } from './app.component';
import { myWildReducer } from './reducers/reducer';

describe('AppComponent', () => {
  const addNewGuestDataMock = {name: '', phone: '', gender: 'male', drunker: false, canBeRemoved: true};
  let context: AppComponent;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        StoreModule.provideStore(myWildReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    context = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(context).toBeTruthy();
  }));

  it('should check ngOnInit', () => {
    spyOn(context.store, 'select').and
      .returnValue(Observable.from([{type: 'title', setNewTitle: 'Name of party is: Any party.'}]));
    spyOn(context, 'resetTitle').and.stub();

    context.ngOnInit();

    jasmine.clock().install();
    jasmine.clock().tick(1000);

    expect(context.addNewGuestData).toEqual(addNewGuestDataMock);
    expect(context.title).toContain('Name of party is:');
    expect(context.totalGuests).toEqual([]);
    expect(context.resetTitle).toHaveBeenCalled();

    jasmine.clock().uninstall();
  });

  it('should check resetTitle', () => {
    spyOn(context.store, 'dispatch').and.stub();

    context.resetTitle();

    expect(context.store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should check setNewTitle', () => {
    const setNewTitleMock = 'any title';
    spyOn(context.store, 'dispatch').and.stub();

    context.setNewTitle(setNewTitleMock);

    expect(context.store.dispatch).toHaveBeenCalledTimes(1);
    expect(context.pageTitle).toEqual('');
  });

  it('should check addPerson', () => {
    const guestDataMock = {
      name: 'guestName',
      phone: 'guestPhone',
      gender: 'male',
      drunker: true
    };

    spyOn(context.store, 'dispatch').and.stub();

    context.addPerson(guestDataMock.name, guestDataMock.phone, guestDataMock.gender, guestDataMock.drunker);

    expect(context.store.dispatch).toHaveBeenCalledTimes(2);
    expect(context.addNewGuestData).toEqual(addNewGuestDataMock);
  });

  it('should check removePerson', () => {
    spyOn(context.store, 'dispatch').and.stub();

    context.removePerson(addNewGuestDataMock);

    expect(context.store.dispatch).toHaveBeenCalledTimes(2);
  });
});
