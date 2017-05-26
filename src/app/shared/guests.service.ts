import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mapTo';

import { ResponseApp } from '../interfaces';

export class GuestService {
  public guests = [{name: 'Max', gender: 'male', phone: '+380665898925', drunker: true}];

  public getGuests(): Observable<any> {
    return Observable.timer(500).mapTo({guests: this.guests});
  }

  public addNewGuest(params: ResponseApp): Observable<any> {
    this.guests.push(params.guest);
    return Observable.timer(500).mapTo({guest: params.guest});
  }

  public removeGuest(params: ResponseApp): Observable<any> {
    const index = this.guests.indexOf(params.guest);
    this.guests.splice(index, 1);
    return Observable.timer(500).mapTo({guest: params.guest});
  }
}
