import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PROJECT';
  loadedFeature = 'recipe';

  ngOnInit() {
  	firebase.initializeApp({
  		apiKey: "AIzaSyDff0bJotm7YiGCDdCLE_J6aCmIorU2GVU",
    	authDomain: "recipe-angular-a1144.firebaseapp.com",
  	});
  }

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  }
}
