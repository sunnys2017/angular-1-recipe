import { Component, EventEmitter, Output } from '@angular/core';

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

/*
	onSelect(feature: string) {
		this.featureSelected.emit(feature);
	}
*/
}
