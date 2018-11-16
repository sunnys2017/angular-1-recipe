import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//allow this service to be injected by other service
@Injectable()
export class AuthService {

	token: string;

	constructor(private router: Router) {}

	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.catch(
				error => console.log(error)
			)
	}

	signinUser(email: string, password: string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					//console.log(response)	
					this.router.navigate(['/']);
					firebase.auth().currentUser.getIdToken()
						.then( //wait for the token to array and assign it.
							(token: string) => this.token = token
						)			
				}

			)
			.catch(
				error => console.log(error)
			)
	}

	getToken() {
		//this is an async, bc the token may be expired, and be assigned again,
		// so this only return a promise.
		// return firebase.auth().currentUser.getIdToken();
		firebase.auth().currentUser.getIdToken()
			.then(
				(token: string) => this.token = token
			);
		//this may cause security issue, expired token may be misused.
		return this.token;
	}

	isAuth() {
		return this.token != null;
	}

	logout() {
		firebase.auth().signOut();
		this.token = null;
		this.router.navigate(['/recipes']);
	}
}