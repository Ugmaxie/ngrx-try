import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addNewGuest, getGuests, removeGuest, getTitle, setTitle } from './reducers/reducer';
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

  public constructor(store: Store<any>) {
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
    this.store.dispatch(getTitle());
    this.store.dispatch(getGuests());
  }

  public setNewTitle(inputData: string): void {
    this.store.dispatch(setTitle(inputData));
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

    this.store.dispatch(addNewGuest(guestData));
    this.store.dispatch(getGuests());
  }

  public removePerson(guest: Guest): void {
    this.store.dispatch(removeGuest(guest));
    this.store.dispatch(getGuests());
  }
}
