import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GuestService } from './guests.service';

describe('Guest Service', () => {
  let service: GuestService;
  const guestMock = {name: 'Mio', gender: 'female', phone: '+380665898925', drunker: true, canBeRemoved: true};

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
    const newGuestMock = {
      payload: {
        guest: guestMock
      },
      type: 'ADD_USER_SUCCESS'
    };
    let result;

    service.addNewGuest(newGuestMock).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.guest).toEqual(guestMock);
    expect(service.guests).toContain(guestMock);
  }));

  it('should remove a guest to list', fakeAsync(() => {
    const timer = 1000;
    const expectedResult = [];
    const removeGuestMock = {
      payload: {
        guest: guestMock
      },
      type: 'REMOVE_USER_SUCCESS'
    };
    let result;

    service.removeGuest(removeGuestMock).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.guest).toEqual(guestMock);
    expect(service.guests).toEqual(expectedResult);
  }));
});
