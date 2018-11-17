import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
	constructor(private httpClient: HttpClient,
							private recipesService: RecipesService,
							private authService: AuthService){}

	storeRecipes() {
		const token = this.authService.getToken();
		//use below to get, append, set override header values.
		// const headers = new HttpHeaders().set('Authorization', 'whatevertokenyouwant'.append) 
		
		return this.httpClient.put('https://recipe-angular-a1144.firebaseio.com/recipes.json',
			this.recipesService.getRecipes(), {
				observe: 'events', //uas 'body' as default.if we do not need response info.
				params: new HttpParams().set('auth', token)
				//headers: headers
			});
		

		//this is to make use of process of request
		/*
		const req = new HttpRequest('PUT', 
			'https://recipe-angular-a1144.firebaseio.com/recipes.json',
			this.recipesService.getRecipes(),
			{reportProgress: true, params: new HttpParams().set('auth', token)}
		);
		return this.httpClient.request(req);
		*/
	}

	getRecipes() {
		const token = this.authService.getToken();

		//solution using rxjs http and angular 6. using .pipe(map()).subscribe()
		//this.httpClient.get<Recipe[]>('https://recipe-angular-a1144.firebaseio.com/recipes.json?auth=' + token).pipe(map(
		this.httpClient.get('https://recipe-angular-a1144.firebaseio.com/recipes.json?auth=' + token, {
			observe: 'body',
			responseType: 'json' //json as default, this can be blob (for downloading file), or text, or arrayBuffer()
		}).pipe(map(
				(recipes: Recipe[]) => {
					//const recipes: Recipe[] = response.json();
					for(let recipe of recipes) {
						if(!recipe['ingredients']) {
							//console.log(recipe);
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

