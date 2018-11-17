import { ShoppingListComponent } from './shopping-list.component';
import { TestBed, async } from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('Component: ShoppingList', () => {

	beforeEach(()=> {
		TestBed.configureTestingModule({
			declarations: [
				ShoppingListComponent,
				ShoppingEditComponent
			],
			imports: [
				CommonModule,
				FormsModule
			],
			providers: [
				ShoppingListService
			]
		});  
	})

	it('should create the component', () => {
		const fixture = TestBed.createComponent(ShoppingListComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	})

	it('should use shopping list service', () => {
		const fixture = TestBed.createComponent(ShoppingListComponent);
		const app = fixture.debugElement.componentInstance;
		const shoppingListService = fixture.debugElement.injector.get(ShoppingListService);
		fixture.detectChanges();
		expect(shoppingListService.getIngredients()).toEqual(app.ingredients);
	})

	it('should display ingredients of shopping-list', () => {
		const fixture = TestBed.createComponent(ShoppingListComponent);
		const app = fixture.debugElement.componentInstance;
		const shoppingListService = fixture.debugElement.injector.get(ShoppingListService);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		const result = app.ingredients[0].name + '(' + app.ingredients[0].amount + ')'
		expect(compiled.querySelector('a').textContent).toContain(result);
	})

});
