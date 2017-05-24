import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/mapTo';

export class GuestService {
  public guests = [{name: 'Max', gender: 'male', phone: '+380665898925', drunker: true}];

  public getGuests(): Observable<any> {
    return Observable.timer(500).mapTo({guests: this.guests});
  }

  public addNewGuest(data: Action): Observable<any> {
    this.guests.push(data.payload.guest);
    return Observable.timer(500).mapTo({guest: data.payload.guest});
  }

  public removeGuest(data: Action): Observable<any> {
    const index = this.guests.indexOf(data.payload.guest);
    this.guests.splice(index, 1);
    return Observable.timer(500).mapTo({guest: data.payload.guest});
  }
}
