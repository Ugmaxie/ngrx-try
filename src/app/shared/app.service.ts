import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ResponseApp } from '../interfaces';

@Injectable()
export class AppService {
  public showTitle(params: ResponseApp): Observable<any> {
    return Observable.timer(500).mapTo({title: 'Name of party is: ' + params.title});
  }

  public setTitle(params: ResponseApp): Observable<any> {
    return Observable.timer(500).mapTo({title: 'Name of party is: ' + params.title});
  }
}
