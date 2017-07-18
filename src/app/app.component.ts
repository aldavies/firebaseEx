import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import {initializeApp, database } from 'firebase';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  nameList$: FirebaseListObservable<any>;
  individual$: FirebaseObjectObservable<any>;

  firstName: any;

  constructor(private af: AngularFireDatabase) {
    this.nameList$ = af.list('/names')
    this.individual$ = af.object('/names/1')

    
    this.nameList$.subscribe(
      val => console.log(val)
    )

    this.individual$.subscribe(
      val => console.log(val)
    )

    this.nameList$.map(names => names[(names.length - 1)])
      .subscribe(
        name => this.firstName = name
      )
      // (function (names) {
      //  return names[2];
      // });
      // Map allows you to work with a collective set of items and apply some logic to it. Whether you'd like to
      // multiply values or grab a singular object out of it like the above illustrates
  }
  
  listPush() {
    this.nameList$.push({text: 'Rakesh'})
  }

  listRemove() {
    this.nameList$.remove(this.firstName)
  }

  listUpdate() {
    this.nameList$.update(this.firstName, {text: 'John Smith'})
  }

  objUpdate() {
    this.individual$.update({text: 'Adam The Truth Davies'})
  }

  objSet() {
    this.individual$.set({text: 'Adam The Semi Truth Davies'})
  }
  ngOnInit(){
    
  }

    
  }


