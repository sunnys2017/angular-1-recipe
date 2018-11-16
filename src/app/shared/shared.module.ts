import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		//module, pipes, ...need to be declared, at least, and only once.
		DropdownDirective
	],
	exports: [
		/*it's not nesessary to import commonModule, we can 'exports' it directly.
		  everything you set up in a module is only available in this module,
		  to make it accessable from outside, we need to export them.
		*/
		CommonModule,
		DropdownDirective
	]
})

export class SharedModule {}