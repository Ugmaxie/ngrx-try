import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import myWildReducer from './reducers';
import { AppComponent } from './app.component';
import { AppService, GuestService } from './shared';
import { ProfileEffects } from './effects';
import { TodoActions } from './actions';

export interface AppState {myWildReducer}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(myWildReducer),
    EffectsModule.run(ProfileEffects)
  ],
  providers: [
    TodoActions,
    AppService,
    GuestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
