import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('Burger', 'Burger description', 'burger pic', 
			[ 
				new Ingredient('meat', 1),
				new Ingredient('fries', 20)
			]),
		new Recipe('Salad', 'salad description', 'salad pic', 
			[
				new Ingredient('vage', 10),
				new Ingredient('fries', 40)
			]),
		new Recipe('Chinese noodle', 'noodle description', 'noodle pic', 
			[
				new Ingredient('vage', 10),
				new Ingredient('fries', 40),
				new Ingredient('noodle', 1),
				new Ingredient('sugar', 1)			
			])
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		//return a new array.so we can only copy this array, no touch the original array.
		return this.recipes.slice();
	}

	//index:id
	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}