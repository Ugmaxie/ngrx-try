import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {TodoActions} from './actions';
import {Guest, ResponseApp} from './interfaces';
import {AppState} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title: string;
  public pageTitle: string;
  public totalGuests: Guest[];
  public addNewGuestData: Guest;
  private emptyGuestData = {name: '', phone: '', gender: 'male', drunker: false, canBeRemoved: true};

  public constructor(private store: Store<AppState>,
                     private todoActions: TodoActions) {
    this.totalGuests = [];
  };

  public ngOnInit(): void {
    this.addNewGuestData = this.emptyGuestData;

    this.store.select('myWildReducer')
      .subscribe((res: ResponseApp): void => {
        if (res.title) {
          this.title = res.title;
        }

        if (res.guests) {
          this.totalGuests = res.guests;
        }
      });

    this.resetTitle();
  }

  public resetTitle(): void {
    this.store.dispatch(this.todoActions.getTitle());
    this.store.dispatch(this.todoActions.getGuests());
  }

  public setNewTitle(title: string): void {
    this.store.dispatch(this.todoActions.setTitle(title));
    this.pageTitle = '';
  }

  public addPerson(guest: Guest): void {
    this.store.dispatch(this.todoActions.addNewGuest(guest));
    this.store.dispatch(this.todoActions.getGuests());
    this.addNewGuestData = {name: '', phone: '', gender: 'male', drunker: false, canBeRemoved: true};
  }

  public removePerson(guest: Guest): void {
    this.store.dispatch(this.todoActions.removeGuest(guest));
    this.store.dispatch(this.todoActions.getGuests());
  }
}
