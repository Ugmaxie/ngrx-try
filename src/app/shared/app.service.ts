import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class AppService {
  public showTitle(data): Observable<any> {
    return Observable.timer(500).mapTo({title: 'Name of party is: ' + data.title});
  }

  public setTitle(data): Observable<any> {
    return Observable.timer(500).mapTo({title: 'Name of party is: ' + data.title});
  }
}
