import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

//add new property, = new event emitter, pass a string, add () to 
// instanciate this, so to create a object based on emiter class. 
// now featureSelected hold event emitter as a value
	//@Output() featureSelected = new EventEmitter<string>();

	constructor(private dataStorageService: DataStorageService,
							private authService: AuthService) {}
/*
	onSelect(feature: string) {
		this.featureSelected.emit(feature);
	}
*/

	onSaveData() {
		this.dataStorageService.storeRecipes()
			.subscribe(
				(response: HttpEvent<Object>) => {
					console.log(response);
					// some other events type: Sent, User, Response, DownloadProcess, ResponseHeader, UploadProcess
					console.log(response.type === HttpEventType.Sent);
				}
			);
	}

	onFetchData() {
		this.dataStorageService.getRecipes();
	}

	onLogout() {
		this.authService.logout();
	}

	isAuthenticated() {
    return this.authService.isAuth();
	}
}
