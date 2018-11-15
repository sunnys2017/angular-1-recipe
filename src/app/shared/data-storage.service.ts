import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
	constructor(private http: Http,
							private recipesService: RecipesService){}

	storeRecipes() {
		return this.http.put('https://recipe-angular-a1144.firebaseio.com/recipes.json',
			this.recipesService.getRecipes());
	}

	getRecipes() {
	//solution using rxjs http and angular 6. using .pipe(map()).subscribe()
		this.http.get('https://recipe-angular-a1144.firebaseio.com/recipes.json').pipe(map(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
					for(let recipe of recipes) {
						if(!recipe['ingredients']) {
							console.log(recipe);
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			))
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipesService.setRecipes(recipes);
				}
			);
	}
}

