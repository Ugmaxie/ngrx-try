import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PartyTitle } from '../interfaces'

@Injectable()
export class AppService {
  public showTitle(data: PartyTitle): Observable<any> {
    return Observable.timer(500).mapTo({setNewTitle: 'Name of party is: ' + data.payload.setNewTitle});
  }

  public setTitle(data: PartyTitle): Observable<any> {
    return Observable.timer(500).mapTo({setNewTitle: 'Name of party is: ' + data.payload.setNewTitle});
  }
}
