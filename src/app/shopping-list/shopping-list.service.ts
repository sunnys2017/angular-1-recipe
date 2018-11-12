import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
	//update ingredients array in the service, and inform other 
	// components about the change in the event emitting.
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Pears', 6)
	];

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	getIngredients() {
		/*this slice() may create a bug, when we add new ingredient, 
		 ingredients list presented is not changed, we need to
		 add an event emitter to inform other components new array.
		 eg: shopping-list.component.ts: 
		   >shoppingListService.ingredientsChanged.subscribe(...);
		*/
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient, publishChanges = true) {
	/*do not want duplicate data
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	*/
		const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
	  if (index === -1) {
	    this.ingredients.push(ingredient);
	  } else {
	    this.ingredients[index].amount += ingredient.amount;
	  }
	  if (publishChanges) {
	    this.ingredientsChanged.emit(this.ingredients.slice());
	  }
	}

	addIngredients(ingredients: Ingredient[]) {
	/*this method works but create a lot of event emitter, remove.
		for(let ingredient of ingredients){
			this.addIngredient(ingredient);
		}
	*/
		//this.ingredients.push(...ingredients); //
		ingredients.forEach(ing => this.addIngredient(ing, false));
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}