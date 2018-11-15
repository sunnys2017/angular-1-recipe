import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
	recipeSelected = new EventEmitter<Recipe>();
	recipeChanged = new Subject<Recipe[]>();


	private recipes: Recipe[] = [
		new Recipe('Burger', 'Burger description', 'https://previews.123rf.com/images/rvlsoft/rvlsoft1211/rvlsoft121100009/16138750-big-hamburger-on-white-background.jpg', 
			[ 
				new Ingredient('meat', 1),
				new Ingredient('fries', 20)
			]),
		new Recipe('Salad', 'salad description', 'https://previews.123rf.com/images/baibakova/baibakova1411/baibakova141100315/33854836-fresh-mixed-vegetables-salad-selective-focus.jpg', 
			[
				new Ingredient('vage', 10),
				new Ingredient('fries', 40)
			]),
		new Recipe('Chinese noodle', 'noodle description', 'https://previews.123rf.com/images/bhofack2/bhofack21301/bhofack2130100508/17545112-homemade-quick-ramen-noodles-with-carrots-and-peas.jpg', 
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

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		//this line of code make sure new saved/added object are added
		// into the recipes list, and present.
		// need go to recipe-list.ts, ngOnInit to listen to the event: 
		// if any change happened, refresh page accordingly.
		this.recipeChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipeChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipeChanged.next(this.recipes.slice());
	}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipeChanged.next(this.recipes.slice());
	}
}