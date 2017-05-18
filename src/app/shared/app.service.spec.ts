import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AppService } from './app.service';

describe('App Service', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService
      ]
    });
    service = TestBed.get(AppService);
  });

  it('should get the party title', fakeAsync(() => {
    const timer = 1000;
    const mockData = {
      payload: {
        setNewTitle: 'Just get the title'
      },
      type: 'GET_TITLE'
    };
    let result;

    service.showTitle(mockData).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.setNewTitle).toEqual('Name of party is: Just get the title');
  }));

  it('should set the party title', fakeAsync(() => {
    const timer = 1000;
    const mockData = {
      payload: {
        setNewTitle: 'Just get the title'
      },
      type: 'SET_NEW_TITLE'
    };
    let result;

    service.setTitle(mockData).subscribe(data => {
      result = data;
    });

    tick(timer);

    expect(result.setNewTitle).toEqual('Name of party is: Just get the title');
  }));
});
