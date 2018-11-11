import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
	//update ingredients array in the service, and inform other 
	// components about the change in the event emitting.
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Pears', 6)
	];

	getIngredients() {
		/*this slice() may create a bug, when we add new ingredient, 
		 ingredients list presented is not changed, we need to
		 add an event emitter to inform other components new array.
		 eg: shopping-list.component.ts: 
		   >shoppingListService.ingredientsChanged.subscribe(...);
		*/
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
	/*this method works but create a lot of event emitter, remove.
		for(let ingredient of ingredients){
			this.addIngredient(ingredient);
		}
	*/
		this.ingredients.push(...ingredients); //?
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}