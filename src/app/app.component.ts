import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoActions } from './actions';
import { Guest, ResponseApp } from './interfaces';

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
  public store: Store<any>;

  public constructor(store: Store<any>,
                     private todoActions: TodoActions) {
    this.store = store;
  };

  public ngOnInit(): void {
    this.addNewGuestData = {name: '', phone: '', gender: 'male', drunker: false, canBeRemoved: true};
    this.totalGuests = [];

    this.store.select('myWildReducer').subscribe((res: ResponseApp): void => {
      if (res.type === 'title' || res.type === 'SET_NEW_TITLE') {
        this.title = res.setNewTitle;
      }

      if (res.type === 'user') {
        this.totalGuests = res.guests;
      }
    });

    this.resetTitle();
  }

  public resetTitle(): void {
    this.store.dispatch(this.todoActions.getTitle());
    this.store.dispatch(this.todoActions.getGuests());
  }

  public setNewTitle(inputData: string): void {
    this.store.dispatch(this.todoActions.setTitle(inputData));
    this.pageTitle = '';
  }

  public addPerson(guestName: string, guestPhone: string, guestGender: string, guestDrunker: boolean): void {
    const guestData: Guest = {
      name: guestName,
      phone: guestPhone,
      gender: guestGender,
      drunker: guestDrunker,
      canBeRemoved: true
    };

    this.addNewGuestData = {name: '', phone: '', gender: 'male', drunker: false, canBeRemoved: true};

    this.store.dispatch(this.todoActions.addNewGuest(guestData));
    this.store.dispatch(this.todoActions.getGuests());
  }

  public removePerson(guest: Guest): void {
    this.store.dispatch(this.todoActions.removeGuest(guest));
    this.store.dispatch(this.todoActions.getGuests());
  }
}
