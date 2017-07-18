import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCOt7IjXqoZxNQefdDheaxQb-aNxCs1HFc",
  authDomain: "fir-ex-22c1a.firebaseapp.com",
  databaseURL: "https://fir-ex-22c1a.firebaseio.com",
  projectId: "fir-ex-22c1a",
  storageBucket: "fir-ex-22c1a.appspot.com",
  messagingSenderId: "923514308656"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
