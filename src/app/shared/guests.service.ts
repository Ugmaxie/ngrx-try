import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';

import { GuestData } from '../interfaces';

export class GuestService {
  public guests = [{name: 'Max', gender: 'male', phone: '+380665898925', drunker: true}];

  public getGuests(): Observable<any> {
    return Observable.timer(500).mapTo({guests: this.guests});
  }

  public addNewGuest(data: GuestData): Observable<any> {
    this.guests.push(data.payload.addNewGuest);
    return Observable.timer(500).mapTo({addNewGuest: data.payload.addNewGuest});
  }

  public removeGuest(data: GuestData): Observable<any> {
    const index = this.guests.indexOf(data.payload.removeGuest);
    this.guests.splice(index, 1);
    return Observable.timer(500).mapTo({removeGuest: data.payload.removeGuest});
  }
}
