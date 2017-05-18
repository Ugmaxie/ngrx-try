import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GuestService } from './guests.service';

describe('Guest Service', () => {
  let service: GuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuestService
      ]
    });
    service = TestBed.get(GuestService);
  });

  it('should get guests list', fakeAsync(() => {
    const timer = 1000;
    const guestsListMock = [{name: 'Max', gender: 'male', phone: '+380665898925', drunker: true}];
    let result;

    service.getGuests().subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.guests).toEqual(guestsListMock);
  }));

  it('should add new guest to list', fakeAsync(() => {
    const timer = 1000;
    const expectedResult = {name: 'Mio', gender: 'female', phone: '+380665898925', drunker: true, canBeRemoved: true};
    const newGuestMock = {
      payload: {
        addNewGuest: {
          name: 'Mio', gender: 'female', phone: '+380665898925', drunker: true, canBeRemoved: true
        }
      },
      type: 'user'
    };
    let result;

    service.addNewGuest(newGuestMock).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.addNewGuest).toEqual(expectedResult);
    expect(service.guests).toContain(expectedResult);
  }));

  it('should remove a guest to list', fakeAsync(() => {
    const timer = 1000;
    const expectedResult = [];
    const removed_GuestMock = {name: 'Max', gender: 'male', phone: '+380665898925', drunker: true};
    const removeGuestMock = {
      payload: {
        removeGuest: {
          name: 'Max', gender: 'male', phone: '+380665898925', drunker: true
        }
      },
      type: 'user'
    };
    let result;

    service.removeGuest(removeGuestMock).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.removeGuest).toEqual(removed_GuestMock);
    expect(service.guests).toEqual(expectedResult);
  }));
});
